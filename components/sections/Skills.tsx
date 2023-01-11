'use client';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from '../Icons';
import { Section } from '../Section';
import { SkillCard } from '../SkillCard';

export function Skills() {
  const downAnimation = 'transition rotate-90 duration-150';
  const upAnimation = 'transition rotate-0 duration-150';

  const [more, setMore] = useState('hidden');
  const [animate, setAnimate] = useState('');

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
        'Next.js',
        'Nuxt.js',
      ],
    },
    {
      group: 'Backend',
      skills: ['Node.js', 'Express', 'Gin', 'REST APIs', 'JWT'],
    },
    {
      group: 'Database',
      skills: ['PostgreSQL', 'Microsoft SQL Server', 'MongoDB'],
    },
    {
      group: 'Infrastructure',
      skills: ['Docker', 'Terraform', 'Azure'],
    },
    {
      group: 'Foreign Languages',
      skills: ['Russian', 'Uzbek'],
    },
    {
      group: 'Other',
      skills: ['Git', 'Linux', 'Agile', 'CI/CD'],
    },
  ];

  return (
    <Section title="Skills" id="skills">
      <div className="flex flex-row justify-between flex-wrap">
        <div className="text-slate-400 mt-4 md:w-full lg:w-1/3 space-y-4">
          <p>
            I have accumulated a variety of skills and technologies. At work, I
            am currently working with TypeScript, React, and Node.js for our
            frontend and backend. For our database, I am working with Microsoft
            SQL Server. I am also working with Azure for our cloud
            infrastructure, automated by Terraform.
          </p>
          <p>
            For my personal projects, I am currently working on building a web
            based real-time chat application. For this project, I am using Vue,
            Go, and PostgreSQL. Because the project requires real time
            communication, I have started learning Elixir and CassandraDB.
          </p>
        </div>
        <div className="lg:m-auto">
          {skills.map(
            ({ group, skills }, index) =>
              index < 4 && (
                <div key={group}>
                  <p className="font-semibold text-slate-300 mt-4">{group}</p>
                  <div className="flex flex-row flex-wrap">
                    {skills.map((skill) => (
                      <SkillCard key={skill} title={skill} />
                    ))}
                  </div>
                </div>
              ),
          )}
          <div className="">
            <div
              className="font-semibold text-slate-300 mt-4 flex flex-row hover:text-indigo-500 group"
              onClick={() => {
                if (more === 'visible') {
                  setMore('hidden');
                  setAnimate(upAnimation);
                  return;
                }
                setMore('visible');
                setAnimate(downAnimation);
              }}
            >
              More
              {/* {more === 'hidden' ? 
                <ChevronRight />: <ChevronDown />} */}
              <div className={animate}>
                <ChevronRight />
              </div>
            </div>
            <div className={more}>
              {skills.map(
                ({ group, skills }, index) =>
                  index >= 4 && (
                    <div key={group}>
                      <h4 className="font-semibold text-slate-300 mt-4">
                        {group}
                      </h4>
                      <div className="flex flex-wrap">
                        {skills.map((skill) => (
                          <SkillCard key={skill} title={skill} />
                        ))}
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
