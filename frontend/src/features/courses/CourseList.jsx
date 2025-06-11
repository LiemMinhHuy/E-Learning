import React, { useEffect, useState } from "react";
import { getCourses } from "../../services/coursesService";
import CourseCard from "./CourseCard";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCourses()
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load courses!");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;
