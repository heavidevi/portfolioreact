import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Assignment 1",
    description: "A showcase of my first project, demonstrating core web development skills.",
    path: "Assignment1",
  },
  {
    name: "Assignment 2",
    description: "My second project, focusing on advanced React and backend integration.",
    path: "Assignment2",
  },
  {
    name: "Assignment 3",
    description: "A full-stack application built with the MERN stack.",
    path: "Assignment3",
  }, {
    name: "guest house",
    description: "A full-stack application built with the MERN stack.",
    path: "guest-house",
  },
];

const ProjectList: React.FC = () => {
  return (
    <section id="projects" className="w-full py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.path} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
