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
import payday from '../public/salary.png';
import book from '../public/book.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white trnasition-color duration-300 selection:bg-amber-200 selection:text-emerald-700">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header 
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="flex items-center justify-between mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src={profilePicture} alt="image with me" className="cursor-pointer transition-all duration-300 hover:scale-110"/>
          </div>
          <ThemeToggle/>
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            className="space-y-1">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-700 to-emerald-900
              dark:bg-gradient-to-r dark:from-emerald-900 dark:via-emerald-700 dark:to-emerald-500 bg-clip-text text-transparent inline-block">
                  Andreea Brindea</h1>
              <p className="text-gray-600 dark:gray-400">Junior Software Engineer</p>
              <p className="text-gray-600 dark:gray-400">Cluj-Napoca, Romania</p>
            </motion.div>

            <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            className="space-y-3">
              <h2 className="text-md font-semibold">I am an aspiring software engineer driven by a lifelong passion for technology, born by playing video games in my childhood. </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">Through two internships, I&apos;ve developed technical foundations while increasing my enthusiasm for problem-solving. I thrive in collaborative environments, where transparency and teamwork are valued. </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">I&apos;m dedicated to continuous learning and growing both professionally and personally to become more skilled and attentive to details.</p>
            </motion.div>
            <motion.div
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            className="flex items-center gap-3">
              <Button className="rounded-full bg-gradient-to-r from-emerald-400 via-emerald-700 to-emerald-900
              dark:bg-gradient-to-r dark:from-emerald-900 dark:via-emerald-700 dark:to-emerald-500 text-white transition-transform hover:scale-105"
              >
                <a href="/AndreeaBrindea.pdf" download>Resume</a>
                </Button>
              <Link href="https://github.com/andreeabrindea" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaGithub className="w-6 h-6"></FaGithub>
              </Link>
              <Link href="https://www.linkedin.com/in/andreea-florina-brindea/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6"></FaLinkedin>
              </Link>
              <Link href="https://leetcode.com/u/andreea_brindea/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <SiLeetcode className="w-6 h-5"></SiLeetcode>
              </Link>
            </motion.div>
          </section>
          <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="space-y-6">
              <h2 className="text-3xl font-semibold text-4xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-700 to-emerald-900
              dark:bg-gradient-to-r dark:from-emerald-900 dark:via-emerald-700 dark:to-emerald-500 bg-clip-text text-transparent inline-block">
                Experience</h2>
                <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">October 2023 - present</p>
                    <p className="font-medium">Trainee</p>
                    <p className="text-teal-500">JuniorMind</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">This traineeship focused on <b>Test-Driven Development</b> and <b>Data Structures & Algorithms</b>, which serve as the foundation for building more complex features.
                  For example, I developed a radix tree, which enables prefix-based search, and a B-tree, commonly used in database implementations. <br/>
                  Another notable project I worked on is a console-based Git client, which can retrieve information about the current Git repository on any operating system.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">July 2023 - September 2023</p>
                    <p className="font-medium">Software Engineer Intern</p>
                    <p className="text-teal-500">Westernacher Consulting</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">As part of a team guided by a mentor, I gained foundational knowledge of JavaScript and frontend development.
                   We developed a warehouse management application with features such as retrieving data from a server, displaying charts based on the given data, and a chatbot.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">January 2023 - March 2023</p>
                    <p className="font-medium">Software Engineer Intern</p>
                    <p className="text-teal-500">Devnest</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">During this internship, I acquired proficiency in <b>Go</b> and essential coding practices, such as <b>single-responsibility principle</b> and <b>code reuse</b>.</p>
              </div>
          </motion.section>
          <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="space-y-8">
              <h2 className="text-3xl font-semibold text-4xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-700 to-emerald-900
              dark:bg-gradient-to-r dark:from-emerald-900 dark:via-emerald-700 dark:to-emerald-500 bg-clip-text text-transparent inline-block">
                Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={meowria} alt="doctor cat" className="rounded-lf mb-4"/>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Meowria</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Python Flask Go PostgreSQL</p>
                      </div>
                      <Button variant="ghost" size="icon"><a href="https://queen-meowria.netlify.app/">►</a></Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={kitchenStories} alt="food" className="rounded-lf mb-4"/>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Kitchen Stories</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400"> C# React Docker MongoDB</p>
                      </div>
                      <Button variant="ghost" size="icon"><a href="https://github.com/andreeabrindea/KitchenStories-FE">►</a></Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                      <Image src={payday} alt="salary" className="rounded-lf mb-4"/>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Pay day</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Go Javascript PostgreSQL Docker</p>
                        </div>
                        <Button variant="ghost" size="icon"><a href="https://till-pay-day.netlify.app/">►</a></Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                      <Image src={book} alt="book" className="rounded-lf mb-4"/>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">The book&apos;s heit</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">React Docker</p>
                        </div>
                        <Button variant="ghost" size="icon"><a href="https://thebooksheit.netlify.app/">►</a></Button>
                      </div>
                    </CardContent>
                  </Card>
              </div>
          </motion.section>
          <motion.section
             initial={{opacity: 0, y: 100}}
             animate={{opacity: 1, y: 0}}
             transition={{duration: 0.8}}
             className="space-y-6">
            <h2 className="text-3xl font-semibold text-4xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-700 to-emerald-900
              dark:bg-gradient-to-r dark:from-emerald-900 dark:via-emerald-700 dark:to-emerald-500 bg-clip-text text-transparent inline-block">
                Education</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">October 2023 - present</p>
                    <p>Master of Data Sciente in Industry and Society</p>
                    <p className="text-teal-500">Babes Bolyai University</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">October 2020 - July 2023</p>
                    <p>Bachelor of Mathematics and Computer Science</p>
                    <p className="text-teal-500">Babes Bolyai University</p>
                  </div>
                </div>
              </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
