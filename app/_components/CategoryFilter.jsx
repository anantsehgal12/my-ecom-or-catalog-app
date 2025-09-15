import React from 'react';

function CategoryFilter({ onCategoryFilter, selectedCategory }) {
    const categories = ['All', 'Kitchen', 'z']; // Add more as needed, or extract from products

    const handleChange = (e) => {
        onCategoryFilter(e.target.value);
    };

    return (
        <div className="mb-6 w-full">
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
                <h3 className="text-white font-bold text-lg mb-4">Filter by Category</h3>
                <select
                    value={selectedCategory}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat === 'All' ? '' : cat}>{cat}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default CategoryFilter;
