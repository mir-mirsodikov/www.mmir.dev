import { GitHubIcon, LinkedInIcon } from '../Icons';
import { Section } from '../Section';

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-slate-400 lg:w-1/2 lg:mx-auto mt-8 lg:text-center">
        I am currently looking for a full time software engineering position. If
        you have any questions or would like to get in touch, feel free to reach
        out to me at {' '}
        <a href="mailto:mirsodikov.mir@gmail.com" className='text-indigo-400 hover:underline underline-offset-2 decoration-2'>mirsodikov.mir@gmail.com</a>.
        I always enjoy meeting new people and learning about new opportunities. You can also find me on the platforms below.
      </p>
      <div className='flex flex-row justify-center space-x-2 mt-4'>
        <GitHubIcon link='https://github.com/mir-mirsodikov'/>
        <LinkedInIcon link='https://www.linkedin.com/in/mirmukhammad-mirsodikov-3a104b1b1/'/>
      </div>
    </Section>
  );
}
