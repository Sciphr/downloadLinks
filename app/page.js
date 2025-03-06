"use client";

import DownloadLink from "./components/downloadLink";
import Footer from "./components/footer";
import Header from "./components/header";
import { locations } from "./constants/constants";
import { useTheme } from "./components/ThemeContext";

export default function Home() {
  const sortedLocations = locations.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0; // names are equal
  });

  const { contextTheme } = useTheme();

  return (
    <div
      className={`grid grid-rows-[auto_1fr_auto] gap-y-20 items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)] ${
        contextTheme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-800"
      }`}
    >
      <Header />
      <div className="row-start-4 mt-[-1rem] col-span-full flex justify-center">
        <DownloadLink
          name="All Provinces/Territories"
          link="https://www.parklanesys.com/Downloads/9497/EXE/PKV12ALL.exe"
        />
      </div>
      <div className="grid grid-cols-4 gap-20 row-start-2 items-center sm:items-start">
        {sortedLocations.slice(0, 8).map((location, index) => {
          return (
            <div key={index}>
              <DownloadLink name={location.name} link={location.link} />
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-20 mb-[1rem] row-start-3 items-center">
        {sortedLocations.slice(8, 11).map((location, index) => {
          return (
            <div key={index}>
              <DownloadLink name={location.name} link={location.link} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
