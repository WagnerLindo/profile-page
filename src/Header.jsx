import { useState } from "react";
import "./App.css";
import SocialsMedias from "./Socials";

export function BtonContact({ text, href, as }) {
  // const Component = as ?? "button";
  if (href) {
    return (
      <a className="body-1 bton-contact" href={href} target="_blank">
        {text}
      </a>
    );
  }
  return <button className="body-1 bton-contact">{text}</button>;
}
const newLocal = "absolute -end-20 bottom-1/4 sm:-end-1/8 bottom-0  md:hidden";
const newLocal_1 = "pb-24 text-center  relative md:flex flex-row-reverse pb-4 ";
const newLocal_2 =
  "relative bg-[var(--black-900)] w-40 h-96 flex-column-justy mx-auto md:basis-3/5 bg-transparent";
// md:pb-0 flex flex-row-reverse
const Header = () => {
  return (
    <>
      <div className={newLocal_1}>
        <div className="absolute position-middle md:hidden">
          <SocialsMedias />
        </div>
        <img
          src="/icons/ovals.svg"
          alt=""
          className="absolute z-10 -start-2/4 top-1/4 lg:-start-1/4"
        />
        <div className={newLocal_2}>
          <img
            className="w-40 h-60 absolute bottom-0 z-20   md:hidden "
            src="./images/profilephoto.png"
            alt=""
          />
        </div>
        <img src="/icons/circle.svg" alt="" className={newLocal} />
        <div className="md:text-start lg:relative z-10 basis-11/12">
          <div className="justify-self-center mb-4">
            <h1 className="text-white body-1 md:text-5xl lg:text-7xl xl:text-8xl">
              Nice to meet you!
              <br />
              I'm{" "}
              <a className="name-link " href="">
                Wagner Lindo
              </a>
            </h1>
            <p className="body-normal md:mt-16 xl:text-2xl">
              Based in the Perú, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
          </div>
          <BtonContact text="CONTACT ME" />
        </div>
      </div>
    </>
  );
};

export default Header;
