'use client';
import { useEffect, useRef, useState } from 'react';
import { MenuIcon } from './Icons';

export function NavigationDrawer() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const routes = ['About', 'Work', 'Projects', 'Contact'];

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const onClick = () => {
    setVisible(!visible);
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  };

  const onClickRoute = () => {
    setVisible(false);
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  };

  return (
    <div>
      <div className="flex md:invisible flex-row-reverse -mt-8">
        <MenuIcon onClick={onClick} />
      </div>
      {visible && (
        <div
          className="fixed inset-y-0 right-0 flex flex-col justify-evenly z-40 bg-slate-700 w-3/4"
          role="dialog"
          aria-modal="true"
          ref={ref}
        >
          {routes.map((route) => (
            <div className="mx-auto" key={route}>
              <a
                onClick={onClickRoute}
                href={`#${route.toLowerCase()}`}
                className="group transition duration-300 text-slate-300 hover:text-slate-100"
              >
                {route}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-violet-500" />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
