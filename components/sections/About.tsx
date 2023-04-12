import Image from 'next/image';
import portrait from '../../public/pic.jpeg';
import { Section } from '../Section';

export function About() {
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
            Today, I am working as a Software Engineer at Koch Minerals & Trading,
            while finishing my final semester of college at Wichita State
            University, where I am studying Computer Science.
          </p>
          <p>
            In my free time, I enjoy working out, running, playing chess, and origami. 
            Currently, my free time is taken up by research and development of my own projects,
            where I am learning about building real time, concurrent, and distributed systems.
          </p>
        </div>
        <div className="items-start md:order-none order-first m-auto">
          <Image
            src={portrait}
            alt="Self portrait"
            className="mt-4 xl:mr-8 md:w-96 flex rounded-full w-48"
          />
        </div>
      </div>
    </Section>
  );
}
