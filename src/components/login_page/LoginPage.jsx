import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginSignupForm from "../../templates/LoginSignupForm";
import { loginApi } from "../../services/authService";
import LoadingPage from "../loading_page/LoadingPage";

const LoginPage = ({loading, setLoading}) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const loginUser = async (data) => {
        try{
            setLoading(true);

            const response = await loginApi(data);
            setErrors([]);
            await new Promise(resolve => setTimeout(resolve, 1000));

            navigate("/", {
                replace: true
            })
        }
        catch(err){
            console.log(err.response.data.msg);
            
            setErrors(err.response.data.msg);
        }
        finally{
            setLoading(false);
        }
    }

    if(loading){
        return <LoadingPage text="Logging you in !" />
    }

    return <LoginSignupForm title="Log in" submitFunc={loginUser} errors={errors} />
}

export default LoginPage;