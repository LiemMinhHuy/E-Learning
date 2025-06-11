import api from "./api";

export const getCategories = async () => {
    try {
        const response = await api.get("/categories");
        return response.data.data || response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Failed to load categories");
    }
};
