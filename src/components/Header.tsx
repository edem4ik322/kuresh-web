import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FEDERATION } from "../data";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "О нас" },
    { id: "goals", label: "Цели" },
    { id: "founders", label: "Учредители" },
    { id: "charter", label: "Устав" },
    { id: "disciplines", label: "Секции" },
    { id: "contacts", label: "Контакты" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0"
            onClick={() => handleNavClick("about")}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0">
              <span className="text-sm font-black">К</span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm font-extrabold tracking-tight text-[#1E3A8A]">
                Къушакъ куреши
              </span>
              <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-semibold leading-none mt-0.5">
                Крымская федерация
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1 flex-shrink-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-all relative py-1.5 px-3 text-sm font-bold whitespace-nowrap cursor-pointer rounded-lg ${
                  activeSection === item.id
                    ? "text-[#1E3A8A] bg-blue-50"
                    : "text-slate-600 hover:text-[#1E3A8A] hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-[#1E3A8A] hover:bg-slate-100 cursor-pointer"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium border-l-4 transition-all cursor-pointer ${
                  activeSection === item.id
                    ? "bg-slate-50 border-[#1E3A8A] text-[#1E3A8A] font-bold"
                    : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
