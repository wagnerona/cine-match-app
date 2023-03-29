import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo4.png'

const Navbar = () => {
    return (
        <header className='fixed w-full h-[65px] font-medium flex justify-between items-center px-20 bg-[#EBE6E0] text-gray-900 z-40'>

            <div>
                <img src={Logo} alt='Logo' style={{ width: '230px' }} />
            </div>

            {/* full navbar */}
          
            <ul className='flex'>
                <li className='px-5 transform hover:scale-110 hover:bg-red-300 rounded-full transition duration-500'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='px-5 transform hover:scale-110 hover:bg-red-300 rounded-full transition duration-500'>
                    <Link to='/my-movies'>My movies</Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar

