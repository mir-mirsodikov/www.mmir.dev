export function NavBar() {

  const routes = [
    'About',
    'Work',
    'Projects',
    'Contact',
  ]

  return (
    <div className="flex flex-row-reverse h-16 rounded-br-lg shadow-lg bg-opacity-20 backdrop-blur-md rounded-bl-lg bg-indigo-700 pr-16">
      {routes.reverse().map(route => (
         <div className="mx-8 my-auto" key={route}>
          <a href={`#${route.toLowerCase()}`} className='group transition duration-300 text-slate-300 hover:text-slate-100'>
              {route}
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-violet-500'>
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
