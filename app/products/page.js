"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Navbar from "../_components/Navbar";
import Searchbar from "../_components/Searchbar";
import PriceFilter from "../_components/PriceFilter";
import CategoryFilter from "../_components/CategoryFilter";
import SortBy from "../_components/SortBy";
import Lenis from "lenis";
import Cards from "../_components/Card";

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

const sortProducts = (products, sortBy) => {
  switch(sortBy) {
    case 'name':
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return [...products].sort((a, b) => b.name.localeCompare(a.name));
    case 'price':
      return [...products].sort((a, b) => a.price - b.price);
    case 'price-desc':
      return [...products].sort((a, b) => b.price - a.price);
    default:
      return products;
  }
};

export default function Products() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const initialMinPrice = parseInt(searchParams.get('minPrice')) || 0;
  const initialMaxPrice = parseInt(searchParams.get('maxPrice')) || Infinity;
  const initialSortBy = searchParams.get('sortBy') || 'name';

  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function to destroy Lenis instance
    return () => {
      lenis.destroy();
    };
  }, []);

  // Function to apply all filters and sorting
  const applyFilters = (search = searchTerm, min = minPrice, max = maxPrice, cat = category, sort = sortBy) => {
    let filtered = products;

    // Apply search filter
    if (search.trim() !== '') {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (cat !== '') {
      filtered = filtered.filter(product => product.category === cat);
    }

    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= min && product.price <= max
    );

    // Apply sorting
    filtered = sortProducts(filtered, sort);

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    applyFilters(term, minPrice, maxPrice, category, sortBy);
  };

  const handlePriceFilter = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    applyFilters(searchTerm, min, max, category, sortBy);
  };

  const handleCategoryFilter = (cat) => {
    setCategory(cat);
    applyFilters(searchTerm, minPrice, maxPrice, cat, sortBy);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    applyFilters(searchTerm, minPrice, maxPrice, category, sort);
  };

  return (
    <main className="px-8 py-8">
      <Navbar />
      <Searchbar onSearch={handleSearch} />
      <div className="flex flex-wrap gap-4">
        <CategoryFilter onCategoryFilter={handleCategoryFilter} selectedCategory={category} />
        <PriceFilter 
          onPriceFilter={handlePriceFilter} 
          minPrice={minPrice} 
          maxPrice={maxPrice} 
        />
        <SortBy onSortChange={handleSortChange} selectedSort={sortBy} />
      </div>
      <Cards products={filteredProducts} />
    </main>
  );
}
