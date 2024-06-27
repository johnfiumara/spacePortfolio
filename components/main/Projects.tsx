import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      {/* TODO: update with actual projects */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/portfolio-alpha.png"
          title="Modern portfolio"
          description="Developer Portfolio website leverging framer motion and three.js for 3D interactive componants"
        />
        <ProjectCard
          src="/getswole.png"
          title="get-swole.fun"
          description="A mock exercices website the that fetches data about different workouts one could want from an external API"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="COMING SOON: Maine Meal Assistance"
          description="An extensive non-profit website that includes donations through strip, a messeging service built in to the application for volunteer management and much more! stay tuned!"
        />
      </div>
    </div>
  );
};

export default Projects;
