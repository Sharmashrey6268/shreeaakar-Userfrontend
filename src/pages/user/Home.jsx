// import { useState, useEffect, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// import UserNavbar from "../../components/user/UserNavbar";
// import About from "./About";
// import Projects from "./Projects";
// import Testimonials from "./Testimonials";
// import Contact from "./Contact";
// import WhyUs from "./WhyUs";

// /* ================= HERO IMAGES ================= */
// // Desktop images
// import hero1 from "../../assets/hero/hero1.png";
// import hero2 from "../../assets/hero/hero2.png";
// import hero4 from "../../assets/hero/hero4.jpeg";
// import hero5 from "../../assets/hero/hero5.jpeg";
// import hero6 from "../../assets/hero/hero6.jpeg";
// import hero7 from "../../assets/hero/hero7.jpeg";
// import hero8 from "../../assets/hero/hero8.jpeg";
// import hero9 from "../../assets/hero/hero9.jpeg";

// // Mobile images
// import hero1mobile from "../../assets/hero/hero1-mobile.jpeg";
// import hero2mobile from "../../assets/hero/hero2-mobile.jpeg";
// import hero3mobile from "../../assets/hero/hero3-mobile.jpeg";

// const desktopImages = [
//   hero1,
//   hero4,
//   hero5,
//   hero6,
//   hero7,
//   hero8,
//   hero9,
// ];

// const mobileImages = [
//   hero1mobile,
//   hero2mobile,
//   hero3mobile,
//   hero9,
// ];

// /* ================= REUSABLE SECTION ================= */
// const Section = ({
//   id,
//   title,
//   bg = "bg-white",
//   titleClass = "",
//   padding = "py-16 md:py-20 lg:py-24",
//   children,
// }) => (
//   <section id={id} className={`${bg} ${padding} px-4 sm:px-6`}>
//     <div className="max-w-7xl mx-auto text-center">
//       {title && (
//         <h2
//           className={`font-serif text-2xl sm:text-3xl md:text-4xl mb-10 ${titleClass}`}
//         >
//           {title}
//         </h2>
//       )}
//       {children}
//     </div>
//   </section>
// );

// const Home = () => {
//   const [index, setIndex] = useState(0);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const hasHandledScroll = useRef(false); // 🔥 IMPORTANT

//   /* ================= HERO CAROUSEL ================= */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => prev + 1);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);

//   /* ================= SCROLL HANDLING (FIXED) ================= */
//   useEffect(() => {
//     // prevent running multiple times
//     if (hasHandledScroll.current) return;

//     // Case 1: ProjectDetail se navigation ke through aaye ho
//     if (location.state?.scrollTo) {
//       const el = document.getElementById(location.state.scrollTo);

//       if (el) {
//         const yOffset = -100; // navbar height
//         const y =
//           el.getBoundingClientRect().top +
//           window.pageYOffset +
//           yOffset;

//         setTimeout(() => {
//           window.scrollTo({ top: y, behavior: "smooth" });

//           // 🔥 VERY IMPORTANT: state CLEAR karo
//           navigate("/", { replace: true, state: null });
//         }, 200);
//       }
//     }
//     // Case 2: Normal visit / refresh → TOP
//     else {
//       window.scrollTo({ top: 0, behavior: "auto" });
//     }

//     hasHandledScroll.current = true;
//   }, [location.state, navigate]);

//   return (
//     <>
//       <UserNavbar />

//       {/* ================= HERO ================= */}
//      {/* ================= HERO ================= */}
// <section
//   id="home"
//   className="relative overflow-hidden h-[60vh] sm:h-[70vh] lg:h-screen bg-black"
// >
//   {/* 📱 MOBILE */}
//   {/* 📱 MOBILE HERO (NO BG, FULL IMAGE) */}
// <div className="md:hidden w-full">
//   <AnimatePresence mode="wait">
//     <motion.img
//       key={`mobile-${index}`}
//       src={mobileImages[index % mobileImages.length]}
//       className="
//         w-full
//         max-h-[85vh]
//         object-contain
//         mx-auto
//       "
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.8 }}
//     />
//   </AnimatePresence>
// </div>


//   {/* 💻 DESKTOP */}
//   <div className="hidden md:block absolute inset-0">
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={`desktop-${index}`}
//         className="absolute inset-0"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* 🔥 BLURRED BACKGROUND */}
//         <img
//           src={desktopImages[index % desktopImages.length]}
//           className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60"
//         />

//         {/* ✅ MAIN IMAGE (FULL, NO CROP) */}
//         <img
//           src={desktopImages[index % desktopImages.length]}
//           className="relative z-10 w-full h-full object-contain"
//         />
//       </motion.div>
//     </AnimatePresence>
//   </div>

//   {/* DARK OVERLAY */}
//   <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-b lg:from-black/50 lg:via-black/30 lg:to-black/60" />
// </section>


//       {/* ================= ABOUT ================= */}
//       <Section id="about" title="About Us" titleClass="text-[#8b6b2f]">
//         <About />
//       </Section>

//       {/* ================= PROJECTS ================= */}
//       <Section id="projects" title="Projects" bg="bg-[#faf7f2]">
//         <Projects />
//       </Section>

//       {/* ================= WHY US ================= */}
//       <Section id="whyus" padding="py-14 md:py-16 lg:py-20">
//         <WhyUs />
//       </Section>

//       {/* ================= TESTIMONIALS ================= */}
//       <Section id="testimonials" title="Testimonials" bg="bg-[#faf7f2]">
//         <Testimonials />
//       </Section>

//       {/* ================= CONTACT ================= */}
//       <section id="contact" className="p-0">
//         <Contact />
//       </section>
//     </>
//   );
// };

// export default Home;








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
import hero1 from "../../assets/hero/hero1.png";
import hero4 from "../../assets/hero/hero4.jpeg";
import hero5 from "../../assets/hero/hero5.jpeg";
import hero6 from "../../assets/hero/hero6.jpeg";
import hero7 from "../../assets/hero/hero7.jpeg";
import hero9 from "../../assets/hero/hero9.jpeg";

import hero1mobile from "../../assets/hero/hero1-mobile.jpeg";
import heromobile from "../../assets/hero/heromobile.jpg";
import hero2mobile from "../../assets/hero/hero2-mobile.jpeg";
import hero3mobile from "../../assets/hero/hero3-mobile.jpeg";

const desktopImages = [hero1, hero4, hero5, hero7, hero6,];
const mobileImages = [heromobile,hero1mobile, hero2mobile, hero3mobile, hero9,];

const FadeInSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const hasHandledScroll = useRef(false);

  const SLIDE_DURATION = 4000;

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress((elapsed / SLIDE_DURATION) * 100);
      
      if (elapsed >= SLIDE_DURATION) {
        setIndex((prev) => (prev + 1) % desktopImages.length);
        setProgress(0);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [index]);

  useEffect(() => {
    if (hasHandledScroll.current) return;
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          navigate("/", { replace: true, state: null });
        }, 200);
      }
    }
    hasHandledScroll.current = true;
  }, [location.state, navigate]);

  return (
    <div className="bg-[#fcfaf7] overflow-x-hidden">
      <UserNavbar />

      {/* ================= ULTRA-CLEAN HERO (ONLY IMAGE) ================= */}
      <section id="home" className="relative pt-20 md:pt-24 pb-8 px-4 md:px-12 max-w-[1600px] mx-auto">
        
        <div className="relative w-full overflow-hidden bg-[#ebe8e4] rounded-sm">
          {/* Mobile: 4/5 Ratio | Desktop: 21/9 Cinematic Ratio */}
          <div className="aspect-[4/5] md:aspect-[21/9] w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <picture>
                  <source media="(max-width: 768px)" srcSet={mobileImages[index % mobileImages.length] || desktopImages[index]} />
                  <img
                    src={desktopImages[index]}
                    alt="Shree Aakar Architecture"
                    className="w-full h-full object-cover object-top"
                  />
                </picture>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicator (Thin Gold Line) */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black/5 z-20">
            <motion.div 
              key={index}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: SLIDE_DURATION/1000, ease: "linear" }}
              className="h-full bg-[#c5a358]"
            />
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTIONS ================= */}
      
      <FadeInSection>
        <section id="about" className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* "The Studio" removed as requested */}
            <h2 className="font-serif text-4xl md:text-4xl mb-12 text-[#b08d57]">About us</h2>
            <About />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="projects" className="bg-[#fcfaf7] py-20 md:py-24 px-4 border-y border-black/[0.01]">
          <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-4xl mb-12 text-[#b08d57]">Our Projects</h2>
            <Projects />
          </div>
        </section>
      </FadeInSection>

      <section id="whyus">
        <WhyUs />
      </section>

      <FadeInSection>
        <section id="testimonials" className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="font-serif text-4xl md:text-4xl mb-12 text-[#b08d57]">Testimonials</h2>
            <Testimonials />
          </div>
        </section>
      </FadeInSection>

      <section id="contact" className="p-0">
        <Contact />
      </section>
    </div>
  );
};

export default Home;