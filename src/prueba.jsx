import "./App.css";
import { BtonContact } from "./Header";
import React, { useState } from "react";

const MyComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-full h-full"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {isHovered ? (
        <div className=" flex flex-col w-full h-full gap-8 inset-0 bg-red-600 p-4">
          <a href="https://wagnerlindo.github.io/cube-card/" target="_blank">
            <BtonContact text="VIEW PROJECT" />
          </a>
          <BtonContact text="VIEW CODE" />
        </div>
      ) : (
        <div className=" flex-center w-full h-full lg:hover:bg-[var(--black-500)] opacity-70">
          hola
        </div>
      )}
    </div>
  );
};

export default MyComponent;
