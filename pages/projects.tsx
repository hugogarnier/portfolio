import type {NextPage} from "next";
import Project from "./components/Project";
import Section from "./components/Section";

const Projects: NextPage = () => {
  return (
    <Section title="Projects.">
      {/*<div className="flex flex-wrap gap-2 justify-center items-center">*/}
      <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        <Project title="killer app"
                 description='killer game (group of players with one action to do with the other player to "kill" him/her)'
                 link="https://expo.dev/@hugo0/killer"
                 platform="mobile"/>
        <Project title="samples animation" description='small project to test animations'
                 link="https://expo.dev/@hugo0/samples" platform='mobile'/>
        <Project title="airbnb-clone" description='clone airbnb with expo'
                 link="https://expo.dev/@hugo0/Airbnb-clone" platform='mobile'/>
        <Project title="basket stats" description='website with french basket stats and test Remix'
                 link="https://basket.hugogarnier.com/"/>
        {/*<Project title="marvel" description='project from Le Reacteur showing some comics marvel'*/}
        {/*         link="https://marvel.hugogarnier.com/"/>*/}
        <Project title="talkie"
                 description='social app based on talk. A talkie is a combination of a recorder and a gif.'
                 link="https://github.com/hugogarnier/talkie" platform='desktop'/>
      </div>
    </Section>
  );
};

export default Projects;
