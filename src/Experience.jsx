import { useState } from "react";
import "./App.css";

function ExperienCard({ languague, time }) {
  return (
    <div className="py-4 md:w-1/2 lg:w-1/3">
      <p className="body-1">{languague}</p>
      <p className="body-normal">{time}</p>
    </div>
  );
}

const newLocal = "absolute -end-1/2 -bottom-12 lg:-bottom-1/4 -end-1/4 ";
const Experience = () => {
  return (
    <>
      <div className="py-8 border-y-2 boder-white my-10 relative md:flex flex-wrap lg:px-12">
        <ExperienCard languague="HTML" time="4 Years Ecperience" />
        <ExperienCard languague="CSS" time="4 Years Ecperience" />
        <ExperienCard languague="Javascript" time="4 Years Ecperience" />
        <ExperienCard languague="Typescript" time="4 Years Ecperience" />
        <ExperienCard languague="React" time="4 Years Ecperience" />
        <img src="../public/icons/ovals.svg" alt="" className={newLocal} />
      </div>
    </>
  );
};

export default Experience;
