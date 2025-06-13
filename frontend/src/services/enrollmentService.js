import api from "./api";

export const enrollInCourse = async (courseId) => {
    try {
        const response = await api.post(`/courses/${courseId}/enroll`, { courseId });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Failed to enroll in course");
    }
}