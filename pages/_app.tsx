import {useEffect, useState} from "react";
import type {AppProps} from "next/app";
import {ThemeProvider} from "next-themes";

import Layout from "./components/Layout";
import "../styles/globals.css";

function MyApp({Component, pageProps}: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
