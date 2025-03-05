"use client";

import colourlogo from "../../public/Parklane Systems Colour.png";
import darkModeLogo from "../../public/Parklane Systems White.png";
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
            width={700}
            className="py-8"
          />
          <p
            className={`text-3xl font-bold ${
              contextTheme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Parklane Software Download Links
          </p>
        </>
      </div>
    </header>
  );
};

export default Header;
