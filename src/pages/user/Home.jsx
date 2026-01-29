import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import UserNavbar from "../../components/user/UserNavbar";
import About from "./About";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import WhyUs from "./WhyUs";

/* ================= HERO IMAGES ================= */
// Desktop images
import hero1 from "../../assets/hero/hero1.png";
import hero2 from "../../assets/hero/hero2.png";
import hero4 from "../../assets/hero/hero4.jpeg";
import hero5 from "../../assets/hero/hero5.jpeg";
import hero6 from "../../assets/hero/hero6.jpeg";
import hero7 from "../../assets/hero/hero7.jpeg";
import hero8 from "../../assets/hero/hero8.jpeg";
import hero9 from "../../assets/hero/hero9.jpeg";

// Mobile images
import hero1mobile from "../../assets/hero/hero1-mobile.jpeg";
import hero2mobile from "../../assets/hero/hero2-mobile.jpeg";
import hero3mobile from "../../assets/hero/hero3-mobile.jpeg";

const desktopImages = [
  hero1,
  hero2,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
];

const mobileImages = [
  hero1mobile,
  hero2mobile,
  hero3mobile,
  hero9,
];

/* ================= REUSABLE SECTION ================= */
const Section = ({
  id,
  title,
  bg = "bg-white",
  titleClass = "",
  padding = "py-16 md:py-20 lg:py-24",
  children,
}) => (
  <section id={id} className={`${bg} ${padding} px-4 sm:px-6`}>
    <div className="max-w-7xl mx-auto text-center">
      {title && (
        <h2
          className={`font-serif text-2xl sm:text-3xl md:text-4xl mb-10 ${titleClass}`}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

const Home = () => {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const hasHandledScroll = useRef(false); // 🔥 IMPORTANT

  /* ================= HERO CAROUSEL ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  /* ================= SCROLL HANDLING (FIXED) ================= */
  useEffect(() => {
    // prevent running multiple times
    if (hasHandledScroll.current) return;

    // Case 1: ProjectDetail se navigation ke through aaye ho
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);

      if (el) {
        const yOffset = -100; // navbar height
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        setTimeout(() => {
          window.scrollTo({ top: y, behavior: "smooth" });

          // 🔥 VERY IMPORTANT: state CLEAR karo
          navigate("/", { replace: true, state: null });
        }, 200);
      }
    }
    // Case 2: Normal visit / refresh → TOP
    else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    hasHandledScroll.current = true;
  }, [location.state, navigate]);

  return (
    <>
      <UserNavbar />

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative overflow-hidden h-[60vh] sm:h-[70vh] lg:h-screen"
      >
        {/* 📱 MOBILE CAROUSEL */}
        <div className="absolute inset-0 md:hidden">
          <AnimatePresence mode="wait">
            <motion.img
  key={`mobile-${index}`}
  src={mobileImages[index % mobileImages.length]}
  className="absolute inset-0 w-full h-full object-contain bg-black"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1 }}
/>
          </AnimatePresence>
        </div>

        {/* 💻 DESKTOP CAROUSEL */}
        <div className="hidden md:block absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={`desktop-${index}`}
              src={desktopImages[index % desktopImages.length]}
              className="absolute inset-0 w-full h-full object-contain bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/55 lg:bg-gradient-to-b lg:from-black/70 lg:via-black/40 lg:to-black/70" />
      </section>

      {/* ================= ABOUT ================= */}
      <Section id="about" title="About Us" titleClass="text-[#8b6b2f]">
        <About />
      </Section>

      {/* ================= PROJECTS ================= */}
      <Section id="projects" title="Projects" bg="bg-[#faf7f2]">
        <Projects />
      </Section>

      {/* ================= WHY US ================= */}
      <Section id="whyus" padding="py-14 md:py-16 lg:py-20">
        <WhyUs />
      </Section>

      {/* ================= TESTIMONIALS ================= */}
      <Section id="testimonials" title="Testimonials" bg="bg-[#faf7f2]">
        <Testimonials />
      </Section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="p-0">
        <Contact />
      </section>
    </>
  );
};

export default Home;
