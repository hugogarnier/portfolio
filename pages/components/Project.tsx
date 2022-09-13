import type { NextPage } from "next";

import { DevicePhoneMobileIcon} from "@heroicons/react/24/outline";

type ProjectProps = {
  title: string;
  description?: string;
};

const Project: NextPage<ProjectProps> = ({ title, description }) => {
  return (
    <>
      <a
        className="group block p-8 bg-gray-300 border border-gray-400 shadow-xl rounded-xl max-w-xs"
        href=""
      >
        <DevicePhoneMobileIcon className="h-8 w-8  group-hover:text-blue-500"/>

        <h3 className="mt-3 text-xl font-bold break-words hover:text-black">
          {title}sdqsdddqdqsdqsddsfffiugsuycgbhys
        </h3>
        <p className="mt-4 text-sm break-words">
          {description} dqkjdhgqsyd hjdfsgqsdf yfgdqsdfq hjgvfdsdqfs kdgjhvqds
          kghfvsqdf ghksdfsqdf{" "}
        </p>
      </a>
    </>
  );
};

export default Project;
