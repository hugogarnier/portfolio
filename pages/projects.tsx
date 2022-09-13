import type {NextPage} from "next";
import Project from "./components/Project";
import Section from "./components/Section";
import {TECHNO} from "../constants";

const Projects: NextPage = () => {
  return (
    <Section title="Projects.">
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <Project title="test" description='test' techno={TECHNO}/>
        <Project title="gdfgfghgcvvobu" description='test'/>
        <Project title="test" description='test'/>
        <Project title="test" description='test'/>
        <Project title="test" description='test' platform='mobile'/>
      </div>
    </Section>
  );
};

export default Projects;
