import type {NextPage} from "next";
import Head from "next/head";

import Footer from "./Footer";
import Navbar from "./Navbar";


type LayoutProps = { children: React.ReactNode };

const Layout: NextPage<LayoutProps> = ({children}) => {
  return (
    <>
      <Navbar/>
      <Head>
        <title>Hugo Garnier - Web & Mobile Developer</title>
        <meta name="description" content="Portfolio Hugo Garnier"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="max-w-4xl m-auto p-4 min-h-[83vh]">{children}</main>
      <Footer/>
    </>
  );
};

export default Layout
