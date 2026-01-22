import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

const sections = [
  { name: "HOME", id: "home" },
  { name: "ABOUT US", id: "about" },
  { name: "PROJECTS", id: "projects" },
  { name: "WHY US", id: "whyus" },
  { name: "TESTIMONIALS", id: "testimonials" },
  { name: "CONTACT", id: "contact" },
];

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* ================= SCROLL SPY ================= */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  /* ================= NAV HANDLER ================= */
  const handleNavClick = (id) => {
    setIsOpen(false);

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-[#faf7f2] py-5"
      } border-b border-[#e6ddcc]/50`}
    >
      <div className="max-w-8xl mx-auto px-3 lg:px-8 flex justify-between items-center">

        {/* LOGO */}
        <div
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={logo} className="w-10" alt="logo" />
          <div>
            <p className="font-serif tracking-widest text-xl font-semibold text-[#2C1810]">
              SHREE AAKAR
            </p>
            <p className="text-[11px] tracking-[0.45em] font-medium text-[#8b6b2f]">
              DESIGN STUDIO
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-xs tracking-[0.15em]">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleNavClick(sec.id)}
              className={`relative font-medium transition ${
                active === sec.id
                  ? "text-[#8b6b2f]"
                  : "text-[#2C1810] hover:text-[#8b6b2f]"
              }`}
            >
              {sec.name}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#8b6b2f] transition-all duration-300 ${
                  active === sec.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-[#2C1810]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-6 space-y-4">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleNavClick(sec.id)}
              className="block text-xs font-medium tracking-widest text-[#2C1810]"
            >
              {sec.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default UserNavbar;
