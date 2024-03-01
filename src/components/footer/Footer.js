import React from 'react'
import ImgFooter from "../../assets/pepsi-logo-94D7DEF922-seeklogo.com.png"
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className='relative h-[250px] bg-slate-900 p-5 flex flex-col items-center' >
        <div className='text-start text-slate-200 flex flex-col mt-10 justify-center items-center'>
          <img src={ImgFooter} alt="#"  className='w-12 mb-5'/>
          <ul className='flex gap-10'>
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
            <Link to="/">FAQ</Link>
            </li>
        </ul>
        </div>
    
         <span className='absolute bottom-12 w-5/6 bg-slate-200 h-[1px]'></span>
         <p className='absolute bottom-5 text-xs font-extralight text-slate-200'>© 2024 Wirrr . All right reserved</p>
    </div>
  )
}
