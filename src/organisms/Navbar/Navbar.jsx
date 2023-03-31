import React from "react";
import NavItem from "../../molecules/NavItem/NavItem";

const Navbar = () => {
  return (
    <header className="fixed top-0 flex justify-between items-center w-full h-20 md:h-24 px-6 md:px-10 xl:px-24">
      <nav className="relative flex justify-between items-center w-full">
        <NavItem type="logo" />
        <NavItem type="links" />
      </nav>
    </header>
  );
};

export default Navbar;
