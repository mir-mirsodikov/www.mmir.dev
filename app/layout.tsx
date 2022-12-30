import { AnalyticsWrapper } from '../components/Analytics';
import { NavBar } from '../components/NavBar';
import { NavigationDrawer } from '../components/NavigationDrawer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-900 font-mono" id='home'>
        <div className="md:visible invisible md:sticky md:top-0 md:z-50">
          <NavBar />
        </div>

        <div className="md:hidden">
          <NavigationDrawer />
        </div>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
