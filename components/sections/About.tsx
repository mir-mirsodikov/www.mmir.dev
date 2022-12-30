import Image from 'next/image';
import portrait from '../../public/pic.jpeg';
import { Section } from '../Section';
import { SkillCard } from '../SkillCard';

export function About() {
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
    <Section id="about" title="About Me">
      <div className="flex flex-row justify-between flex-wrap">
        <div className="md:w-1/2 text-slate-400 mt-4 space-y-4">
          <p>
            My name is Mirmukhammad Mirsodikov and I am a software engineer. I
            love learning and building applications that solve real world
            problems. I started working in web development in 2019 as a senior
            in high school, and have loved every bit of the journey. Since then,
            I have also started working on mobile applications.
          </p>
          <p>
            Today, I am working as a full stack developer at StaffWise, where we
            are building a suite of hospital budgeting tools. I am doing this
            while finishing my final semester of college at Wichita State
            University, where I am studying Computer Science.
          </p>

          <h3 className="font-semibold text-lg text-slate-300 mt-8">
            My Skills
          </h3>
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
        <div className="items-start md:order-none order-first m-auto">
          <Image
            src={portrait}
            alt="Self portrait"
            className="mt-4 xl:mr-8 md:w-96 rounded-full w-48"
          />
        </div>
      </div>
    </Section>
  );
}
