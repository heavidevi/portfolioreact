import React from "react";
import { Link } from "react-router";

interface ProjectCardProps {
  name: string;
  description: string;
  path: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, path }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition-transform">
      <h3 className="text-xl font-bold text-purple-700 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={`/${path.toLowerCase()}`}
        className="mt-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProjectCard;
