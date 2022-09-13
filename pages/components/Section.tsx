import type {NextPage} from "next";

type SectionProps = {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
};

const Section: NextPage<SectionProps> = ({title, subTitle, children}) => {
  return (
    <div>
      <section className="mt-10 space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl">{title}</h1>
          <p className="text-blue-700 dark:text-orange-600">{subTitle}</p>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Section;
