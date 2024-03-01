import React from 'react'
import Img from '../../assets/pepsi-logo-94D7DEF922-seeklogo.com.png'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className='w-full flex flex-col md:flex-row  justify-between items-center py-5 px-10'>
        <Link to="/"><img src={Img} alt="#" className='w w-16' /></Link>
        
        
        <ul className='flex gap-10 mt-5 md:mt-0'>
            <li className='hover:underline'>
            <Link to="/">Home</Link>
            </li>
            <li className='hover:underline'>
            <Link to="tour">Our Tour</Link>
            </li>
            <li className='hover:underline'>
            <Link to="booking">Booking</Link>
            </li>
            <li className='hover:underline'>
            <Link to="faq">FAQ</Link>
            </li>
            <li className='hover:underline'>
            <Link to="login">Login</Link>
            </li>
        </ul>

    </nav>
  )
}
