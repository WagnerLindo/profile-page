import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer";
import SocialsMedias from "./Socials";

const newLocal =
  "hidden md:block absolute bottom-0 z-20 w-4/12 h-60 md:w-full h-96 ";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="sm:px-16 md:relative px-2 lg:px-24 xl:px-40 2xl:px-60">
        <div className="hidden md:block mx-auto absolute right-10 top-0 bg-[var(--black-900)] w-4/12 height-profile xl:w-3/12">
          <img className={newLocal} src="./images/profilephoto.png" alt="" />
          <img
            src="/icons/circle.svg"
            alt=""
            className="md:block absolute bottom-0 -left-1/4 z-20"
          />
        </div>
        <div className="hidden md:block relative z-10">
          <SocialsMedias />
        </div>
        <Header />
        <Experience />
        <Projects />
        <Footer />
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className='text-3xl uppercase underline'>holaa</p>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
    </>
  );
}

export default App;
