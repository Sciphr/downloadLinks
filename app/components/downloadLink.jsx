"use client";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useTheme } from "./ThemeContext";

const DownloadLink = ({ name, link }) => {
  const { contextTheme } = useTheme();

  return (
    <a href={link} download>
      <div
        className={`overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out flex flex-col gap-1 justify-center items-center py-4 px-5 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 active:shadow-inner ${
          contextTheme === "dark"
            ? "bg-gradient-to-br from-gray-800 to-gray-700 text-white active:bg-gray-900"
            : "bg-gradient-to-br from-gray-50 to-white text-gray-800 active:bg-gray-100"
        }`}
      >
        <div className="flex justify-center items-center">
          <ArrowDownTrayIcon
            className={`w-6 h-6 transition-colors duration-300 ease-in-out ${
              contextTheme === "dark"
                ? "text-parklane-green"
                : "text-parklane-green"
            } mr-2`}
          />
          <div
            className={`font-semibold transition-colors duration-300 ease-in-out ${
              contextTheme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            {name}
          </div>
        </div>
      </div>
    </a>
  );
};

export default DownloadLink;
