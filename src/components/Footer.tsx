import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] container mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Zunaira Khaliq</h1>

        <div className='flex space-x-6 mt-4'>
            <a href="https://www.linkedin.com/in/zunaira-khaliq-b886bb2b7/" className='hover:text-gray-300'>
                <FaLinkedin size={24}/>
                <p className='sr-only'>LinkedIn</p>
            </a>
            <a href="#" className='hover:text-gray-300'>
                <FaTwitter size={24}/>
                <p className='sr-only'>Twitter</p>
            </a>
            <a href="https://www.instagram.com/zunairakhaliq24/profilecard/?igsh=bjhqbzJ6cHdlY2d4" className='hover:text-gray-300'>
                <FaInstagram size={24}/>
                <p className='sr-only'>Instagram</p>
            </a>
        </div>
        
    </div>
  )
}

export default Footer