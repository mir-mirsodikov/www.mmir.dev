import { Section } from '../Section';
import { SkillCard } from '../SkillCard';

export function Skills() {
  const skills = [
    {
      group: 'Languages',
      skills: ['TypeScript', 'Go', 'JavaScript', 'Java', 'C++', 'HTML/CSS'],
    },
    {
      group: 'Frontend',
      skills: [
        'React',
        'React Native',
        'Vue',
        'Tailwind',
        'Next.js',
        'Nuxt.js',
      ],
    },
    {
      group: 'Backend',
      skills: ['Node.js', 'Docker', 'Azure', 'Terraform', 'SQL', 'MongoDB'],
    },
  ];

  return (
    <Section title='Skills' id='skills'>
      <div className='flex flex-row justify-between'>
        <div className='text-slate-400 mt-4'>
          <p>
            I have experience with a wide range of technologies.
          </p>
        </div>
        <div className='m-auto'>
          {skills.map(({ group, skills }) => (
              <div key={group}>
                <h4 className="font-semibold text-slate-300 mt-4">{group}</h4>
                <div className="flex flex-wrap">
                  {skills.map((skill) => (
                    <SkillCard key={skill} title={skill} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </Section>
  )
}