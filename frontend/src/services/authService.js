import api from "./api";

export const login = async (email, password, remember) => {
    try {
        const response = await api.post("/auth/login", { email, password, remember });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Login failed");
    }
}

export const register = async (formData) => {
    try {
        const response = await api.post("/auth/register", formData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Registration failed");
    }
}