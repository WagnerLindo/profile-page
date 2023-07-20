import "./App.css";
import githubLogo from "../public/icons/github-icon.svg";
import linkedinLogo from "../public/icons/linkedin-icon.svg";
import twitterLogo from "../public/icons/twitter-icon.svg";
import facebookLogo from "../public/icons/facebook-icon.svg";

const SocialsMedias = () => {
  return (
    <>
      <div className="flex-column-justy gap-4 py-8 mx-auto md:px-2">
        <div>
          <p className="body-1">Wagner Lindo</p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/WagnerLindo">
            <img
              className="iconscale w-4 h-4 "
              src={githubLogo}
              alt="React logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/wemerson-lc/">
            <img
              className="iconscale w-4 h-4"
              src={linkedinLogo}
              alt="React logo"
            />
          </a>
          <a href="https://twitter.com/EmersonLCh">
            <img
              className="iconscale w-4 h-4"
              src={twitterLogo}
              alt="React logo"
            />
          </a>
          <a href="https://www.facebook.com/2007emerzon.lc">
            <img
              className="iconscale w-4 h-4"
              src={facebookLogo}
              alt="React logo"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialsMedias;
