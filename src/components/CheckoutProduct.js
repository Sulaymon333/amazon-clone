import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({ id, title, price, rating, description, category, image, isPrime }) => {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            rating,
            category,
            image,
            isPrime,
        };

        // use item into redux store
        dispatch(addToBasket(product));
    };
    const removeItemFromBasket = () => {
        // remove item from redux store
        dispatch(removeFromBasket({ id }));
    };
    return (
        <div className="grid grid-cols-5">
            <Image width={200} height={200} objectFit="contain" src={image} alt={title} />

            {/* middle */}
            <div className="col-span-3 mx-5">
                <p className="font-medium">{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className="text-yellow-500 h-5" />
                        ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <p className="text-red-700 font-bold my-4">
                    {new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(price)}
                </p>
                {isPrime && (
                    <div className="flex items-center space-x-2">
                        <img className="w-12" src="https://links.papareact.com/fdw" alt="prime-logo" />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
            {/* right add/remove buttons */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="btn capitalize">
                    Add to basket
                </button>
                <button onClick={removeItemFromBasket} className="btn capitalize">
                    Remove from basket
                </button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
