import portrait from '../public/pic.jpeg';
import Image from 'next/image';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-row justify-between flex-wrap">
        <div>
          <p className="text-slate-400 mt-4">
            My name is Mirmukhammad Mirsodikov and I am a software engineer.
          </p>
        </div>
        <div className="items-start">
          <Image
            src={portrait}
            alt="Self portrait"
            className="mt-4 mr-8 w-96"
          />
        </div>
      </div>
    </Section>
  );
}
