'use client';
import { useSpring, animated, useTransition } from '@react-spring/web';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { CloseIcon, MenuIcon } from '../Icons';

export function NavigationDrawer() {
  const [visible, setVisible] = useState(false);

  const transitions = useTransition(visible, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: visible ? 'translateX(0%)' : 'translateX(100%)' },
    leave: { transform: 'translateX(100%)' },
  });

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

  const Drawer = () => {
    return transitions((style, item) => {
      if (item)
      return (
        <div className={`bg-black/40 fixed inset-0 z-50`}>
          <animated.div
            className="fixed inset-y-0 right-0 flex flex-col z-40 bg-slate-800 w-3/4 rounded-l-md pt-32"
            role="dialog"
            aria-modal="true"
            ref={ref}
            style={style}
          >
            <div className="flex justify-end mr-4">
              <CloseIcon onClick={() => setVisible(false)} />
            </div>
            {routes.map((route) => (
              <div className="p-6" key={route}>
                <a
                  onClick={onClickRoute}
                  href={`#${route.toLowerCase()}`}
                  className="group transition duration-300 text-slate-300 hover:text-slate-100"
                >
                  {route}
                </a>
                <hr className="border border-slate-300 w-full" />
              </div>
            ))}
          </animated.div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="flex md:invisible flex-row-reverse px-4 justify-between rounded-b-lg shadow-lg bg-opacity-20 backdrop-blur-md bg-indigo-700">
        <div className="flex flex-col justify-center">
          <div className="">
            <MenuIcon onClick={onClick} />
          </div>
        </div>
        <div className="flex flex-col justify-between p-4">
          <Image
            src="/logo.svg"
            alt="logo"
            width={24}
            height={24}
            className="m-auto h-16 "
          />
        </div>
      </div>
      <Drawer />
    </div>
  );
}
