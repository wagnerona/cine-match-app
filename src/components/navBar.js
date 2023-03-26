import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo3.png'

const Navbar = () => {
    return (
        <header className='fixed w-full h-[80px] flex justify-between items-center px-5 sm:px-20 bg-neutral-800 text-gray-300 z-40'>

            <div>
                <img src={Logo} alt='Logo' style={{ width: '80px' }} />
            </div>

            {/* full navbar */}
          
            <ul className='flex'>
                <li className='px-5'>
                    <Link to='/home'>Home</Link>
                </li>
                <li className='pl-5'>
                    <Link to='/movie-gallery'>My movies</Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar

