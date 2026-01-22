import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axios";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(res.data || []);
      } catch (err) {
        console.error("Failed to load projects", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  /* ===== LOADING SKELETON ===== */
  if (loading) {
    return (
      <div className="flex gap-8 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="min-w-[300px] h-72 bg-gray-200 rounded-xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={sliderRef}
      className="
        flex gap-8
        overflow-x-auto
        scroll-smooth
        snap-x snap-mandatory
        pb-6
        scrollbar-hide
      "
    >
      {projects.map((project) => (
        <motion.div
          key={project._id}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="
            min-w-[280px]
            md:min-w-[320px]
            bg-white
            rounded-xl
            shadow
            hover:shadow-xl
            transition
            overflow-hidden
            snap-start
          "
        >
          {/* IMAGE */}
          <img
            src={project.images?.[0]?.url}
            alt={project.title}
            className="h-56 w-full object-cover"
            loading="lazy"
          />

          {/* CONTENT */}
          <div className="p-5 text-center">
            <h3 className="font-serif text-lg mb-1">
              {project.title}
            </h3>

            <p className="text-xs text-gray-500 mb-2 tracking-wide uppercase">
              {project.category}
              {project.location && ` • ${project.location}`}
            </p>

            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
              {project.description}
            </p>

            <Link
              to={`/projects/${project._id}`}
              className="
                inline-block
                border border-black
                px-6 py-2
                text-xs
                tracking-widest
                hover:bg-black
                hover:text-white
                transition
              "
            >
              Explore
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
