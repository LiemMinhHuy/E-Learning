import React from "react";
import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/course/${course._id}/lessons`);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img
        src={course.image || 'https://placehold.co/400x200?text=Course'}
        alt={course.title}
        className="h-40 w-full object-cover rounded mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      <p className="text-gray-600 text-base mb-2 line-clamp-2">{course.description}</p>
      <span className="text-indigo-600 font-semibold mb-2">
        {course.price ? `${course.price} $` : 'Free'}
      </span>
      <button className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" onClick={handleViewDetails}>
        View details
      </button>
    </div>
  );
}

export default CourseCard;
