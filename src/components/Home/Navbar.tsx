import { Link } from 'react-router';
import { navItems } from '../../data/data';

const Navbar = () => {
    return (
        <div className='bg-[#3A4F72] text-white px-10 py-4 flex justify-between items-center' >
            <Link to='/' className='font-bold'>iREG-IT</Link>
            <div className=' flex justify-between items-center gap-10'>
                {navItems.map((item, index) =>
                    <Link key={index} to={item.path}>
                        {item.label}
                    </Link>
                )}
            </div>
            <div className='flex justify-between items-center gap-4'>
                <Link to=''>Login</Link>
                <Link to=''>Sign up</Link>
            </div>
        </div>
    )
}

export default Navbar