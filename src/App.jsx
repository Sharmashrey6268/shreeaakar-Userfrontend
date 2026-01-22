import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

/* ================= USER PAGES ================= */
import Home from "./pages/user/Home";
import UserProjects from "./pages/user/Projects";
import ProjectDetail from "./pages/user/ProjectDetail";
import About from "./pages/user/About";
import Contact from "./pages/user/Contact";
import Testimonials from "./pages/user/Testimonials";

/* ================= PAGE ANIMATION ================= */
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.45,
      ease: "easeIn",
    },
  },
};

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* ================= USER ROUTES ================= */}
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          }
        />

        <Route
          path="/projects"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <UserProjects />
            </motion.div>
          }
        />

        <Route
          path="/projects/:id"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ProjectDetail />
            </motion.div>
          }
        />

        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <About />
            </motion.div>
          }
        />

        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Contact />
            </motion.div>
          }
        />

        <Route
          path="/testimonials"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Testimonials />
            </motion.div>
          }
        />

        {/* ================= FALLBACK ================= */}
        <Route
          path="*"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-center justify-center min-h-screen"
            >
              <h1 className="text-2xl font-serif">Page Not Found</h1>
            </motion.div>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}

export default App;
