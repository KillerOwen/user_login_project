import api from "./axios";

const signupApi = async (userData) => {
    const response = await api.post("/signup", userData);
    return response.data;
}

const loginApi = async (userData) => {
    const response = await api.post("/login", userData);
    return response.data;
}

const getUserApi = async () => {
    const response = await api.get("/me");
    return response.data;
}

const logoutApi = async () => {
    const response = await api.post("/logout");
    return response.data;
}

export {signupApi, loginApi, getUserApi, logoutApi};