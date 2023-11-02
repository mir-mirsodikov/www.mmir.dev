'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { AnalyticsWrapper } from '../components/Analytics';
import { NavBar } from '../components/navigation/NavBar';
import { NavigationDrawer } from '../components/navigation/NavigationDrawer';
import './globals.css';
import Head from './head';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [justLoaded, setJustLoaded] = useState(true);

  return (
    <html
      lang="en"
      className={`${justLoaded ? `overflow-hidden` : 'overflow-auto'}`}
    >
      <Head />
      <body className={`bg-slate-900 font-mono`} id="home">
        <div className={`md:flex hidden md:sticky md:top-0 md:z-50`}>
          <NavBar />
        </div>

        <div className="md:hidden">
          <NavigationDrawer />
        </div>

        <AnimatePresence>
          {justLoaded && (
            <motion.div
              className="min-h-screen min-w-full inset-0 bg-slate-900 z-50 fixed flex flex-col justify-center"
              initial={{
                opacity: 1,
              }}
              transition={{
                delay: 3,
                duration: 1,
              }}
              animate={{
                opacity: 0,
              }}
              onAnimationComplete={() => {
                setJustLoaded(false);
              }}
            >
              <motion.svg
                viewBox="0 0 160 160"
                width={160}
                height={160}
                className="mx-auto"
              >
                <motion.path
                  d="M17 167V43L79 110.167L141 43V167"
                  strokeWidth="33"
                  stroke="#8B5CF6"
                  className={'m-auto bg-slate-900'}
                  initial={{
                    pathLength: 0,
                  }}
                  transition={{
                    delay: 0,
                    duration: 3,
                  }}
                  animate={{ pathLength: [0, 1, 0] }}
                  exit={{
                    opacity: 0,
                  }}
                  fill={'none'}
                />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>

        {children}

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
