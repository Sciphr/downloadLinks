"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Switch } from "@headlessui/react";
import getTheme from "./getTheme";

export default function ModeToggle() {
  const [enabled, setEnabled] = useState(false);
  const [userTheme, setUserTheme] = useState(null);
  const theme = getTheme(userTheme);
  const [currentTheme, setCurrentTheme] = useState(theme);
  const { contextTheme, contextToggleTheme } = useTheme();

  useEffect(() => {
    setCurrentTheme(theme);
    if (theme === "light" || theme === null) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [theme]);

  const handleToggleChange = (newEnabled) => {
    setEnabled(newEnabled);
    const newTheme =
      currentTheme === "light" || currentTheme === null ? "dark" : "light";
    setCurrentTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("userTheme", newTheme);
    }
    setUserTheme(newTheme);
    contextToggleTheme();
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleToggleChange}
      className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-600 transition-colors duration-200 ease-in-out hover:ring-2 hover:ring-parklane-green hover:ring-offset-2 hover:outline-hidden data-checked:bg-parklane-green"
    >
      <span className="sr-only">Use setting</span>
      <span className="pointer-events-none relative inline-block size-5 transform rounded-full bg-white ring-0 shadow-sm transition duration-200 ease-in-out group-data-checked:translate-x-5">
        <span
          aria-hidden="true"
          className="absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in group-data-checked:opacity-0 group-data-checked:duration-100 group-data-checked:ease-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-checked:opacity-100 group-data-checked:duration-200 group-data-checked:ease-in"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </span>
      </span>
    </Switch>
  );
}
