"use client";
import Image  from 'next/image';
import profilePicture from '../public/me.jpg';
import ThemeToggle from '../components/ui/theme-toggle';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white trnasition-color duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header 
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="flex items-center justify-between mb-12">
          <div className='w-20 h-20 rounded-full overflow-hidden'>
            <Image src={profilePicture} alt='image with me' className='cursor-pointer transition-all duration-300 hover:scale-110'></Image>
          </div>
          <ThemeToggle/>
        </motion.header>

        <main className='space-y-10'>
          <motion.div
           initial={{opacity: 0, x: 100}}
           animate={{opacity: 1, x: 0}}
           transition={{duration: 0.8}}
           className='space-y-1'>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-600 bg-clip-text text-transparent inline-block'>
                Andreea Brindea</h1>
            <p className='text-gray-600 dark:gray-400'>Junior Software Engineer</p>
            <p className='text-gray-600 dark:gray-400'>Cluj-Napoca, Romania</p>
          </motion.div>
          <motion.div
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className='flex items-center gap-3'>
            <Button className='rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105'>
              Resume</Button>
            <Link href="#" className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors'>
              <FaGithub className='w-6 h-6'></FaGithub>
            </Link>
            <Link href="#" className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors'>
              <FaLinkedin className='w-6 h-6'></FaLinkedin>
            </Link>
            <Link href="#" className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors'>
              <BsFillTelephoneFill className='w-6 h-5'/>
            </Link>
            <Link href="#" className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors'>
              <FaGithub className='w-6 h-6'></FaGithub>
            </Link>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
