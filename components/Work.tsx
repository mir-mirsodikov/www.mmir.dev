import { Card } from './Card';
import { Section } from './Section';

export function WorkExperience() {
  return (
    <Section id="work" title="Work Experience">
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <Card title="StaffWise - Software Engineer">
          <p className="text-slate-400 text-sm">July 2021 - Present</p>
          <ul className="list-disc text-slate-300 ml-4 mt-4">
            <li>Alpha bravo charlie</li>
            <li>Alpha bravo charlie</li>
            <li>Alpha bravo charlie</li>
          </ul>
        </Card>
        <Card title="Textron Aviation - Software Engineer">
          <p className="text-slate-400 text-sm">June 2022 - August 2022</p>
          <ul className="list-disc text-slate-300 ml-4 mt-4">
            <li>Alpha bravo charlie</li>
            <li>Alpha bravo charlie</li>
            <li>Alpha bravo charlie</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
