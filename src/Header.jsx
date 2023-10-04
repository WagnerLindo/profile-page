import "./App.css";
import { twMerge } from "tailwind-merge";

import { Github, Linkedin, Facebook, Twitter } from "lucide-react";

import githubLogo from "/icons/github-icon.svg";
import linkedinLogo from "/icons/linkedin-icon.svg";
import twitterLogo from "/icons/twitter-icon.svg";
import facebookLogo from "/icons/facebook-icon.svg";

const SocialsLogo = ({ linkPage, logo, hover }) => {
  return (
    <>
      <a href={linkPage} target="_blank">
        <div
          className={twMerge(
            "w-8 h-8 group flex justify-center items-center bg-slate-800 rounded-full hover:scale-125 duration-300",
            hover
          )}
        >
          {logo}
        </div>
      </a>
    </>
  );
};

export function SocialsMedias() {
  return (
    <>
      <div className="flex-column-justy gap-4 py-8 relative">
        <div>
          <p className="body-1">Wagner Lindo</p>{" "}
        </div>
        <div className="flex gap-3">
          <SocialsLogo
            hover="hover:bg-black"
            linkPage="https://github.com/WagnerLindo"
            logo={
              <Github className="w-5 h-5 group-hover:fill-white-100 group-hover:text-white-100" />
            }
          />
          <SocialsLogo
            hover="hover:bg-[#0C64C2]"
            linkPage="https://www.linkedin.com/in/wemerson-lc/"
            logo={<Linkedin className="w-5 h-5 group-hover:fill-white-100" />}
          />
          <SocialsLogo
            hover="hover:bg-white-100"
            linkPage="https://twitter.com/EmersonLCh"
            logo={
              <Twitter className="w-5 h-5 group-hover:fill-[#20A1F2] group-hover:text-[#20A1F2]" />
            }
          />
          <SocialsLogo
            hover="hover:bg-[#395398]"
            linkPage="https://www.facebook.com/2007emerzon.lc"
            logo={<Facebook className="w-5 h-5 group-hover:fill-white-100" />}
          />
        </div>
      </div>
    </>
  );
}

const Header = () => {
  return (
    <div className="px-12 container mx-auto">
      <SocialsMedias />
    </div>
  );
};

export default Header;
