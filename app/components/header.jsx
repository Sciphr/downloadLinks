import React from "react";
import colourlogo from "../../public/Parklane Systems Colour.png";
import Image from "next/image";
import ModeToggle from "./modeToggle";

const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <p>Test</p>
      <Image src={colourlogo} alt="logo" width={700} className="py-10" />
      <p className="text-4xl font-bold">Parklane Download Links</p>
    </header>
  );
};

export default Header;
