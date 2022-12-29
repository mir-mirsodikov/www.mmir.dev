import { Card } from './Card';
import { Section } from './Section';

export function WorkExperience() {
  const staffWiseSkills = [
    'TypeScript',
    'React',
    'Node.js',
    'Terraform',
    'Microsoft SQL Server',
    'Microsoft Azure',
  ];

  const textronSkills = ['Java', 'Java Swing', 'MVVM', 'REST'];
  return (
    <Section id="work" title="Work Experience">
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <Card title="StaffWise - Software Engineer">
          <p className="text-slate-400 text-sm">July 2021 - Present</p>
          <ul className="list-disc text-slate-300 ml-4 mt-4 space-y-2 text-base mb-2">
            <li>
              Designed and built REST APIs to power a healthcare financial web
              application for budgeting and staffing.
            </li>
            <li>
              Constructed database relations and procedures in Microsoft SQL
              Server.
            </li>
            <li>
              Architected resources in Microsoft Azure using Terraform to
              automate resource deployments.
            </li>
            <li>
              Implemented UI using React and its ecosystem to deliver
              exceptional user experiences.
            </li>
          </ul>

          {staffWiseSkills.map((skill) => (
            <span
              key={skill}
              className="text-slate-200 text-sm mt-2 inline-block mr-2 bg-indigo-600 p-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </Card>
        <Card title="Textron Aviation - Software Engineer (Intern)">
          <p className="text-slate-400 text-sm">June 2022 - August 2022</p>
          <ul className="list-disc text-slate-300 ml-4 mt-4 space-y-2 text-base mb-2">
            <li>
              Developed applications using Java that automate processes for
              engineers in their design modelling application.
            </li>
            <li>
              Addressed prevalent problems of previous projects with clear and
              maintainable solutions by enforcing application architecture and
              design patterns
            </li>
            <li>
              Lead the team in migrating to Java 11 from Java 8 and adopting
              REST APIs over SOAP APIs
            </li>
          </ul>
          {textronSkills.map((skill) => (
            <span
              key={skill}
              className="text-slate-200 text-sm mt-2 inline-block mr-2 bg-indigo-600 p-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </Card>
      </div>
    </Section>
  );
}
