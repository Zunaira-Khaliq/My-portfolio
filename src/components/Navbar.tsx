"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { motion } from 'framer-motion';

const navLinks = [
    {title: "Home", path: "#hero"},
    {title: "About", path: "#about"},
    {title: "Portfolio", path: "#portfolio"},
    {title: "Skills", path: "#skills"}
];


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNav =() => {
        setNav(!nav)
    }

    const closeNav =() => {
        setNav(false)
    }

    const menuVariants = {
        open:{
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed:{
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); 
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div className={`pt-2 ${isScrolled ? 'bg-gradient-to-b from-[#381a5f] to-black backdrop-blur-md' : 'bg-transparent'} text-white/70 fixed w-full top-0 z-50 transition-colors duration-300`}>

       <div className="ml-96 hidden md:flex items-center py-2 mx-auto max-w-[400px] ">
           <ul className="flex flex-row p-4 space-x-16">
            {navLinks.map((link, index) => (
                <li key={index}>
                    <Link href={link.path}>
                       <p>{link.title}</p>
                    </Link>
                </li>
            ))}

            <li>
                <a href="#contact" className="group">
                    <h1 className="text-lg font-bold text-white/70 cursor-pointer whitespace-nowrap">Contact Me</h1>
                    <div className="relative">
                        <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out
                         bg-orange-400 rounded-full group-hover:w-full"></div>

                        <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out
                         bg-orange-600 rounded-full group-hover:w-full"></div>
                    </div>
                </a>
            </li>
           </ul>
       </div>

       <div onClick={toggleNav} className="md:hidden absolute top-5 border rounded text-white/70 border-white/70 p-2 z-50">
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
       </div>

        <motion.div
        initial={false}
        animate={nav ? 'open' : 'closed'}
        variants={menuVariants}
        className="fixed left-0 top-0 w-full z-40 bg-black/90"
        >
            <ul className="text-4xl font-semibold my-24 text-center space-y-8">
                {navLinks.map((link, index)=> (
                    <li key={index}>
                        <Link href={link.path} onClick={closeNav}>
                        {link.title}
                        </Link>
                    </li>
                ))}
            </ul>

        </motion.div>

    </div>
  )
}

export default Navbar