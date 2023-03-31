import React from "react";

const links = [
  { link: "#about", name: "about" },
  { link: "#works", name: "works" },
  { link: "#contact", name: "contact" },
];

const Links = () => {
  return (
    <>
      {links.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="text-gray-300 duration-300 hover:text-gray px-2 py-2 text-base font-medium"
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

export default Links;
