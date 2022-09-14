import type {NextPage} from "next";

import {ComputerDesktopIcon, DevicePhoneMobileIcon} from "@heroicons/react/24/outline";

type ProjectProps = {
  platform?: string;
  title: string;
  description?: string;
  link?: string;
};

const Project: NextPage<ProjectProps> = ({platform = '', title, description, link}) => {
  return (
    <>
      <a
        className="group block p-4 w-full rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-all"
        href={link && link || ""}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="flex justify-between items-center gap-2 mb-2 group-hover:transition-all dark:group-hover:transition-all">
          <h3 className="text-xl font-bold break-words">
            {title}
          </h3>
          {platform === 'mobile' && <DevicePhoneMobileIcon
                  className="h-5 w-5 group-hover:text-blue-700 dark:group-hover:text-orange-600"/> ||
              <ComputerDesktopIcon className="h-5 w-5  group-hover:text-blue-700 dark:group-hover:text-orange-600 "/>}
        </div>
        <p className="my-2 text-sm break-words">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 justify-start items-center text-xs">
          {platform === 'mobile' && <p>See on Expo</p>
            || platform === 'desktop' && <p>See on Github</p>
            || <p>Access website</p>}
        </div>
      </a>
    </>
  );
};

export default Project;
