import React from "react";

const socialMedia = [
  {
    link: "https://github.com/Evolutionx3",
    svg: "/src/assets/img/gh.png",
  },
  {
    link: "https://www.linkedin.com/in/dawid-malec-939ba7236/",
    svg: "/src/assets/img/lin.png",
  },
];

const Social = () => {
  return (
    <>
      {socialMedia.map((item) => (
        <a
          href={item.link}
          className="bg-black p-2 rounded-lg duration-300 border border-transparent hover:border-zinc-900"
          target="_blank"
        >
          <img src={item.svg} />
        </a>
      ))}
    </>
  );
};

export default Social;
