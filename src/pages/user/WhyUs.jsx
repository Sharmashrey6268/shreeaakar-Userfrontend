import { motion } from "framer-motion";
import {
  FaAssistiveListeningSystems,
  FaDraftingCompass,
  FaHammer,
  FaRegFileAlt,
} from "react-icons/fa";

const simpleProcess = [
  {
    title: "Listen",
    desc: "We begin by understanding your vision and how you want to use your space.",
    icon: <FaAssistiveListeningSystems />,
  },
  {
    title: "Design",
    desc: "We turn ideas into clear plans, drawings, and detailed 3D visuals.",
    icon: <FaDraftingCompass />,
  },
  {
    title: "Create",
    desc: "We bring the design to life with care, creating balanced and welcoming spaces.",
    icon: <FaHammer />,
  },
  {
    title: "Briefing",
    desc: "We begin with an exhaustive questionnaire to fully understand the client’s needs.",
    icon: <FaRegFileAlt />,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyUs = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">

      {/* TITLE */}
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="
          font-serif
          text-2xl
          md:text-3xl
          text-[#2C1810]
          mb-12
          md:mb-16
          text-center
        "
      >
        Our Process
      </motion.h3>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-12
          max-w-7xl
          mx-auto
        "
      >
        {simpleProcess.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariant}
            className="
              text-center
              px-4
              sm:px-6
            "
          >
            {/* ICON */}
            <div
              className="
                flex
                justify-center
                mb-5
                text-3xl
                md:text-4xl
                text-[#b08d57]
              "
            >
              {item.icon}
            </div>

            {/* TITLE */}
            <h4
              className="
                font-serif
                text-xl
                md:text-2xl
                text-[#2C1810]
                mb-3
              "
            >
              {item.title}
            </h4>

            {/* DESC */}
            <p
              className="
                text-gray-600
                text-sm
                leading-relaxed
                max-w-xs
                mx-auto
              "
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
