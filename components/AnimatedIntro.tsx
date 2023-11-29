import { motion } from 'framer-motion';

interface AnimatedIntroProps {
  onAnimationComplete: () => void;
}

export function AnimatedIntro({
  onAnimationComplete,
}: AnimatedIntroProps) {
  return (
    <motion.div
      className="min-h-screen min-w-full inset-0 bg-slate-900 z-50 fixed flex flex-col justify-center"
      initial={{
        opacity: 1,
      }}
      transition={{
        delay: 3,
        duration: 1,
      }}
      animate={{
        opacity: 0,
      }}
      onAnimationComplete={onAnimationComplete}
    >
      <motion.svg
        viewBox="0 0 160 160"
        width={160}
        height={160}
        className="mx-auto"
      >
        <motion.path
          d="M17 167V43L79 110.167L141 43V167"
          strokeWidth="33"
          stroke="#8B5CF6"
          className={'m-auto bg-slate-900'}
          initial={{
            pathLength: 0,
          }}
          transition={{
            delay: 0,
            duration: 3,
          }}
          animate={{ pathLength: [0, 1, 0] }}
          exit={{
            opacity: 0,
          }}
          fill={'none'}
        />
      </motion.svg>
    </motion.div>
  );
}
