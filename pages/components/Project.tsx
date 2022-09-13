import type {NextPage} from "next";

import {ComputerDesktopIcon, DevicePhoneMobileIcon} from "@heroicons/react/24/outline";
import {TechnoType} from "../../constants";

type ProjectProps = {
  platform?: string;
  title: string;
  description?: string;
  link?: string;
  techno: TechnoType;
};

const Project: NextPage<ProjectProps> = ({platform = 'desktop', title, description, link, techno}) => {
  return (
    <>
      <a
        className="group block p-8 bg-gray-100 hover:shadow-xl rounded-xl w-64 flex-col border border-b-3 border-transparent hover:border-blue-700 dark:bg-darkCard dark:hover:border-orange-600"
        href={link && link || ""}
      >
        <div className="mb-2">
          {platform === 'mobile' && <DevicePhoneMobileIcon
                  className="h-8 w-8  group-hover:text-blue-700 dark:group-hover:text-orange-600"/> ||
              <ComputerDesktopIcon className="h-8 w-8  group-hover:text-blue-700 dark:group-hover:text-orange-600 "/>}
          <h3 className="mt-3 text-xl font-bold break-words">
            {title}
          </h3>
          <p className="mt-4 text-sm break-words">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 justify-start items-center text-xs">
          {techno && techno.map((item, index) => {
            return <p key={index} style={{color: item.color}}>#{item.name}</p>
          })}
        </div>
      </a>
    </>
  );
};

export default Project;
