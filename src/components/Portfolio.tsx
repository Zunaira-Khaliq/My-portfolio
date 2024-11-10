'use client';
import Image from 'next/image';
import {motion} from 'framer-motion';
import project from '../assets/project.jpg';
import ochiDesign from '../assets/ochiDesign.png'
import personalPortfolio from '../assets/personalPortfolio.png'
import resumeBuilder from '../assets/resumeBuilder.png'


const projects = [
  {
    title: "Student Management System",
    desc: "A comprehensive Student Management System designed to simplify the management of student data for educational institutions.",
    devStack: "HTML, Typescript, Javascript",
    link: "#",
    git: "https://github.com/Zunaira-Khaliq/student_management_system.git",
    src: project
  },
  {
    title: "Ochi Design Inspire Website" ,
    desc: "An interactive, one-page scrolling website crafted with a focus on smooth animations and clean, modern design. This project showcases my skills in front-end design, seamless scrolling animations, and responsive layout creation.",
    devStack: "NextJs, Tailwind CSS",
    link: "#",
    git: "https://github.com/Zunaira-Khaliq/OchiDesign.git",
    src: ochiDesign, 
  },
  {
    title: "Interactive Resume Builder",
    desc: "A dynamic, user-centered resume builder designed to streamline the resume creation process. The project includes features like an interactive form for users to input personal and professional details, real-time content updates, and direct in-display editing for an intuitive experience.",
    devStack: "Typescript, NextJs, Tailwind CSS",
    link: "#",
    git: "https://github.com/Zunaira-Khaliq/Hackathon_01.git",
    src: resumeBuilder, 
  },
  {
    title: "Personal Portfolio Website",
    desc: "A visually engaging portfolio website that showcases my skills, projects, and professional journey.  This project reflects my commitment to clean, modern design and my ability to create user-friendly, professional web interfaces.",
    devStack: "NextJs, Tailwind CSS",
    link: "#",
    git: "#",
    src: personalPortfolio
  },
]

const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-16 mt-40' id='portfolio'>

      <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold my-12 "> Selected
        <span className="text-orange-400"> Projects</span>
      </h1>
      
      <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
        {projects.map((project, index) => (
          <motion.div
          key={index}
          initial={{opacity: 0, y: 75}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.25}} 
          className={`mt-12 flex flex-col ${index % 2 === 1 ? " md:flex-row-reverse gap-12" : "md:flex-row"}`}
          >
            <div className='space-y-2 max-w-[550px]'>
              <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
              <h2 className='text-4xl'>{project.title}</h2>
              <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
              <p className='text-xl text-orange-400 font-semibold'>{project.devStack}</p>
              <div className='w-64 h-[1px] bg-gray-400 my-4'>
                <a href={project.link} className='mr-6'>Link</a>
                <a href={project.git}>Git</a>
              </div>

            </div>
            
            <div className='flex justify-center items-center'>
              <Image src={project.src} alt={project.title} className='h-[350px] w-[500px] object-cover border rounded border-gray-700'/>
            </div>

          </motion.div>
        ))}

      </div>
    
    </div>
  )
}

export default Portfolio





