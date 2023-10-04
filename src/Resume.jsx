import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import BtonContact from "./ButtonContact";

const MySelf = () => {
  return (
    <div className="flex flex-col justify-center gap-10 lg:flex-row-reverse">
      <div className="relative flex justify-center items-center bg-[#00000079] md:rounded-3xl lg:items-end">
        <img
          className="aspect-[3/4] z-10"
          src="./images/profilephoto.png"
          alt="photo"
        />
        <img
          src="/icons/ovals.svg"
          alt=""
          className="absolute -left-1/2 lg:hidden"
        />
        <img
          src="/icons/circle.svg"
          alt=""
          className="hidden lg:block absolute z-10 bottom-0 -left-1/4"
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 lg:items-start lg:text-start">
        <h1 className="text-4xl text-white-100 md:text-5xl lg:text-7xl xl:text-8xl">
          Nice to meet you!
          <br />
          I'm{" "}
          <a className="name-link relative z-20" href="">
            Wagner Lindo
          </a>
        </h1>
        <p className="body-normal md:mt-16 xl:text-2xl">
          Based in Perú, Front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <BtonContact text="CONTACT ME" />
        <img
          src="/icons/ovals.svg"
          alt=""
          className="hidden lg:block absolute z-10 -left-1/2 top-1/2"
        />
      </div>
    </div>
  );
};
const ExperienCard = () => {
  return (
    <>
      <div className="flex justify-center border-2 border-red-300">
        {[
          {
            icon: "/icons/react-icon.svg",
            languague: "React",
          },
          {
            icon: "/icons/js-icon.svg",
            languague: "JavaScript",
          },
          {
            icon: "/icons/ts-icon.svg",
            languague: "TypeScript",
          },
          {
            icon: "/icons/tailwind-icon.svg",
            languague: "TailwindCSS",
          },
          {
            icon: "/icons/styledcom-icon.svg",
            languague: "Styled-Components",
          },
          {
            icon: "/icons/html-icon.svg",
            languague: "HTML",
          },
          {
            icon: "/icons/css-icon.svg",
            languague: "CSS",
          },
          {
            icon: "/icons/git-icon.svg",
            languague: "GIT",
          },
          {
            icon: "/icons/figma-icon.svg",
            languague: "Figma",
          },
        ].map((slide) => (
          <div key={slide.languague}>
            <div className="py-4 flex flex-col items-center gap-3 md:w-1/2 lg:w-1/3">
              <img className="h-20" src={slide.icon} alt="icon" />
              {/* <span className="body-1">{slide.languague}</span> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const ProjectCard = ({
  img,
  description,
  projectLink,
  githubLink,
  techStack,
}) => {
  return (
    <div className="group relative">
      <div className="absolute hidden lg:flex justify-center items-center lg:hover:bg-[var(--black-500)] opacity-70 w-full h-full ">
        <div className="hidden lg:group-hover:flex flex-col gap-8">
          <a href={projectLink} target="_blank">
            <BtonContact text="VIEW PROJECT" />
          </a>
          <a href={githubLink} target="_blank">
            <BtonContact text="VIEW CODE" />
          </a>
        </div>
      </div>
      <div className="py-4 flex flex-col gap-4">
        <img
          className="w-full rounded-xl hover:scale-105 duration-300"
          src={img}
          alt=""
        />
        <div className="flex flex-col gap-4">
          <p className="body-1">{description}</p>
          <div className="flex gap-3 body-normal">
            {techStack?.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <div className="flex gap-8 lg:hidden">
          <BtonContact href={projectLink} text="VIEW PROJECT" />
          <BtonContact href={githubLink} text="VIEW CODE" />
        </div>
      </div>
    </div>
  );
};

function MyResume() {
  return (
    <>
      <div className="presentation container mx-auto px-12 relative xl:px-20 2xl:px-32 ">
        <MySelf />
        <img
          src="/icons/circle.svg"
          alt=""
          className="absolute bottom-0 right-0 z-30 lg:hidden"
        />
      </div>
      <div className="experience py-8 border-y-2 boder-white-100 my-10 relative lg:px-12">
        <h3 className="body-1 text-orange-400">SKILLS</h3>
        <ExperienCard />
        <img
          src="/icons/ovals.svg"
          alt=""
          className="absolute -end-1/2 -bottom-12 lg:-bottom-1/4 lg:-end-1/4 "
        />
      </div>
      <div className="projects container mx-auto px-12 my-24">
        <div className="flex justify-between">
          <p className="text-h2">Project</p>
          <BtonContact text="CONTACT ME" />
        </div>
        <div className="text-start flex gap-10 flex-col md:grid grid-cols-2 my-16">
          <ProjectCard
            img="/images/iBookShelfPage.png"
            description="IBOOKSHELF"
            techStack={["TYPESCRIPT", "TAILWIND", "REACT"]}
            projectLink="https://nations-explorer-web-wl.netlify.app/"
            githubLink="https://github.com/WagnerLindo/flags-project"
          />
          <ProjectCard
            img="/images/flagsPage.png"
            description="NATIONS EXPLORER"
            techStack={["HTML", "STYLED COMPONENTS", "REACT"]}
            projectLink="https://nations-explorer-web-wl.netlify.app/"
            githubLink="https://github.com/WagnerLindo/flags-project"
          />
          <ProjectCard
            img="/images/videogamesPage.png"
            description="VIDEOGAMES APP"
            techStack={["HTML", "CSS", "TYPESCRIPT"]}
            projectLink="https://tl-videogames.netlify.app/"
            githubLink="https://github.com/WagnerLindo/videogames-app"
          />
          <ProjectCard
            img="/images/invoicePage.png"
            description="INVOICES APP"
            techStack={["HTML", "CSS", "JAVASCRIPT"]}
            projectLink="https://invoices-ui.netlify.app/"
            githubLink="https://github.com/WagnerLindo/invoices-app"
          />
          <ProjectCard
            img="/images/cakesPage.png"
            description="CAKES LANDING"
            techStack={["HTML", "CSS", "JAVASCRIPT"]}
            projectLink="https://cake-website-wagner.netlify.app/"
            githubLink="https://github.com/WagnerLindo/cakes-page"
          />

          <ProjectCard
            img="/images/pricesCard.png"
            description="PRICES CARD"
            techStack={["HTML", "CSS", "JAVASCRIPT"]}
            projectLink="https://wagnerlindo.github.io/prices-examples/"
            githubLink="https://github.com/WagnerLindo/prices-examples"
          />

          <ProjectCard
            img="/images/creditCard.png"
            description="CREDIT CARD"
            techStack={["HTML", "CSS", "JAVASCRIPT"]}
            projectLink="https://credit-card-wagner.netlify.app/"
            githubLink="https://github.com/WagnerLindo/creditcard-check"
          />
          <ProjectCard
            img="/images/homePage.png"
            description="HOME PAGE"
            techStack={["HTML", "CSS"]}
            projectLink="https://wagnerlindo.github.io/news-homepage/"
            githubLink="https://github.com/WagnerLindo/news-homepage"
          />
          <ProjectCard
            img="/images/turtleGame.png"
            description="TURTLE GAME"
            techStack={["HTML", "CSS", "JAVASCRIPT"]}
            languagu
            projectLink="https://wagnerlindo.github.io/turtle-game/"
            githubLink="https://github.com/WagnerLindo/turtle-game"
          />
          <ProjectCard
            img="/images/responsiveCardsPage.png"
            description="RESPONSIVE CARDS PAGE"
            techStack={["HTML", "CSS"]}
            projectLink="https://responsive-cards-wl.netlify.app/"
            githubLink="https://github.com/WagnerLindo/responsive-cards"
          />
          <ProjectCard
            img="/images/cubeCard.png"
            description="CUBE CARD"
            techStack={["HTML", "CSS"]}
            projectLink="https://wagnerlindo.github.io/cube-card/"
            githubLink="https://github.com/WagnerLindo/cube-card"
          />
        </div>
      </div>
    </>
  );
}
export default MyResume;
