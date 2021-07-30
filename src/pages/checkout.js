import Image from 'next/image';
import { useSession } from 'next-auth/client';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';

const checkout = () => {
    const [session] = useSession();
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* left */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        width={1020}
                        height={250}
                        objectFit="contain"
                        alt="checkout banner"
                        src="https://links.papareact.com/ikj"
                    />
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 ? 'Your Amazon Basket is empty' : 'Your Shopping Basket'}
                        </h1>
                        {items.map((item, i) => (
                            <CheckoutProduct key={i} {...item} />
                        ))}
                    </div>
                </div>

                {/* right */}
                {items.length > 0 && (
                    <div className="flex flex-col bg-white p-10 shadow-md">
                        <h2 className="whitespace-nowrap mb-3">
                            Subtotal ({items.length} items):{' '}
                            <span className="font-bold">
                                {new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(total)}
                            </span>
                        </h2>
                        <button
                            disabled={!session}
                            className={`btn ${
                                !session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
                            }`}
                        >
                            {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default checkout;
