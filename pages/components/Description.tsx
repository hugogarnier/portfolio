import type { NextPage } from 'next';

const Description: NextPage = () => {
  return (
    <div className="text-justify max-w-sm text-sm">
      <p className="">
        I&apos;m <span className="uppercase">hugo garnier</span> a French{' '}
        <span className="text-gray-500">mobile & web developer</span> passionate about new
        technologies, specialized in Typescript, React Native, React JS
      </p>
    </div>
  );
};

export default Description;
