import "./App.css";
import { BtonContact } from "./Header";
import abcImg from "../public/images/cubeCard.png";
// import abcImg from "./public/images/cubeCard.png";

function ProjectCard({ img, description, projectLink, githubLink, techStack }) {
  return (
    <div className="group relative">
      <div className="hidden absolute flex-center w-full h-full lg:hover:bg-[var(--black-500)] opacity-70 ">
        {/* <MyComponent /> */}
        <div className="hidden lg:group-hover:flex flex-col gap-8">
          <a href={projectLink} target="_blank">
            <BtonContact text="VIEW PROJECT" />
          </a>
          <BtonContact text="VIEW CODE" />
        </div>
      </div>
      <div className="py-4 flex flex-col gap-4">
        <img className="imgscale w-full rounded-xl" src={img} alt="" />
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
          <BtonContact href={projectLink} text="VIEW CODE" />
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <>
      <div className="my-24">
        <div className="flex justify-between">
          <p className="text-h2">Project</p>
          <BtonContact text="CONTACT ME" />
        </div>
        <div className="text-start flex gap-10 flex-col md:grid grid-cols-2 my-16">
          <ProjectCard
            img={abcImg}
            description="CUBE CARD"
            techStack={["HTML", "CSS"]}
            projectLink="https://wagnerlindo.github.io/cube-card/"
            githubLink="https://wagnerlindo.github.io/cube-card/"
          />
          <ProjectCard
            img="/images/homePage.png"
            description="HOME PAGE"
            techStack={["HTML", "CSS"]}
            projectLink="https://wagnerlindo.github.io/news-homepage/"
            githubLink="https://wagnerlindo.github.io/news-homepage/"
          />
          <ProjectCard
            img="/images/turtleGame.png"
            description="TURTLE GAME"
            techStack={["HTML", "CSS", "JAVASCRIPT"]}
            languagu
            projectLink="https://wagnerlindo.github.io/turtle-game/"
            githubLink="https://wagnerlindo.github.io/turtle-game/"
          />
          <ProjectCard
            img="/images/creditCard.png"
            description="CREDIT CARD"
            techStack={["HTML", "CSS", "JAVASCRIPT"]}
            projectLink="https://credit-card-wagner.netlify.app/"
            githubLink="https://credit-card-wagner.netlify.app/"
          />
          <ProjectCard
            img="/images/pricesCard.png"
            description="PRICES CARD"
            techStack={["HTML", "CSS", "JAVASCRIPT"]}
            projectLink="https://wagnerlindo.github.io/prices-examples/"
            githubLink="https://wagnerlindo.github.io/prices-examples/"
          />

          <ProjectCard
            img="/images/cakesPage.png"
            description="CAKES PAGE"
            techStack={["HTML", "CSS", "JAVASCRIPT"]}
            projectLink="https://cake-website-wagner.netlify.app/"
            githubLink="https://cake-website-wagner.netlify.app/"
          />

          <ProjectCard
            img="/images/videogamesPage.png"
            description="INVOICES APP"
            techStack={["HTML", "CSS", "JAVASCRIPT"]}
            projectLink="https://invoices-ui.netlify.app/"
            githubLink="https://invoices-ui.netlify.app/"
          />

          <ProjectCard
            img="/images/videogamesPage.png"
            description="VIDEOGAMES PAGE"
            techStack={["HTML", "CSS", "TYPESCRIPT"]}
            projectLink="https://tl-videogames.netlify.app/"
            githubLink="https://tl-videogames.netlify.app/"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
