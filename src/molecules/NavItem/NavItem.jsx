import React from "react";
import Links from "../../atoms/Links/Links";
import Logo from "../../atoms/Logo/Logo";

const NavItem = ({ type }) => {
  return (
    <div className="flex items-center">
      {type === "logo" ? <Logo /> : <Links />}
    </div>
  );
};

export default NavItem;
