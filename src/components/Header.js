import Image from 'next/image';
import { ShoppingCartIcon, MenuIcon, SearchIcon } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

const Header = () => {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header className="sticky top-0 z-50">
            {/* top nav */}
            <div className="flex flex-grow items-center p-1 py-2 space-x-6 bg-amazon_blue">
                <div className="flex items-center flex-grow sm:flex-grow-0 mt-2">
                    <Image
                        width={150}
                        height={40}
                        alt="Amazon logo"
                        objectFit="contain"
                        className="cursor-pointer"
                        onClick={() => router.push('/')}
                        src="https://links.papareact.com/f90"
                    />
                </div>
                <div className="sm:flex items-center flex-grow h-10 hidden bg-yellow-400 hover:bg-yellow-500 rounded-md cursor-pointer">
                    <input
                        type="text"
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
                    />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* bottom nav */}
                <div className="flex items-center text-xs space-x-6 text-white whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p>{session ? `Hi ${session.user.name},` : 'Sign In'}</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div
                        className="link"
                        onClick={() => (session ? router.push('/orders') : router.push('/api/auth/signin'))}
                    >
                        <p>Return</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="link flex items-center relative" onClick={() => router.push('/checkout')}>
                        <span className="bg-yellow-400 h-4 w-4 text-center rounded-full text-black font-bold top-0 right-0 md:right-10 absolute">
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>
            <div className="bg-yellow-500"></div>
            {/* bottom nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 text-white text-sm bg-amazon_blue-light">
                <p className="flex items-center link">
                    <MenuIcon className="h-6 mr-1" />
                </p>
                <p className="link">All </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Delas</p>
                <p className="link hidden lg:inline-block">Electronics</p>
                <p className="link hidden lg:inline-block">Food & Grocery</p>
                <p className="link hidden lg:inline-block">Prime</p>
                <p className="link hidden lg:inline-block">Buy Again</p>
                <p className="link hidden lg:inline-block">Shopper Toolkit</p>
                <p className="link hidden lg:inline-block">Health & Personal Care</p>
            </div>
        </header>
    );
};

export default Header;
