import projectsJson from '../../assets/projects.json';
import { Card } from '../Card';
import { GitHubIcon, LaunchIcon } from '../Icons';
import { Section } from '../Section';
import { SkillCard } from '../SkillCard';

interface Project {
  name: string;
  description: string;
  skills: string[];
  link?: string;
  github?: string;
}

export function Projects() {
  const projects = projectsJson as Project[];

  return (
    <Section id="projects" title="Projects">
      <div className="mt-8 grid lg:grid-cols-2 sm:gird-cols-1 xl:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
            key={project.name}
            title={project.name}
            repoIcon={
              project.github ? <GitHubIcon link={project.github} /> : undefined
            }
            launchIcon={
              project.link ? <LaunchIcon link={project.link} /> : undefined
            }
          >
            <div className="flex flex-col justify-between content-between">
              <div className="">
                <p className="text-slate-300 my-4">{project.description}</p>
              </div>

              <div className='block'>
                {project.skills.map((skill) => (
                  <SkillCard key={skill} title={skill} />
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
