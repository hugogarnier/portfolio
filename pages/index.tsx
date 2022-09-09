import type { NextPage } from "next";
import Section from "./components/Section";

const Home: NextPage = () => {
  return (
    <Section title="Hugo Garnier." subTitle="Web & Mobile Developer">
      <p className="text-gray-600 dark:text-gray-500">
        Web & mobile developer with 2+ years professional experience building
        intuitive user experiences through proactive planning, efficient
        development, and a strong understanding of the latest web technologies.
      </p>
    </Section>
  );
};

export default Home;
