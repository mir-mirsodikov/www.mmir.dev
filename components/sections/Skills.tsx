'use client';
import { useState } from 'react';
import { ChevronRight } from '../Icons';
import { Section } from '../Section';
import { SkillCard } from '../SkillCard';
import SkillsJSON from '../../assets/skills.json';

interface SkillGroup {
  group: string;
  skills: string[];
}

export function Skills() {
  const downAnimation = 'transition rotate-90 duration-150';
  const upAnimation = 'transition rotate-0 duration-150';

  const [more, setMore] = useState('hidden');
  const [animate, setAnimate] = useState('');

  const skills = SkillsJSON as SkillGroup[];
  const skillGroupingCutoff = 5;

  return (
    <Section title="Skills" id="skills">
      <div className="flex flex-row justify-between flex-wrap">
        <div className="text-slate-400 mt-4 md:w-full lg:w-1/3 space-y-4">
          <p>
            I have accumulated a variety of skills and technologies. At work, I
            am currently working with TypeScript and Angular for our
            frontend, and C# and .NET Core for the backend.
            I am also working with AWS for our cloud
            infrastructure.
          </p>
          <p>
            For my personal projects, I am currently working in a slew of
            different areas. My primary focus has been on building a 
            mobile app for weight training using React Native and Expo. I
            am also working on a real time chat application using Go and WebSockets.
          </p>
        </div>
        <div className="lg:m-auto">
          {skills.map(
            ({ group, skills }, index) =>
              index < skillGroupingCutoff && (
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
              className="font-semibold text-slate-300 mt-4 flex flex-row hover:text-indigo-500 hover:cursor-pointer group"
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
              <div className={animate}>
                <ChevronRight />
              </div>
            </div>
            <div className={more}>
              {skills.map(
                ({ group, skills }, index) =>
                  index >= skillGroupingCutoff && (
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
