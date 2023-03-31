import React from "react";

const ButtonPrimary = ({ text }) => {
  return (
    <button className="rounded-lg duration-300 bg-red hover:bg-redDark py-3 px-6">
      {text}
    </button>
  );
};

export default ButtonPrimary;
