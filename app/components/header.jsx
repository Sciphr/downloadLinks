"use client";

import colourlogo from "../../public/Parklane Systems Colour.png";
import darkModeLogo from "../../public/Parklane Systems White.png";
import Image from "next/image";
import ModeToggle from "./modeToggle";
import { useEffect, useState } from "react";

const Header = ({ theme }) => {
  const [initialTheme, setInitialTheme] = useState(null);

  useEffect(() => {
    setInitialTheme(theme);
  }, [theme]);

  const logoSrc = initialTheme === "dark" ? darkModeLogo : colourlogo;

  return (
    <header className="relative">
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center w-full">
        {initialTheme !== null && (
          <>
            <Image src={logoSrc} alt="logo" width={700} className="py-8" />
            <p
              className={`text-3xl font-bold ${
                initialTheme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Parklane Software Download Links
            </p>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
