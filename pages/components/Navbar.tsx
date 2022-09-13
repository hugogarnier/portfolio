import type { NextPage } from "next";
import Link from "next/link";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const Navbar: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="flex items-center justify-between max-w-3xl p-4 mx-auto text-sm font-medium text-gray-600 dark:text-gray-100 cursor-pointer">
      <ul className="flex items-center space-x-3">
        <li className="">
          <Link href="/">
            <a
              className="rounded-lg hover:text-blue-700 dark:hover:text-orange-600"
              href=""
            >
              home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a
              className="rounded-lg hover:text-blue-700 dark:hover:text-orange-600"
              href=""
            >
              projects
            </a>
          </Link>
        </li>
      </ul>
      {(theme === "light" && (
        <MoonIcon className="w-6 h-6 hover:text-blue-700" onClick={switchTheme}/>
      )) || (
        <SunIcon className="w-6 h-6 hover:text-orange-600" onClick={switchTheme}/>
      )}
    </nav>
  );
};
