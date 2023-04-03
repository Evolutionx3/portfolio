import React from "react";
import Socials from "../../molecules/Socials/Socials";
import AboutText from "../../molecules/AboutText/AboutText";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-10 md:px-24 container md:max-w-screen-lg xl:px-0 mx-auto"
    >
      <div className="bg-lightBlack p-6 sm:p-8 md:p-4 lg:p-8 rounded-lg flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="w-full md:w-2/5 bg-black rounded-lg">
          <img
            className="w-60 sm:w-72 md:w-full m-auto"
            src="../src/assets/img/me.png"
          />
        </div>
        <div className="w-full md:w-3/5">
          <AboutText />
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default About;
