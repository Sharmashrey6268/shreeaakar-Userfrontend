import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import logo from "../../assets/logo.png";

const Contact = () => {
  const maroon = "#410D1D";
  const gold = "#8b6b2f";
  const year = new Date().getFullYear();

  return (
    <footer className="w-full" style={{ backgroundColor: maroon }}>
      <div className="max-w-7xl mx-auto px-6 py-14 text-white">

        {/* ================= TOP ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* BRAND */}
          <div className="space-y-3">
            <img src={logo} className="w-12" alt="Shree Aakar Logo" />
            <h2 className="font-serif tracking-widest text-xl">
              SHREE AAKAR
            </h2>
            <p
              className="text-[11px] tracking-[0.4em] uppercase"
              style={{ color: gold }}
            >
              Design Studio
            </p>
          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-4 text-[13px] leading-6">
            <p className="flex items-start gap-3">
              <Mail size={16} style={{ color: gold }} />
              <span>
                <strong>Project Inquiries:</strong><br />
                <a
                  href="mailto:shreeaakardesignstudio@gmail.com"
                  className="hover:underline"
                >
                  shreeaakardesignstudio@gmail.com
                </a>
              </span>
            </p>

            <p className="flex items-start gap-3">
              <Phone size={16} style={{ color: gold }} />
              <a
                href="tel:+916266717526"
                className="hover:underline"
              >
                +91 62667 17526
              </a>
            </p>
          </div>

          {/* ADDRESS & HOURS */}
          <div className="space-y-4 text-[13px] leading-6">
            <p className="flex items-start gap-3">
              <MapPin size={16} style={{ color: gold }} />
              <span>
                Khandwa,<br />
                Madhya Pradesh, India – 450001
              </span>
            </p>

            <p className="flex items-start gap-3">
              <Clock size={16} style={{ color: gold }} />
              <span>
                Monday – Friday<br />
                10:00 AM – 6:00 PM
              </span>
            </p>
          </div>
        </div>

        {/* ================= SOCIAL ================= */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.instagram.com/shreeaakar_designstudio?igsh=Mzh0bHF2NXJoNDVx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              size={18}
              className="cursor-pointer hover:opacity-70"
              color={gold}
            />
          </a>

          <a
            href="https://www.facebook.com/share/1FrkYPCbfe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              size={18}
              className="cursor-pointer hover:opacity-70"
              color={gold}
            />
          </a>

          {/* LinkedIn – inactive for now */}
          {/* <Linkedin
            size={18}
            className="cursor-not-allowed opacity-40"
            color={gold}
          /> */}
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-8 h-px bg-white/10" />

        {/* ================= COPYRIGHT ================= */}
        <p className="text-center text-[11px] tracking-[0.25em] uppercase text-white/50">
          © {year} Shree Aakar Design Studio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
