interface CardProps {
  children: React.ReactNode;
  title: string;
  launchIcon?: React.ReactNode;
  repoIcon?: React.ReactNode;
}

export function Card({ children, title, launchIcon, repoIcon }: CardProps) {
  return (
    <div className="bg-slate-800 p-4 rounded-md shadow-md hover:-translate-y-2 transition duration-200 ease-in-out">
      <div className="flex flex-row justify-between">
        <h2 className="text-slate-300 text-xl font-semibold">{title}</h2>
        <div className='flex flex-row gap-4'>
          {repoIcon}
          {launchIcon}
        </div>
      </div>
      {children}
    </div>
  );
}
