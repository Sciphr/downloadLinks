"use client";

import colourlogo from "../../public/Parklane Systems Colour.webp";
import darkModeLogo from "../../public/Parklane Systems White.webp";
import Image from "next/image";
import ModeToggle from "./modeToggle";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { contextTheme } = useTheme();

  return (
    <header className="relative">
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center w-full">
        <>
          <Image
            src={contextTheme === "dark" ? darkModeLogo : colourlogo}
            alt="logo"
            width={255}
            className="py-8 transition-opacity duration-300 ease-in-out"
            style={{ opacity: contextTheme === "dark" ? 1 : 1 }}
            priority
          />
          <p
            className={`text-3xl font-bold transition-colors duration-300 ease-in-out ${
              contextTheme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Parklane Software Download Links
          </p>
          <p className="text-sm italic pt-10 mb-[-1rem]">
            Click button to download corresponding Parklane software
          </p>
        </>
      </div>
    </header>
  );
};

export default Header;
