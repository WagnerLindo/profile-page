import "./App.css";
import { BtonContact } from "./Header";

function ProjectCard({ img, description, projectLink, githubLink, techStack }) {
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
          <BtonContact href={githubLink} text="VIEW CODE" />
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
            img="/images/flagsPage.png"
            description="NATIONS EXPLORER WEB"
            techStack={["HTML", "STYLED COMPONENTS", "REACT"]}
            projectLink="https://nations-explorer-web-wl.netlify.app/"
            githubLink="https://github.com/WagnerLindo/flags-project"
          />
          <ProjectCard
            img="/images/videogamesPage.png"
            description="VIDEOGAMES PAGE"
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
            description="CAKES PAGE"
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
};

export default Projects;
