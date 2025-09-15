"use client"
import { useState } from "react";
import Navbar from "../_components/Navbar";
import ProductCardWithCheckbox from "../_components/ProductCardWithCheckbox";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "Vacuum Flask Set",
    category: "Kitchen",
    price: 349,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=scale-down/cdn-ecommerce/store_01JGREJPGR6K9938PV8SGWSE93/assets/4676bd78-221d-4372-a1dd-eb383ed6e1fb.png"
  },
  {
    id: 2,
    name: "Vacuum Flask",
    category: "z",
    price: 2449,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=scale-down/cdn-ecommerce/store_01JGREJPGR6K9938PV8SGWSE93/assets/4676bd78-221d-4372-a1dd-eb383ed6e1fb.png"
  }
];

export default function LinkGenerator() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortBy, setSortBy] = useState('price');
  const [generatedLink, setGeneratedLink] = useState('');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'name-desc', label: 'Name Z-A' },
    { value: 'price', label: 'Price Low to High' },
    { value: 'price-desc', label: 'Price High to Low' },
  ];

  const toggleCategory = (cat) => {
    if (cat === 'All') {
      if (selectedCategories.length === categories.length - 1) {
        setSelectedCategories([]);
      } else {
        setSelectedCategories(categories.filter(c => c !== 'All'));
      }
    } else {
      if (selectedCategories.includes(cat)) {
        setSelectedCategories(selectedCategories.filter(c => c !== cat));
      } else {
        setSelectedCategories([...selectedCategories, cat]);
      }
    }
  };

  const toggleProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const selectAllProducts = () => {
    const allFilteredIds = filteredProducts.map(p => p.id);
    if (selectedProducts.length === filteredProducts.length && allFilteredIds.every(id => selectedProducts.includes(id))) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(allFilteredIds);
    }
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    if (product.price < minPrice || product.price > maxPrice) {
      return false;
    }
    return true;
  });

  const generateLink = () => {
    const params = new URLSearchParams();
    if (selectedCategories.length > 0) params.set('category', selectedCategories.join(','));
    if (minPrice > 0) params.set('minPrice', minPrice);
    if (maxPrice < Infinity) params.set('maxPrice', maxPrice);
    params.set('sortBy', sortBy);
    if (selectedProducts.length > 0) params.set('productIds', selectedProducts.join(','));

    const link = `${window.location.origin}/products?${params.toString()}`;
    setGeneratedLink(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    toast(
      <div>
        👆 Link copied to clipboard! View <a href={generatedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">here....</a>
      </div>
    );
  };

  return (
    <main className="px-8 py-8">
      <Navbar />
      <div className="bg-gray-800 rounded-lg p-6 mt-20 w-full">
        <h1 className="text-white text-2xl font-bold mb-6">Custom Link Generator</h1>
        
        <div className="mb-4">
          <label className="block text-white mb-2">Categories</label>
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <label key={cat} className="flex items-center text-white">
                <input
                  type="checkbox"
                  checked={cat === 'All' ? selectedCategories.length === categories.length - 1 : selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="mr-2"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2">Min Price</label>
          <input
            type="number"
            value={minPrice || ''}
            onChange={(e) => setMinPrice(parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2">Max Price</label>
          <input
            type="number"
            value={maxPrice === Infinity ? '' : maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value) || Infinity)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="No limit"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <button
          onClick={generateLink}
          className="w-full px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition-colors mb-4"
        >
          Generate Link
        </button>

        <div className="mb-4">
          <label className="flex items-center text-white mb-2">
            <input
              type="checkbox"
              checked={filteredProducts.length > 0 && filteredProducts.every(p => selectedProducts.includes(p.id))}
              onChange={selectAllProducts}
              className="mr-2"
            />
            Select All Products
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {filteredProducts.map(product => (
              <ProductCardWithCheckbox
                key={product.id}
                product={product}
                isSelected={selectedProducts.includes(product.id)}
                onToggle={toggleProduct}
              />
            ))}
          </div>
        </div>

        {generatedLink && (
          <div className="mt-4">
            <p className="text-white mb-2">Generated Link:</p>
            <div className="flex">
              <input
                type="text"
                value={generatedLink}
                readOnly
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-md text-white"
              />
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-r-md"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
