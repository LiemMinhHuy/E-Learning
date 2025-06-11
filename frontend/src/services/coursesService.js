import api from "./api";

export const getCourses = async () => {
    try {
        const response = await api.get("/courses");
        return response.data.data || response.data; // tuỳ backend trả về
    } catch (error) {
        throw error.response ? error.response.data : new Error("Lấy danh sách khoá học thất bại");
    }
};

export const getCourseById = async (id) => {
    try {
        const response = await api.get(`/courses/${id}`);
        // Có thể trả về response.data.data hoặc response.data tuỳ backend
        return response.data.data || response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Lấy chi tiết khoá học thất bại");
    }
};

export const getLessonsByCourse = async (courseId) => {
    try {
        const response = await api.get(`/courses/${courseId}/lessons`);
        return response.data.data || response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Lấy danh sách bài học cho khoá học này thất bại");
    }
};

// Có thể bổ sung các hàm khác như createCourse, updateCourse, ... sau này