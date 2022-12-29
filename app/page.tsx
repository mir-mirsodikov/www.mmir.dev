import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { WorkExperience } from '../components/Work';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <main className='pb-24'>
      <div className="md:p-8 p-6 m-auto md:w-3/4 xl:mt-48 xl:-mb-48 min-h-screen">
        <h1 className="text-l text-slate-300 mb-7">Hello, my name is</h1>
        <p className="mb-2 md:text-7xl text-4xl text-indigo-500 font-bold">
          Mirmukhammad Mirsodikov.
        </p>
        <p className="mt-5 md:text-6xl lg:text-7xl text-3xl text-indigo-300 font-bold">
          I build things, I guess.
        </p>
        <p className="mt-6 text-slate-400 lg:w-1/2 ">
          I am a software engineer specializing in full stack web and mobile
          development. I am currently working on a suite of hospital budgeting
          tools at StaffWise.
        </p>

        <a href="Mirmukhammad_Mirsodikov_Resume.pdf" target="_blank">
          <button className="rounded-md bg-transparent border border-indigo-500 p-4 mt-8 text-indigo-500 hover:bg-indigo-500/20 transition duration-200 ease-in">
            Resume
          </button>
        </a>
      </div>

      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  );
}
