import type {NextPage} from "next";
import Section from "./components/Section";

const Home: NextPage = () => {
  return (
    <Section title="Hugo Garnier." subTitle="Web & Mobile Developer">
      <p className="pr-28 text-gray-600 dark:text-gray-400">
        Developer - past Digital Project Manager - with 1+ years professional experience building
        intuitive user experiences through proactive planning, efficient
        development, and a strong understanding of the latest web technologies.
      </p>
    </Section>
  );
};

export default Home;
