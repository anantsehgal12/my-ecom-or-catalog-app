import React from 'react';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';

function ProductCardWithCheckbox({ product, isSelected, onToggle }) {
    return (
        <div className='max-w-[300px] w-full bg-gray-900 rounded-4xl flex items-center flex-col text-center relative'>
            <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(product.id)}
                className="absolute top-4 left-5 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <h2 className='text-left font-bold inline-flex gap-3 px-4 py-3 '>
                <ShoppingBag />{product.category}
            </h2>
            <Image
                alt={product.name}
                src={product.image}
                width={300}
                height={300}
                className='px-4 py-3 rounded-4xl'
            />
            <div id="productde" className='flex flex-col gap-2 justify-between text-left w-full px-4 py-3'>
                <h1 className='font-bold text-2xl'>{product.name}</h1>
                <h1 className='font-bold text-xl'>₹ {product.price}</h1>
            </div>
        </div>
    );
}

export default ProductCardWithCheckbox;
