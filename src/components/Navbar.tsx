import { navMenu } from '../lib/constants';
import { BsCart } from 'react-icons/bs';
// import { cart } from '../lib/cart';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const appContext = useContext(AppContext);
    return (
        <nav className='bg-white'>
            <div className='container mx-auto flex items-center justify-between py-4 px-6'>
                <div className='flex gap-2'>
                    <h3 className='text-2xl font-semibold'>Naomi</h3>
                    <p className='text-purple-500 text-3xl'>.</p>
                </div>
                <ul className='hidden md:flex'>
                    {
                        navMenu.map((menu, index) => (
                            <li key={index} className='inline-block mx-4 text-lg font-semibold hover:text-purple-500'>
                                <a href={menu.path}>{menu.label}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='md:flex items-center gap-4 hidden'>
                    <button className='bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300'>
                        Login
                    </button>
                    <button className='relative'>
                        <BsCart className='text-2xl text-purple-500' />
                        <span className='absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1'>{appContext?.cart.length}</span>
                    </button>
                </div>
                <div className='md:hidden flex gap-4'>
                <button className='relative'>
                        <BsCart className='text-2xl text-purple-500' />
                        <span className='absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1'>{appContext?.cart.length}</span>
                </button>    
                </div>
            </div>
        </nav>
    );
}

export { Navbar }