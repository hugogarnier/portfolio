import type { NextPage } from "next";
import { Desktop } from "../../assets/svg/desktop";
import { Mobile } from "../../assets/svg/Mobile";

type ProjectProps = {
  title: string;
  description?: string;
};

const Project: NextPage<ProjectProps> = ({ title, description }) => {
  return (
    <>
      <a
        className="block p-8 bg-gray-300 border border-gray-400 shadow-xl rounded-xl maw-w-sm"
        href=""
      >
        <Mobile />
        {/* <Desktop /> */}

        <h3 className="mt-3 text-xl font-bold ">
          {title}sdqsdddqdqsdqsddsfffiugsuycgbhys
        </h3>
        <p className="mt-4 text-sm ">
          {description} dqkjdhgqsyd hjdfsgqsdf yfgdqsdfq hjgvfdsdqfs kdgjhvqds
          kghfvsqdf ghksdfsqdf{" "}
        </p>
      </a>
    </>
  );
};

export default Project;
