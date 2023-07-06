import React from "react";
import classNames from "classnames";

const CustomButton = ({ children, onClick, type = "", className = "" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(
        "p-2 bg-blue-400 border rounded shadow hover:scale-105 transition-all duration-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
