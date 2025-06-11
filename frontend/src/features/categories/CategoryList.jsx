import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/categoriesService";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {

        setError("Failed to load categories!");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 gap-2">
      {categories.map((cat) => (
        <div key={cat._id} className="bg-white rounded-lg p-4 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
