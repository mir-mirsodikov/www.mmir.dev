'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { AnalyticsWrapper } from '../components/Analytics';
import { AnimatedIntro } from '../components/AnimatedIntro';
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

        {justLoaded && (
          <AnimatedIntro onAnimationComplete={() => setJustLoaded(false)} />
        )}

        {children}

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
