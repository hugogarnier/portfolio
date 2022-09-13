import type {NextPage} from "next";
import Project from "./components/Project";
import Section from "./components/Section";

const Projects: NextPage = () => {
  return (
    <Section title="Projects.">
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <Project title="killer app" description='test' link="https://expo.dev/@hugo0/killer"
                 platform="mobile"/>
        <Project title="killer app" description='test' link="https://expo.dev/@hugo0/killer"/>
        <Project title="killer app" description='test' link="https://expo.dev/@hugo0/killer"/>
        <Project title="killer app" description='test' link="https://expo.dev/@hugo0/killer"/>
        <Project title="killer app" description='test' link="https://expo.dev/@hugo0/killer"/>
        <Project title="killer app" description='test' link="https://expo.dev/@hugo0/killer"/>
      </div>
    </Section>
  );
};

export default Projects;
