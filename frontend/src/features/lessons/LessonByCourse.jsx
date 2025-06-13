import React, { useEffect, useState } from "react";
import { getLessonsByCourse } from "../../services/coursesService";
import Button from "~/components/common/Button";
import Login from "~/pages/Login";

function LessonByCourse({ courseId, onRegister }) {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    if (!courseId) return;
    getLessonsByCourse(courseId)
      .then((data) => {
        setLessons(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load lessons!");
        setLoading(false);
      });
  }, [courseId]);

  // Khi user thay đổi trong localStorage (sau đăng nhập), cập nhật lại state user
  useEffect(() => {
    const handleStorage = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleRegister = () => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    if (onRegister) onRegister();
  };

  const handleLoginSuccess = () => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setShowLogin(false);
  };

  if (loading) return <div>Loading lessons...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!lessons.length) return <div>No lessons found for this course.</div>;

  return (
    <div className="relative">
      {/* Nội dung trang */}
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Lessons
          </h5>
          <Button onClick={handleRegister}>
            <span className="font-black px-6 py-2">Register</span>
          </Button>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {lessons.map((lesson, idx) => (
              <li key={lesson._id} className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {lesson.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Duration: {lesson.content || "N/A"}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {/* Có thể hiển thị trạng thái, điểm, hoặc nút action ở đây */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Overlay login nếu chưa đăng nhập và showLogin true */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-gray-50 rounded-lg p-8 min-w-[350px] relative">
            <Login onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}
    </div>
  );
}

export default LessonByCourse;
