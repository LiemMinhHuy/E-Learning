import React, { useEffect, useState } from "react";
import axios from "axios";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/courses") // Đường dẫn này sẽ proxy tới backend nếu đã cấu hình proxy
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Không thể tải danh sách khoá học!");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Đang tải khoá học...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course._id}
          className="bg-white rounded-lg shadow p-4 flex flex-col"
        >
          <img
            src={course.image || 'https://placehold.co/400x200?text=Course'}
            alt={course.title}
            className="h-40 w-full object-cover rounded mb-4"
          />
          <h3 className="text-xl font-bold mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-2 line-clamp-2">{course.description}</p>
          <span className="text-indigo-600 font-semibold mb-2">
            {course.price ? `${course.price} VND` : 'Miễn phí'}
          </span>
          <button className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Xem chi tiết
          </button>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
