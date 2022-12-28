interface CardProps {
  children: React.ReactNode;
  title: string;
}

export function Card({ children, title }: CardProps) {
  return (
    <div className="bg-slate-800 p-4 rounded-md">
      <h2 className="text-slate-300 text-xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}
