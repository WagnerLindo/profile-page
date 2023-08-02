import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Experience from "./experiences";
import Projects from "./Projects.jsx";
import Footer from "./Footer";
import SocialsMedias from "./Socials";

const newLocal =
  "hidden md:block absolute bottom-0 z-20 w-4/12 h-60 md:w-full h-96 ";
const newLocal_1 = "px-4 sm:px-8 md:relative px-2 lg:px-24 xl:px-40 2xl:px-60";
const newLocal_2 = "px-4 sm:px-8 md:relative px-2 lg:px-24 xl:px-40 2xl:px-60";
const newLocal_3 =
  "hidden md:block mx-auto absolute right-7 top-0 bg-[var(--black-900)] w-4/12 h-full lg:right-24 xl:right-40 w-3/12 2xl:w-3/12 2xl:right-60 ";
function App() {
  return (
    <>
      <div className={newLocal_1}>
        <div className="hidden md:block relative z-10">
          <SocialsMedias />
        </div>
        <Header />
        <div className={newLocal_3}>
          <img className={newLocal} src="./images/profilephoto.png" alt="" />
          <img
            src="/icons/circle.svg"
            alt=""
            className="md:block absolute bottom-0 -left-1/4 z-20 xl:left-0"
          />
        </div>
      </div>
      <div className={newLocal_2}>
        <Experience />
        <Projects />
      </div>
      <div className="bg-[var(--black-100)] opacity-80">
        <Footer />
      </div>
    </>
  );
}

export default App;
