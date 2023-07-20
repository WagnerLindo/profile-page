import "./App.css";
import { BtonContact } from "./Header";

function ProjectCard({
  img,
  description,
  languague1,
  languague2,
  languague3,
  projectLink,
  githubLink,
}) {
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
            <span>{languague1}</span>
            <span>{languague2}</span>
            <span>{languague3}</span>
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
            img="./public/images/cubeCard.png"
            description="CUBE CARD"
            languague1="HTML"
            languague2="CSS"
            projectLink="https://wagnerlindo.github.io/cube-card/"
            githubLink="https://wagnerlindo.github.io/cube-card/"
          />
          <ProjectCard
            img="./public/images/homePage.png"
            description="HOME PAGE"
            languague1="HTML"
            languague2="CSS"
            projectLink="https://wagnerlindo.github.io/news-homepage/"
            githubLink="https://wagnerlindo.github.io/news-homepage/"
          />
          <ProjectCard
            img="./public/images/turtleGame.png"
            description="TURTLE GAME"
            languague1="HTML"
            languague2="CSS"
            languague3="JAVASCRIPT"
            projectLink="https://wagnerlindo.github.io/turtle-game/"
            githubLink="https://wagnerlindo.github.io/turtle-game/"
          />
          <ProjectCard
            img="./public/images/creditCard.png"
            description="CREDIT CARD"
            languague1="HTML"
            languague2="CSS"
            languague3="JAVASCRIPT"
            projectLink="https://credit-card-wagner.netlify.app/"
            githubLink="https://credit-card-wagner.netlify.app/"
          />
          <ProjectCard
            img="./public/images/pricesCard.png"
            description="PRICES CARD"
            languague1="HTML"
            languague2="CSS"
            languague3="JAVASCRIPT"
            projectLink="https://wagnerlindo.github.io/prices-examples/"
            githubLink="https://wagnerlindo.github.io/prices-examples/"
          />

          <ProjectCard
            img="./public/images/cakesPage.png"
            description="CAKES PAGE"
            languague1="HTML"
            languague2="CSS"
            languague3="JAVASCRIPT"
            projectLink="https://cake-website-wagner.netlify.app/"
            githubLink="https://cake-website-wagner.netlify.app/"
          />

          <ProjectCard
            img="./public/images/videogamesPage.png"
            description="INVOICES APP"
            languague1="HTML"
            languague2="CSS"
            languague3="JAVASCRIPT"
            projectLink="https://invoices-ui.netlify.app/"
            githubLink="https://invoices-ui.netlify.app/"
          />

          <ProjectCard
            img="./public/images/videogamesPage.png"
            description="VIDEOGAMES PAGE"
            languague1="HTML"
            languague2="CSS"
            languague3="TYPESCRIPT"
            projectLink="https://tl-videogames.netlify.app/"
            githubLink="https://tl-videogames.netlify.app/"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
