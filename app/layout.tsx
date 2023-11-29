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
  return (
    <html
      lang="en"
    >
      <Head />
      <body className={`bg-slate-900 font-mono`} id="home">
        <div className={`md:flex hidden md:sticky md:top-0 md:z-50`}>
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
