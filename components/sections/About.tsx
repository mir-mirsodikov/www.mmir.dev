import Image from 'next/image';
import portrait from '../../public/pic.jpeg';
import { Section } from '../Section';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-row justify-between flex-wrap">
        <div className="md:w-1/2 text-slate-300 mt-4 space-y-4">
          <p>
            My name is Mirmukhammad Mirsodikov and I am a software engineer. I
            love learning and building applications that solve real world
            problems. I am working as a Software Engineer at Koch Minerals &
            Trading.
          </p>
          <p>
            I am a passionate and dedicated software engineer who thrives on learning
            new technologies and finding innovative solutions to complex problems.
            With a strong enthusiasm for building tools that enhance people&apos;s lives,
            I constantly challenge myself to push the boundaries of what is possible.
            I am fueled by the opportunity to contribute to meaningful
            projects and make a positive impact through my work.
          </p>
          <p>
            My insatiable curiosity drives me to continuously research and explore new areas,
            always seeking to expand my knowledge and stay ahead of the rapidly evolving tech landscape.
            I take pride in suggesting fresh perspectives and approaches,
            constantly striving to improve processes and deliver the best results.
          </p>
          <p>
            In my free time, I enjoy working out, running, playing chess, and origami.
            Currently, my free time is taken up by research and development of my own projects,
            where I am building a CLI for JavaScript developers, to help them speed up their
            development process with meta frameworks like Next.js.
          </p>
        </div>
        <div className="items-start md:order-none order-first m-auto">
          <Image
            src={portrait}
            alt="Self portrait"
            className="mt-4 xl:mr-8 md:w-96 flex rounded-full w-48 shadow-2xl shadow-indigo-600/50"
          />
        </div>
      </div>
    </Section>
  );
}
