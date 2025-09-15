import React from 'react';

function SortBy({ onSortChange, selectedSort }) {
    const sortOptions = [
        { value: 'name', label: 'Name A-Z' },
        { value: 'name-desc', label: 'Name Z-A' },
        { value: 'price', label: 'Price Low to High' },
        { value: 'price-desc', label: 'Price High to Low' },
    ];

    const handleChange = (e) => {
        onSortChange(e.target.value);
    };

    return (
        <div className="mb-6 w-full">
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
                <h3 className="text-white font-bold text-lg mb-4">Sort By</h3>
                <select
                    value={selectedSort}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default SortBy;
