import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import API from "../../api/axios";
import UserNavbar from "../../components/user/UserNavbar";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    transition: { duration: 0.45, ease: "easeInOut" },
  }),
};

const swipeConfidenceThreshold = 120;
const swipePower = (offset, velocity) =>
  Math.abs(offset) * velocity;

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [[index, direction], setIndex] = useState([0, 0]);

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await API.get(`/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        console.error("Project fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <>
        <UserNavbar />
        <div className="max-w-5xl mx-auto px-6 pt-24 animate-pulse">
          <div className="h-10 bg-gray-200 w-1/2 mb-6 rounded" />
          <div className="h-4 bg-gray-200 w-1/3 mb-10 rounded" />
          <div className="h-64 bg-gray-200 rounded-xl" />
        </div>
      </>
    );
  }

  if (!project) return null;

  const images = project.images || [];

  /* ================= SLIDER ================= */
  const paginate = (newDirection) => {
    setIndex(([prev]) => {
      let next = prev + newDirection;
      if (next < 0) next = images.length - 1;
      if (next >= images.length) next = 0;
      return [next, newDirection];
    });
  };

  /* ================= IMAGE OPT ================= */
  const imageUrl =
    images[index]?.url?.replace(
      "/upload/",
      "/upload/w_1400,q_auto,f_auto/"
    ) || "/placeholder.jpg";

  return (
    <>
      <UserNavbar />

      {/* ❌ pointer-events-none REMOVED */}
      <section className="relative z-10">

        {/* ===== BACK BUTTON (FINAL FIX) ===== */}
        <div className="max-w-5xl mx-auto px-6 pt-24 mb-6">
          <button
            onClick={() => {
              // ✅ HOME ke projects section par redirect
              navigate("/", {
                state: { scrollTo: "projects" },
              });
            }}
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#2C1810] hover:text-[#C5A059] transition"
          >
            ← Back to Projects
          </button>
        </div>

        {/* ===== TEXT CONTENT ===== */}
        <div className="max-w-5xl mx-auto px-6 md:px-8 pb-14">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="font-serif text-3xl md:text-5xl text-[#2C1810] mb-3"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xs md:text-sm tracking-widest uppercase text-[#b08d57] mb-8"
            >
              {project.category}
              {project.location && ` • ${project.location}`}
              {project.year && ` • ${project.year}`}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg leading-8 text-gray-700 max-w-3xl"
            >
              {project.description}
            </motion.p>
          </motion.div>
        </div>

        {/* ===== IMAGE SLIDER ===== */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
          <div className="relative h-[320px] md:h-[480px] bg-[#f5f3ef] rounded-xl overflow-hidden flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={index}
                src={imageUrl}
                custom={direction}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag={images.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate(1);
                  else if (swipe > swipeConfidenceThreshold) paginate(-1);
                }}
                className="max-h-full max-w-full object-contain select-none"
              />
            </AnimatePresence>

            {/* DESKTOP ARROWS */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => paginate(-1)}
                  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full text-xl"
                >
                  ‹
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full text-xl"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex([i, i > index ? 1 : -1])}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === index ? "bg-[#2C1810]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="md:hidden text-center text-xs text-gray-400 mt-3">
            Swipe to explore images
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
