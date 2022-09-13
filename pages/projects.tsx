import type { NextPage } from "next";
import Project from "./components/Project";
import Section from "./components/Section";

const Projects: NextPage = () => {
  return (
    <Section title="Projects.">
      <div className="grid sm:grid-cols-3 grid-cols-none gap-8 justify-center items-center">
        <Project title="test" />
        <Project title="gdfgfghgcuybwchbwvhbuyobhvbhxvbwuyoxgvbyubvwhxvobu" />
        <Project title="test" />
      </div>
    </Section>
  );
};

export default Projects;
