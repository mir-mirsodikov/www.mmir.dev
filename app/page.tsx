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

      <div className="p-8 m-auto w-3/4" id='about'>
        <h1 className="text-left text-slate-300 text-3xl font-bold">About</h1>
        <hr className="border-slate-600 mt-2" />
        <p className='text-slate-400 w-1/2 mt-4'>
          My name is Mirmukhammad Mirsodikov and I am a software engineer.
        </p>
      </div>

      <div className="p-8 m-auto w-3/4" id='work'>
        <h1 className="text-left text-slate-300 text-3xl mt-16">Work Experience</h1>
        <hr className="border-slate-600 mt-2" />
      </div>

      <div className="p-8 m-auto w-3/4" id='projects'>
        <h1 className="text-left text-slate-300 text-3xl mt-16">Projects</h1>
        <hr className="border-slate-600 mt-2" />
      </div>
    </main>
  );
}
