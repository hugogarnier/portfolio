import type {NextPage} from "next";
import {motion, transform} from "framer-motion"

type SectionProps = {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
};

const Section: NextPage<SectionProps> = ({title, subTitle, children}) => {
  const transformer = transform([0, 100], [0, 360])
  return (
    <motion.div initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: .5}}>
      <section className="mt-10 space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl">{title}</h1>
          <p className="text-teal-600 dark:text-teal-500">{subTitle}</p>
        </div>
        {children}
      </section>
    </motion.div>
  );
};

export default Section;
