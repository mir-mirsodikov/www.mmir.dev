interface SkillCardProps {
  title: string;
}

export function SkillCard({ title }: SkillCardProps) {
  return (
    <span
      className="text-slate-200 text-sm mt-2 inline-block mr-2 last:mr-0 bg-indigo-600 p-1.5 rounded"
    >
      {title}
    </span>
  );
}
