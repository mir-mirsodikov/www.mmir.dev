import WorkExperienceJSON from '../../assets/experience.json';
import { Card } from '../Card';
import { Section } from '../Section';
import { SkillCard } from '../SkillCard';

interface Experience {
  company: string;
  title: string;
  employmentDates: string;
  description: string[];
  skills: string[];
}

export function WorkExperience() {
  const workExperience = WorkExperienceJSON as Experience[];

  return (
    <Section id="work" title="Work Experience">
      <div className="mt-8 grid lg:grid-cols-2 gap-4">
        {workExperience.map((experience) => (
          <Card
            key={experience.company}
            title={`${experience.company} - ${experience.title}`}
          >
            <p className="text-slate-300 text-sm">
              {experience.employmentDates}
            </p>
            <ul className="list-disc text-slate-300 ml-4 mt-4 space-y-2 text-base mb-2">
              {experience.description.map((description, index) => (
                <li className="text-slate-300 text-base mt-4" key={index}>
                  {description}
                </li>
              ))}
            </ul>

            {experience.skills.map((skill) => (
              <SkillCard key={skill} title={skill} />
            ))}
          </Card>
        ))}
      </div>
    </Section>
  );
}
