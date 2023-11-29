'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
export function NavBar() {
  const routes = ['About', 'Skills', 'Work', 'Projects', 'Contact'];

  useEffect(() => {
    console.log('Hello, world!');
  });

  return (
    <div className="flex flex-row w-full justify-between rounded-br-lg shadow-lg bg-opacity-20 backdrop-blur-md rounded-bl-lg bg-indigo-700">
      <motion.a
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 4 }}
        viewport={{ once: true }}
        href="#home"
      >
        <Image
          src="/logo.svg"
          alt="logo"
          width={24}
          height={24}
          className="my-auto h-16 ml-16"
        />
      </motion.a>
      <div className="flex-1 flex flex-row-reverse h-16 pr-16">
        {routes.reverse().map((route, index) => (
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: (routes.length - index) * 0.1 + 4,
            }}
            viewport={{ once: true }}
            className="mx-8 my-auto"
            key={route}
          >
            <a
              href={`#${route.toLowerCase()}`}
              className="group transition duration-300 text-slate-300 hover:text-slate-100"
            >
              {route}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-violet-500"></span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
