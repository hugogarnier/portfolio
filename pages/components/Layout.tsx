import { ReactNode } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Logo } from '../../assets/svg/Logo';
import { useTheme } from 'next-themes';
import { colors } from '../constants/colors';

type LayoutProps = { children: ReactNode };

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const { resolvedTheme, systemTheme } = useTheme();
  const isThemeDark = systemTheme === 'dark';

  return (
    <>
      <Head>
        <title>HG - Developer</title>
        <meta name="description" content="Portfolio Hugo Garnier" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-5 border border-darkText dark:border-lightText">
        <div className="h-[calc(100vh-60px)]">
          <div className="m-5 flex flex-col justify-between items-center text-center">
            <Logo
              color={isThemeDark ? colors.dark : colors.light}
              bgColor={isThemeDark ? colors.light : colors.dark}
              height={50}
              width={50}
            />
            <main className="flex flex-col justify-between items-center text-center h-[calc(100vh-190px)] overflow-hidden m-0">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
