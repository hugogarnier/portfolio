import type { NextPage } from 'next';
import Link from 'next/link';
import { projects } from '../constants/projects';

const Projects: NextPage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-center mt-20 text-xs">
      <span className="underline">selected work</span>
      <ul className="flex flex-col gap-2">
        {projects.map((project) => {
          return (
            <Link
              key={project.id}
              href={project.uri}
              target="_blank"
              className="hover:text-neutral-400 dark:hover:text-gray-500 transition-colors duration-500"
            >
              {project.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
