import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { signupErrorResolver, loginErrorResolver } from "../utils/errorResolver";

const LoginSignupForm = ({title, submitFunc, errors}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(errors.length !== 0){
            if(title === "Sign up"){
                signupErrorResolver(errors, setEmailError, setPasswordError);
            }
            else{
                loginErrorResolver(errors, setEmailError, setPasswordError);
            }
        }
    }, [errors]);

    useEffect(() => {
        if (location.state?.toast) {
            toast.error(location.state.toast, {
                id: "login-toast",
                style: {
                    padding: "10px",
                    fontSize: "18px",
                    fontWeight: "bold"
                }
            });

            navigate(location.pathname, {
                replace: true,
                state: null
            });
        }
    }, [location, navigate]);

    return(
        <div className="bg-amber-50 min-h-screen flex flex-col">
            <Link className="text-3xl font-roboto-slab font-bold p-3 cursor-pointer rounded-2xl ml-10 mt-2" to="/">
                Home
            </Link>

            <div className="flex-1 mt-15 flex justify-center">
                <div className="h-110 w-100 pl-10 font-roboto-slab rounded-3xl border border-solid border-olive-400">
                    <div className="my-6">
                        <div className="text-5xl font-extrabold text-yellow-500">
                            {title}
                        </div>
                    </div>

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        submitFunc({email: email, password: password});
                    }}>
                        <div className="mb-6">
                            <label htmlFor="email" className="font-medium text-2xl">
                                Email:
                            </label>
                            <br />
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                className="w-80 px-3 py-2 mt-2 text-xl border rounded-md border-olive-400" 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <br />
                            {
                                emailError 
                                && 
                                <div className="mt-1 ml-1 text-sm text-red-600">
                                    {emailError}
                                </div>
                            }
                        </div>

                        <div className="mb-8">
                            <label htmlFor="password" className="font-medium text-2xl">
                                Password:
                            </label>
                            <br />
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                className="w-80 px-3 py-2 mt-2 text-xl border rounded-md border-olive-400" 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            {
                                passwordError 
                                && 
                                <div className="mt-1 ml-1 text-sm text-red-600">
                                    {passwordError}
                                </div>
                            }
                        </div>
                        
                        <input type="submit" value={title} className="py-2 px-10 bg-yellow-500 text-2xl text-amber-50 font-bold rounded-2xl cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginSignupForm;