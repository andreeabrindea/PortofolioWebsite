"use client";
import Image  from 'next/image';
import profilePicture from '../public/me.jpg';
import ThemeToggle from '../components/ui/theme-toggle';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { Card, CardContent } from "../components/ui/card";
import meowria from '../public/kitty.png';
import kitchenStories from '../public/hot-pot.png';

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
          <section className='space-y-10'>
            <motion.div
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            className='space-y-1'>
              <h1 className='text-4xl font-bold bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 bg-clip-text text-transparent inline-block'>
                  Andreea Brindea</h1>
              <p className='text-gray-600 dark:gray-400'>Junior Software Engineer</p>
              <p className='text-gray-600 dark:gray-400'>Cluj-Napoca, Romania</p>
            </motion.div>

            <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            className='space-y-3'>
              <h2 className='text-md font-semibold'>I am an aspiring software engineer driven by a lifelong passion for technology, which began in childhood through computer games. </h2>
              <p className='text-gray-600 text-sm dark:text-gray-400 max-w-2xl'>Through two internships, I've developed technical foundations while increasing my enthusiasm for problem-solving. I thrive in collaborative environments, where transparency and teamwork are valued. </p>
              <p className='text-gray-600 text-sm dark:text-gray-400 max-w-2xl'>I'm dedicated to continuous learning and growing both professionally and personally to become more skilled and attentive to details.</p>
            </motion.div>
            <motion.div
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            className='flex items-center gap-3'>
              <Button className='rounded-full bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 text-white transition-transform hover:scale-105'>
                Resume</Button>
              <Link href="#" className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors'>
                <FaGithub className='w-6 h-6'></FaGithub>
              </Link>
              <Link href="#" className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors'>
                <FaLinkedin className='w-6 h-6'></FaLinkedin>
              </Link>
              <Link href="#" className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors'>
                <SiLeetcode className='w-6 h-5'></SiLeetcode>
              </Link>
            </motion.div>
          </section>
          <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className='space-y-8'>
              <h2 className='text-3xl font-semibold bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 bg-clip-text text-transparent
              inline block'>Experience</h2>
              <div className='space-y-2'>
                <div className="flex items-center justify-between">
                  <div className='space-y-1'>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>July 2023 - September 2023</p>
                    <p className='font-medium'>Frontend Developer Intern</p>
                    <p className='text-teal-500'>Westernacher Consulting</p>
                  </div>
                </div>
                <p className='text-gray-600 dark:text-gray-400 text-sm'></p>
              </div>
              <div className='space-y-2'>
                <div className="flex items-center justify-between">
                  <div className='space-y-1'>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>January 2023 - March 2023</p>
                    <p className='font-medium'>Software Developer Intern</p>
                    <p className='text-teal-500'>Devnest</p>
                  </div>
                </div>
                <p className='text-gray-600 dark:text-gray-400 text-sm'></p>
              </div>
          </motion.section>
          <motion.section
             initial={{opacity: 0, y: 100}}
             animate={{opacity: 1, y: 0}}
             transition={{duration: 0.8}}
             className='space-y-8'>
            <h2 className='text-3xl font-semibold bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 bg-clip-text text-transparent
              inline block'>Education</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className='text-sm text-gray-600 dark:text-gray-400'>October 2020 - July 2023</p>
                    <p>Mathematics and Computer Science</p>
                    <p className='text-teal-500'>Babes Bolyai University</p>
                  </div>
                </div>
              </div>
          </motion.section>
          <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className='space-y-8'>
              <h2 className='text-3xl font-semibold bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 bg-clip-text text-transparent
              inline block'>Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Card className='bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer'>
                  <CardContent className='p-4'>
                    <Image src={meowria} alt='doctor cat' className='rounded-lf mb-4'/>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className='font-medium'>Meowria</h3>
                        <p className='text-sm text-gray-600 dark:text-gray-400'>Python Flask Go SQL</p>
                      </div>
                      <Button variant="ghost" size="icon">►</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className='bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer'>
                  <CardContent className='p-4'>
                    <Image src={kitchenStories} alt='food' className='rounded-lf mb-4'/>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className='font-medium'>Kitchen Stories</h3>
                        <p className='text-sm text-gray-600 dark:text-gray-400'>Python Flask Go SQL</p>
                      </div>
                      <Button variant="ghost" size="icon">►</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
