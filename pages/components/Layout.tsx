import type { NextPage } from "next";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Head from "next/head";

type LayoutProps = { children: React.ReactNode };

export const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Hugo Garnier - Web & Mobile Developer</title>
        <meta name="description" content="Portfolio Hugo Garnier" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-3xl m-auto p-4 min-h-[90vh]">{children}</main>
      <Footer />
    </>
  );
};
