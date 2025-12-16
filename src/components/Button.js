import React from "react";

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full mt-8 bg-green py-4 rounded-[30px] text-white-100 font-instrument-sans font-semibold text-base cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
