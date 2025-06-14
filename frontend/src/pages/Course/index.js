import React, { useState } from "react";
import CourseList from "../../features/courses/CourseList";
import CategoryList from "../../features/categories/CategoryList";

function ListCourse() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">All Courses</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4 w-full">
          <div className="bg-white rounded-lg  p-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">All Course</h2>
            <CategoryList onSelectCategory={handleSelectCategory} />
          </div>
        </aside>
        <main className="flex-1">
          <CourseList categoryId={selectedCategory} />
        </main>
      </div>
    </div>
  );
}

export default ListCourse;
