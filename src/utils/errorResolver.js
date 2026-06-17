
const signupErrorResolver = (errors, setEmailError, setPasswordError) => {
    errors.forEach(err => {
        if(err.path === "email"){
            if(err.kind === "required"){
                setEmailError("Email is required");
            }
            else if(err.kind === "user defined"){
                setEmailError("Please enter a valid email");
            }
            else if(err.kind === "duplicate key"){
                setEmailError("Email has to be unique");
            }
        }
        else if(err.path === "password"){
            if(err.kind === "required"){
                setPasswordError("Password is required");
            }
            if(err.kind === "minlength"){
                setPasswordError("Password has to be min 6 characters long");
            }
        }
    })
}

const loginErrorResolver = (errors, setEmailError, setPasswordError) => {
    errors.forEach(err => {
        if(err.path === "email"){
            if(err.kind === "required"){
                setEmailError("Email is required");
            }
            else if(err.kind === "unregistered"){
                setEmailError("Please enter a valid email");
            }
        }
        else if(err.path === "password"){
            if(err.kind === "required"){
                setPasswordError("Password is required");
            }
            if(err.kind === "incorrect"){
                setPasswordError("Password is not correct");
            }
        }
    })
}

export {signupErrorResolver, loginErrorResolver};