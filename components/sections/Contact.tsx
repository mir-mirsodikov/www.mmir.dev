import { GitHubIcon, LinkedInIcon } from '../Icons';
import { Section } from '../Section';

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-slate-300 lg:w-3/4 lg:mx-auto mt-8">
        Although I am not currently looking for new opportunities, I am always
        interested in networking and meeting new people. If you have any
        questions or would like to get in touch, feel free to reach out to me at{' '}
        <a
          href="mailto:mirsodikov.mir@gmail.com"
          className="text-indigo-400 hover:underline underline-offset-2 decoration-2"
        >
          mirsodikov.mir@gmail.com
        </a>
        . You can also
        find me on the platforms below.
      </p>
      <div className="flex flex-row justify-center space-x-2 mt-4">
        <GitHubIcon link="https://github.com/mir-mirsodikov" />
        <LinkedInIcon link="https://www.linkedin.com/in/mirmukhammad-mirsodikov-3a104b1b1/" />
      </div>
    </Section>
  );
}
