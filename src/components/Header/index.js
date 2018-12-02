import React from "react";
import Link from "gatsby-link";

import logoSmall from "../../images/favicon.png";

const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <nav className="bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4">
        <Link to="/" className="flex items-center no-underline ">

                 <img src={logoSmall} className="logo" />

{/*          
          <span className="font-bold text-xl tracking-tight ">
            SSLC
          </span> */}
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          id="nav"
          className="hidden md:flex md:items-center w-full md:w-auto"
        >
          <div className="text-sm">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-dark"
            >
              Home
            </Link>

            <Link
              to="/#intro"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-dark"
            >
              About
            </Link>

             <Link
              to="/#services"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-dark"
            >
              Services
            </Link>

            <Link
              to="/#team"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-dark"
            >
              Our Team
            </Link>
            <Link
              to="/#testimonials"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-dark"
            >
              Testimonials
            </Link>

            <Link
              to="/#contact"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-dark-inverse"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
