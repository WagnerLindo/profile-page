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
        <ExperienCard languague="HTML" time="+6 Months Experience" />
        <ExperienCard languague="CSS" time="+6 Months Experience" />
        <ExperienCard languague="Javascript" time="+5 Months Experience" />
        <ExperienCard languague="Typescript" time="+3 Months Experience" />
        <ExperienCard languague="React" time="+2 Months Experience" />
        <img src="/icons/ovals.svg" alt="" className={newLocal} />
      </div>
    </>
  );
};

export default Experience;

//   techs?.map((tech) => (
//     <p className="body-1" key={tech}>
//       {tech}
//     </p>
//   ));
// }
// {
//   period?.map((time) => (
//     <p className="body-normal" key={time}>
//       {time}
//     </p>
//   ));
// }

// <ExperienCard techs={["HTML"]} period={["asd"]} />;
