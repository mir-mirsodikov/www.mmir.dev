import React from 'react';
import projectsJson from '../assets/projects.json';
import { Card } from './Card';
import { LaunchIcon, RepoLinkIcon } from './Icons';
import { Section } from './Section';
import { SkillCard } from './SkillCard';

interface Project {
  name: string;
  description: string;
  skills: string[];
  link?: string;
  github?: string;
}

export function Projects() {
  const skills = {
    gymarc: ['React Native', 'TypeScript', 'SQLite', 'GraphQL'],
  };

  const projects = projectsJson as Project[];
  return (
    <Section id="projects" title="Projects">
      <div className="mt-8 grid md:grid-cols-2 sm:gird-cols-1 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
            key={project.name}
            title={project.name}
            repoIcon={
              project.github ? (
                <RepoLinkIcon link={project.github} />
              ) : undefined
            }
            launchIcon={
              project.link ? <LaunchIcon link={project.link} /> : undefined
            }
          >
            <div className='flex flex-col justify-evenly'>

              <div>
                <p className="text-slate-400 my-4">{project.description}</p>
              </div>
              <div>
                {project.skills.map((skill) => (
                  <SkillCard key={skill} title={skill} />
                ))}
              </div>
            </div>
          </Card>
        ))}
        {/* <Card title="GymArc" icon={<LaunchIcon />}>
          <p className='text-slate-400 text-base my-4'>
            Cross platform mobile application designed to allow users to track
            their gym workouts, view their previous workouts, create templates and plans,
            and view their progress.
          </p>
          {skills['gymarc'].map((skill) => (
            <SkillCard key={skill} title={skill} />
          ))}
        </Card>

        <Card title="Lie Detection Survey">
          <p className='text-slate-400 text-base my-4'>

          </p>
        </Card>
        <Card title="Hermes">
          <p className="text-slate-400 text-sm">July 2021 - Present</p>
        </Card> */}
      </div>
    </Section>
  );
}
