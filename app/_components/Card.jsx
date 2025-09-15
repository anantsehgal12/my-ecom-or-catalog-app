import React from 'react';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';


function Cards({ products }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 justify-items-center">
            {products.map((product) => (
                <div key={product.id} className='max-w-[300px] w-full bg-gray-900 rounded-4xl flex items-center flex-col text-center'>
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
            ))}
        </div>
    );
}

export default Cards