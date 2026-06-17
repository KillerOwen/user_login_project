import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserApi, logoutApi } from "../../services/authService";
import LoadingPage from "../loading_page/LoadingPage";

const baseStyling = `text-3xl font-roboto-slab font-bold p-3 flex items-center justify-center cursor-pointer rounded-2xl`;

const HomePage = ({loading, setLoading}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            try{
                const response = await getUserApi();
                if(response.success){
                    setUser(response.user);
                }
            }
            catch(err){
                if (err.response?.status !== 401) {
                    console.error(err);
                }
            }
        }

        getUser();
    }, []);

    const logoutUser = async () => {
        try{
            setLoading(true);

            const response = await logoutApi();
            await new Promise(resolve => setTimeout(resolve, 1000));

            setUser(null);
        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    }

    if(loading){
        return <LoadingPage text="Logging out !" />
    }

    return(
        <div className="max-h-screen bg-amber-50">
            <div className="grid grid-cols-8 gap-4 mx-5 my-4">
                <Link className={`${baseStyling}`} to="/">
                    Home
                </Link>

                {
                    user 
                    ?
                    <>
                        <div className="text-2xl font-semibold font-roboto-slab flex items-center justify-end col-start-5 col-span-3">
                            Welcome, {user.email}
                        </div>
                        <button className={`${baseStyling} col-start-8 bg-yellow-500 text-amber-50`} onClick={logoutUser}>
                            Log out
                        </button>
                    </>
                    :
                    <>
                        <Link className={`${baseStyling} col-start-7 bg-yellow-500 text-amber-50`} to="/login">
                            Log in
                        </Link>

                        <Link className={`${baseStyling}`} to="/signup">
                            Sign up
                        </Link>
                    </>
                }
            </div>

            <div className="ml-15 mt-40 font-roboto-slab text-6xl font-extrabold">
                <div className="mb-6 text-yellow-500">
                    Welcome,
                </div>

                <div>
                    Your fitness journey starts here
                </div>
            </div>
            
            <Link 
                className={`${baseStyling} border ml-15 mt-15 w-90 bg-yellow-500 text-amber-50`} 
                to={user ? "/workouts" : "/login"}
                state={
                    user 
                    ? null
                    : { toast: "Please login to access workouts" }
                }    
            >
                Explore Workouts
            </Link>
        </div>
    );
}

export default HomePage;