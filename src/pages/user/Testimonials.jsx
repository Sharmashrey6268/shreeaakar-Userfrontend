import { motion } from "framer-motion";

const testimonials = [
  {
    text:
      "Working with Shree AAKAR Design Studio was an amazing experience. The team truly understood the soul of Nukkad—the warmth, raw vibe, and connection with people. Since the site is surrounded by lush greenery, the design was kept open and simple to let the natural green take the lead. The space now feels alive, welcoming, and exactly how we imagined it.",
    name: "Team Nukkad",
  },
  {
    text:
      "We are extremely happy with the work done by Shree AAKAR Design Studio for Varsha Beauty Academy. The 1000 sq ft space has been planned very thoughtfully to support teaching and hands-on training, making it comfortable and functional for students. Everything was designed within an economy range without compromising on quality.",
    name: "Varsha Lokendra Singh Rajput",
  },
  {
    text:
      "Working with Shree AAKAR was seamless for our boutique bakery, Flourish. The design embraced natural light and earthy tones, letting our fresh bakes shine. It's warm, inviting, and pulls customers back every day.",
    name: "Ashok Kumar Sharma",
  },
];

/* ================= ANIMATION VARIANTS ================= */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Testimonials = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={card}
              className="
                relative bg-white rounded-3xl
                p-6 sm:p-8 md:p-10
                shadow-[0_20px_45px_rgba(139,107,47,0.15)]
                flex flex-col justify-between
              "
            >
              {/* QUOTE */}
              <span className="absolute -top-5 left-6 text-6xl font-serif text-[#8b6b2f]">
                “
              </span>

              {/* TEXT */}
              <p className="mt-6 text-sm sm:text-base md:text-lg italic leading-relaxed text-center text-[#2C1810]">
                {t.text}
              </p>

              {/* DIVIDER */}
              <div className="w-10 h-[2px] mx-auto my-6 bg-[#8b6b2f]" />

              {/* NAME */}
              <p className="text-center text-sm sm:text-base font-medium tracking-wide text-[#2C1810]">
                — {t.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
