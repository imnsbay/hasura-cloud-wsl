import BetaWarning from "./ProjectComponents/BetaWarning";
import Header from "./Header/Header";
import Project from "./ProjectComponents/Project";

function Projects() {
  const projects = [
    {
      level: "Owner",
      name: "direct-fish-79",
      status: true,
      graphLink: "https://direct-fish-79.hasura.app/v1/graphql",
    },
    {
      level: "Viewer",
      name: "direct-fish-98",
      status: false,
      graphLink: "https://direct-fish-98.hasura.app/v1/graphql",
    },
  ];

  return (
    <div className="flex bg-[#e5e7eb] w-full">
      <div className="flex flex-col min-w-max min-h-max h-max w-7/12 mt-14 ml-14 gap-y-6">
        <Header />
        <BetaWarning />
        {projects.map((el, index) => (
          <Project
            key={index}
            level={el.level}
            name={el.name}
            status={el.status}
            graphLink={el.graphLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
