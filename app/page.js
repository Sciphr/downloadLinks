"use client";

import DownloadLink from "./components/downloadLink";
import Footer from "./components/footer";
import Header from "./components/header";
import { locations } from "./constants/constants";
import getTheme from "./components/getTheme";
import { useState, useEffect } from "react";

export default function Home() {
  const sortedLocations = [...locations].sort();
  const [userPreference, setUserPreference] = useState(null);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserPreference = localStorage.getItem("userTheme");
      setUserPreference(storedUserPreference);
      setTheme(getTheme(storedUserPreference));
    }
  }, []);

  useEffect(() => {
    setTheme(getTheme(userPreference));
  }, [userPreference]);

  if (theme === null) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-16 sm:pt-5 sm:pb-15 font-[family-name:var(--font-geist-sans)] ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <Header theme={theme} />
      <div className="row-start-2 col-span-full flex justify-center mt-[-2rem]">
        <DownloadLink name="All" theme={theme} />
      </div>
      <div className="grid grid-cols-4 gap-16 row-start-3 items-center sm:items-start mb-[5rem]">
        {sortedLocations.map((location, index) => {
          return (
            <div key={index}>
              <DownloadLink name={location} theme={theme} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
