import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project._id}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <img
          src={project.images?.[0]?.url}
          alt={project.title}
          className="h-56 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-600">
            {project.category} • {project.year}
          </p>
          <p className="text-sm text-gray-500">{project.location}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
