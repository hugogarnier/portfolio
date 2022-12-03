import {useEffect, useState} from "react";
import type {AppProps} from "next/app";
import { Analytics } from '@vercel/analytics/react';
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
    <ThemeProvider attribute="class" enableSystem>
      <Layout>
        <Component {...pageProps} />
        <Analytics/>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
