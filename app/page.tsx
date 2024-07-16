'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { AnimatedIntro } from '../components/AnimatedIntro';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { WorkExperience } from '../components/sections/Work';

export default function Home() {
  const [justLoaded, setJustLoaded] = useState(true);
  const controls = useAnimationControls();

  return (
    <>
      {justLoaded && (
        <AnimatedIntro
          onAnimationComplete={() => {
            setJustLoaded(false);
            controls.start({
              y: 0,
              opacity: 1,
            });
          }}
        />
      )}
      <main className="pb-24">
        <div className="md:p-8 p-6 m-auto lg:w-3/4 xl:w-4/5 w-full min-h-screen flex flex-col justify-center -top-16 relative">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.3 }}
            className="text-l text-slate-200 mb-7"
          >
            Hello, my name is
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mb-2 md:text-7xl  text-4xl text-indigo-500 font-bold"
          >
            Mirmukhammad Mirsodikov.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-5 md:text-6xl lg:text-7xl text-3xl text-indigo-300 font-bold"
          >
            I build cool things for the web.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mt-6 text-slate-300 lg:w-1/2 "
          >
            I am a software engineer specializing in full stack web and mobile
            development. I am currently working at INTRUST Bank as a Software Engineer.
          </motion.p>
          <motion.a
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.3, delay: 0.4 }}
            href="Mirmukhammad_Mirsodikov_Resume.pdf"
            aria-label="Resume for Mirmukhammad Mirsodikov"
            target="_blank"
            className='w-fit h-fit mt-8'
          >
            <button className="rounded-md bg-transparent border border-indigo-500 p-4 text-indigo-400 hover:bg-indigo-500/20 transition duration-200 ease-in">
              View Resume
            </button>
          </motion.a>
        </div>

        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
