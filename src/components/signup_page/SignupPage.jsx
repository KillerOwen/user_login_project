import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginSignupForm from "../../templates/LoginSignupForm";
import { signupApi } from "../../services/authService";
import LoadingPage from "../loading_page/LoadingPage";

const SignupPage = ({loading, setLoading}) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const signupUser = async (data) => {
        try{
            setLoading(true);

            const response = await signupApi(data);
            setErrors([]);
            await new Promise(resolve => setTimeout(resolve, 1000));

            navigate("/", {
                replace: true
            })
        }
        catch(err){
            setErrors(err.response.data.msg);
        }
        finally{
            setLoading(false);
        }
    }

    if(loading){
        return <LoadingPage text="Signing up user !" />
    }

    return <LoginSignupForm title="Sign up" submitFunc={signupUser} errors={errors} />
}

export default SignupPage;