"use client";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const DownloadLink = ({ name, theme }) => {
  const [initialTheme, setInitialTheme] = useState(null);

  useEffect(() => {
    setInitialTheme(theme);
  }, [theme]);

  return (
    initialTheme !== null && (
      <div
        className={`overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-transform duration-200 ease-in-out flex flex-col gap-1 justify-center items-center py-4 px-5 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 active:shadow-inner ${
          initialTheme === "dark"
            ? "bg-gray-800 hover:bg-gray-700 text-white active:bg-gray-900 shadow-sm dark:shadow-gray-700/50"
            : "bg-gradient-to-br from-gray-50 to-white text-gray-800 active:bg-gray-100"
        }`}
      >
        <div className="flex justify-center items-center">
          <ArrowDownTrayIcon
            className={`w-6 h-6 ${
              initialTheme === "dark" ? "text-green-400" : "text-parklane-green"
            } mr-2`}
          />
          <div className="font-semibold">{name}</div>
        </div>
      </div>
    )
  );
};

export default DownloadLink;
