import React from "react";

const ButtonSecondary = ({ text }) => {
  return (
    <button className="py-3 px-6 relative duration-300 hover:text-gray">
      {text}
    </button>
  );
};

export default ButtonSecondary;
