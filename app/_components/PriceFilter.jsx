import React from 'react';

function PriceFilter({ onPriceFilter, minPrice, maxPrice }) {
    const handleMinPriceChange = (e) => {
        const value = e.target.value === '' ? 0 : parseInt(e.target.value);
        onPriceFilter(value, maxPrice);
    };

    const handleMaxPriceChange = (e) => {
        const value = e.target.value === '' ? Infinity : parseInt(e.target.value);
        onPriceFilter(minPrice, value);
    };

    return (
        <div className="mb-6 w-full">
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
                <h3 className="text-white font-bold text-lg mb-4">Filter by Price</h3>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
                    <div className="flex-1 w-full sm:w-auto">
                        <label htmlFor="min-price" className="block text-sm font-medium text-gray-300 mb-2">
                            Min Price ($)
                        </label>
                        <input
                            type="number"
                            id="min-price"
                            min="200"
                            placeholder="200"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleMinPriceChange}
                        />
                    </div>
                    <div className="flex-1 w-full sm:w-auto">
                        <label htmlFor="max-price" className="block text-sm font-medium text-gray-300 mb-2">
                            Max Price ($)
                        </label>
                        <input
                            type="number"
                            id="max-price"
                            min="200"
                            placeholder="No limit"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleMaxPriceChange}
                        />
                    </div>
                    <button
                        onClick={() => onPriceFilter(0, Infinity)}
                        className="w-full sm:w-auto px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition-colors"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PriceFilter;
