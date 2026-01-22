import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import logo from "../../assets/logo.png";

const UserFooter = () => {
  return (
    <footer className="bg-[#2C1810] text-[#f5efe6] pt-16">
      <div className="max-w-7xl mx-auto px-8">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12 pb-14 border-b border-white/10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} className="w-12" alt="logo" />
              <div>
                <h3 className="font-serif tracking-widest text-lg">
                  SHREE AAKAR
                </h3>
                <p className="text-[10px] tracking-[0.3em] text-[#C5A059]">
                  DESIGN STUDIO
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              Crafting architectural and interior spaces that blend culture,
              creativity, and contemporary design.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="tracking-widest text-sm mb-6 text-[#C5A059]">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-[#C5A059] cursor-pointer">Home</li>
              <li className="hover:text-[#C5A059] cursor-pointer">Projects</li>
              <li className="hover:text-[#C5A059] cursor-pointer">About Us</li>
              <li className="hover:text-[#C5A059] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="tracking-widest text-sm mb-6 text-[#C5A059]">
              CONTACT
            </h4>

            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>contact@shreeaakar.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-4 pt-4">
                <a className="hover:text-[#C5A059] cursor-pointer">
                  <Instagram size={18} />
                </a>
                <a className="hover:text-[#C5A059] cursor-pointer">
                  <Facebook size={18} />
                </a>
                <a className="hover:text-[#C5A059] cursor-pointer">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="text-center py-6 text-xs tracking-widest text-white/50">
          © {new Date().getFullYear()} SHREE AAKAR DESIGN STUDIO · ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
