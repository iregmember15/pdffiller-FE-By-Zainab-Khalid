import { Link } from 'react-router-dom';
import { navItems } from '../../data/data';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-[#3A4F72] text-white px-4 py-4 md:px-10 flex justify-between items-center'>
            <Link to='/' className='font-bold text-lg md:text-xl'>iREG-IT</Link>
            <div className='hidden md:flex justify-between items-center gap-10'>
                {navItems.map((item, index) =>
                    <Link key={index} to={item.path} className='hover:underline'>
                        {item.label}
                    </Link>
                )}
            </div>
            <div className='hidden md:flex justify-between items-center gap-4'>
                <Link to='' className='hover:underline'>Login</Link>
                <Link to='' className='hover:underline'>Sign up</Link>
            </div>
            <button className='md:hidden' onClick={() => setIsOpen(!isOpen)} title='Toggle navigation'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                </svg>
            </button>
            {
                isOpen && (
                    <div className='absolute top-16 left-0 w-full bg-[#3A4F72] flex flex-col items-center md:hidden'>
                        {navItems.map((item, index) =>
                            <Link key={index} to={item.path} className='py-2 hover:underline'>
                                {item.label}
                            </Link>
                        )}
                        <Link to='' className='py-2 hover:underline'>Login</Link>
                        <Link to='' className='py-2 hover:underline'>Sign up</Link>
                    </div>
                )
            }
        </nav >
    );
}

export default Navbar;