import React from "react";
import ButtonPrimary from "../../atoms/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../atoms/ButtonSecondary/ButtonSecondary";
import Introduction from "../../molecules/Introduction/Introduction";

const Hero = () => {
  return (
    <div className="px-6 md:px-24 min-h-screen flex justify-center flex-col container md:max-w-screen-lg xl:px-0 mx-auto">
      <Introduction />
      <div className="flex gap-x-4">
        <ButtonPrimary text="View my job" />
        <ButtonSecondary text="Get in touch ➜" />
      </div>
    </div>
  );
};

export default Hero;
