import type {NextPage} from "next";
import Project from "./components/Project";
import Section from "./components/Section";

const Projects: NextPage = () => {
  return (
    <Section title="Projects.">
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <Project title="killer app"
                 description='Killer game (group of players with one action to do with the other player to "kill" him/her)'
                 link="https://expo.dev/@hugo0/killer"
                 platform="mobile"/>
        <Project title="samples animation" description='Small project to test animations'
                 link="https://expo.dev/@hugo0/killer" platform='mobile'/>
        <Project title="basket stats" description='Website with french basket stats and test Remix'
                 link="https://basket.hugogarnier.com/"/>
        <Project title="marvel" description='Project from Le Reacteur showing some comics marvel'
                 link="https://marvel.hugogarnier.com/"/>
      </div>
    </Section>
  );
};

export default Projects;
