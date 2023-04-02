import React from "react";
import Socials from "../../molecules/Socials/Socials";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-10 md:px-24 container md:max-w-screen-lg xl:px-0 mx-auto"
    >
      <div className="bg-lightBlack p-8 rounded-lg flex flex-row gap-8 items-center ">
        <div className="w-2/5 bg-black rounded-lg">
          <img src="../src/assets/img/me.png" />
        </div>
        <div className="w-3/5">
          <h2 className="text-3xl mb-2 text-lightGray">
            about me<span className="text-red">.</span>
          </h2>
          <h3 className="mb-4 text-lightGray">React & Wordpress Developer</h3>
          <p className="text-gray leading-6 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus
            perferendis excepturi, libero deleniti, nesciunt earum beatae
            tenetur exercitationem architecto nulla laboriosam ipsam. Nulla
            officiis recusandae omnis dolor! Provident, voluptatem.
          </p>
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default About;
