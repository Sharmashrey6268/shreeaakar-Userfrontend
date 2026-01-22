import { motion } from "framer-motion";
import card from "../../assets/card.png";

/* ===== Animation Variants ===== */
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headingVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* BRAND HEADING */}
        <motion.h3
          variants={headingVariant}
          className="font-serif text-3xl md:text-4xl text-[#2C1810] mb-6 leading-tight"
        >
          <span className="text-[#b08d57]">Shree AAKAR  Design Studio</span>{" "}
        </motion.h3>

        {/* PARAGRAPHS */}
        <motion.p
          variants={textVariant}
          className="leading-7 text-[#3a2a1a]"
        >
          is an architecture and interior design studio where spaces are
          shaped with intention and heart. We believe that thoughtful
          design goes beyond appearance—it creates emotion, calm, and
          connection.
        </motion.p>

        <motion.p
          variants={textVariant}
          className="leading-7 text-[#3a2a1a] mt-4"
        >
          We work closely with our clients to transform ideas into
          meaningful environments through careful planning, refined
          elevations, immersive 3D visuals, and interior solutions that
          feel balanced and timeless.
        </motion.p>

        <motion.p
          variants={textVariant}
          className="leading-7 text-[#3a2a1a] mt-4"
        >
          Every space we create is designed to feel lived in, welcoming,
          and deeply connected to the people who inhabit it.
        </motion.p>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        variants={imageVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="relative"
      >
        <img
          src={card}
          className="rounded-2xl shadow-2xl object-cover"
        />

        {/* Golden frame */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-[#b08d57]/40 pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default About;
