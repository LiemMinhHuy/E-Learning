import React, { useEffect, useState } from 'react';
import { getCategories } from '../../services/categoriesService';

function CategoryList({ onSelectCategory }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        getCategories()
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to load categories!');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading categories...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <ul>
            <li
                onClick={() => {
                    onSelectCategory(null);
                }}
            >
                Tất cả
            </li>
            {categories.map((cat) => (
                <li
                    key={cat._id}
                    onClick={() => {
                        console.log('Category ID:', cat._id);
                        onSelectCategory(cat._id);
                    }}
                >
                    {cat.name}
                </li>
            ))}
        </ul>
    );
}

export default CategoryList;
