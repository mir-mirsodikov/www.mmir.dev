'use client';
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  title: string;
  fullScreen?: boolean;
}

export function Section({ id, children, title, fullScreen = false }: SectionProps) {
  return (
    <motion.div 
    initial={{ y: 200, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className={`lg:pd-8 m-auto md:w-full lg:w-full xl:w-3/4 lg:p-8 w-full xl:p-4 p-4 ${fullScreen ? 'min-h-screen' : ''}`} id={id}>
      <h1 className="text-left text-slate-200 text-3xl mt-16 font-bold">
        {title}
      </h1>
      <hr className="border-slate-600 mt-2" />
      {children}
    </motion.div>
  );
}
