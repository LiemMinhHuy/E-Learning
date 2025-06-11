import React from "react";
import { useParams } from "react-router-dom";
import LessonByCourse from "../../features/lessons/LessonByCourse";

function LessonPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Lessons of Course</h1>
      <LessonByCourse courseId={id} />
    </div>
  );
}

export default LessonPage;
