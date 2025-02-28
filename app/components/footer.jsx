import Link from "next/link";
import React from "react";

const navigation = {
  main: [
    { name: "Home", href: "https://www.parklanesys.com" },
    { name: "Solutions", href: "https://www.parklanesys.com/support" },
    { name: "Software", href: "https://www.parklanesys.com/softwaresolutions" },
    { name: "KICS", href: "https://www.parklanesys.com/kics" },
    {
      name: "Hosting Services",
      href: "https://www.parklanesys.com/cloudservices",
    },
    { name: "About", href: "https://www.parklanesys.com/about" },
    { name: "Contact", href: "https://www.parklanesys.com/contact" },
    {
      name: "Customer Login",
      href: "https://www.parklanesys.com/forum",
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/Parklane-Systems/100066932096050/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://twitter.com/ParklaneSystems",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-8">
          <nav
            className="-mb-6 grid grid-cols-2 justify-items-center sm:flex sm:justify-center sm:space-x-12"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a
                  href={item.href}
                  className="text-sm leading-6 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-10 text-center text-xs leading-6">
            &copy; 2025 Parklane Systems Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
