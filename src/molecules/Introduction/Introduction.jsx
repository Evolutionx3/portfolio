import React from "react";

const Introduction = () => {
  return (
    <>
      <h2 className="text-base md:text-lg tracking-wider text-red">
        Hi, my name is
      </h2>
      <h2 className="text-4xl md:text-7xl font-bold leading-tight text-lightGray">
        Dawid Malec.
      </h2>
      <h3 className="text-4xl md:text-7xl font-bold text-gray mb-6">
        I create digital experiences.
      </h3>
      <p className="text-base text-gray leading-6 max-w-screen-sm lg:max-w-screen-md mb-8 lg:mb-6">
        I am a front-end developer with a focus on building user-friendly
        websites and applications. I have a passion for creating seamless
        digital experiences and enjoy designing webpages as well. Currently, I
        am expanding my skills in React.js to build more dynamic applications.
        My goal is to create exceptional digital products that are visually
        appealing, accessible, and intuitive to use.
      </p>
    </>
  );
};

export default Introduction;
