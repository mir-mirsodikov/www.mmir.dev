import Image from 'next/image';
import portrait from '../public/pic.jpeg';

export default function Home() {
  return (
    <main>
      <div className="p-8 m-auto w-3/4 mt-48 -mb-48 min-h-screen">
        <h1 className="text-l text-slate-300 mb-7">Hello, my name is</h1>
        <p className="mb-2 text-7xl text-indigo-500 font-bold">
          Mirmukhammad Mirsodikov.
        </p>
        <p className="mt-5 text-7xl text-indigo-300 font-bold">
          I build websites, I guess.
        </p>
        <p className="mt-6 text-slate-400 w-1/2">
          I am a software engineer specializing in full stack web and mobile
          development. I am currently working on a suite of hospital budgeting
          tools at StaffWise.
        </p>
      </div>

      <div className="p-8 m-auto w-3/4" id="about">
        <h1 className="text-left text-slate-300 text-3xl font-bold mt-16">
          About
        </h1>
        <hr className="border-slate-600 mt-2" />
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-slate-400 mt-4">
              My name is Mirmukhammad Mirsodikov and I am a software engineer.
            </p>
          </div>
          <div className="items-start">
            <Image
              src={portrait}
              alt="Self portrait"
              className="mt-4 mr-8 w-96"
            />
          </div>
        </div>
      </div>

      <div className="md:p-8 m-auto md:w-3/4 w-full p-4" id="work">
        <h1 className="text-left text-slate-300 text-3xl mt-16 font-bold">
          Work Experience
        </h1>
        <hr className="border-slate-600 mt-2" />
        <div className='mt-8 grid md:grid-cols-2 gap-4'>
          <div className='bg-slate-800 p-4 rounded-md'>
            <h2 className="text-slate-300 text-xl font-semibold">StaffWise - Software Engineer</h2>
            <p className='text-slate-400 text-sm'>July 2021 - Present</p>
            <ul className='list-disc text-slate-300 ml-4 mt-4'>
              <li>Alpha bravo charlie</li>
              <li>Alpha bravo charlie</li>
              <li>Alpha bravo charlie</li>
            </ul>
          </div>
          <div className='bg-slate-800 p-4 rounded-md'>
            <h2 className="text-slate-300 text-xl font-semibold">Textron Aviation - Software Engineer (Intern)</h2>
            <p className='text-slate-400 text-sm'>June 2022 - August 2022</p>
            <ul className='list-disc text-slate-300 ml-4 mt-4'>
              <li>Alpha bravo charlie</li>
              <li>Alpha bravo charlie</li>
              <li>Alpha bravo charlie</li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>

      <div className="p-8 m-auto w-3/4" id="projects">
        <h1 className="text-left text-slate-300 text-3xl mt-16">Projects</h1>
        <hr className="border-slate-600 mt-2" />
      </div>
    </main>
  );
}
