import { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';

const MIN_VALUE = 1;
const MAX_VALUE = 5;

const Product = ({ id, title, price, description, category, image }) => {
    const [rating] = useState(Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE)) + MIN_VALUE);
    const [isPrime] = useState(Math.random() > 0.5);

    return (
        <div className="relative flex flex-col bg-white m-5 p-10 z-30">
            <p className="absolute right-3 top-3 italic text-gray-400">{category}</p>
            <Image width={200} height={200} objectFit="contain" src={image} alt={title} />
            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {[...Array(rating).keys()].map((_, index) => (
                    <StarIcon key={index} className="h-5 text-yellow-500" />
                ))}
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <p className="text-red-700 font-bold my-4">
                {new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(price)}
            </p>
            {isPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="prime-logo" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}
            <button className="mt-auto btn capitalize">Add to basket</button>
        </div>
    );
};

export default Product;
