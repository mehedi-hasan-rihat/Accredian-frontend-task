import React from 'react'
import Logo from '../assets/logo.png'
import DownArrow from '../assets/vector-1.png'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between max-w-[1360px] mx-auto mt-5'>
        <div className="flex gap-8 items-center">
            <img src={Logo} alt="Logo" />
            <div className="bg-[#1A73E8] text-white flex items-center gap-2 p-2 px-4 w-max rounded-md">
                <p>Courses</p>
                <img src={DownArrow} alt="downArrow" />
            </div>
        </div>



        <div className="text-[#1A202C] flex items-center gap-8">
               <p>Refer & Earn</p> 
               <p>Resources</p> 
               <p>About Us</p> 
               <button className='bg-[#94A3B833] rounded-md py-2 px-4' >Login</button> 
               <button className='bg-[#1A73E8]  text-white rounded-md py-2 px-4'>Try for free</button> 
            </div>
    </div>
  )
}
