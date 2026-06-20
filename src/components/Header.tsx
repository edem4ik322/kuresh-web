/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X, Trophy } from "lucide-react";
import { CONTACT_INFO } from "../data";

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
    { id: "about", label: "О школе" },
    { id: "disciplines", label: "Секции" },
    { id: "coaches", label: "Тренеры" },
    { id: "documents", label: "Документы" },
    { id: "enroll", label: "Запись в школу" },
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
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <div
            id="header-logo-container"
            className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0"
            onClick={() => handleNavClick("about")}
          >
            <div id="school-crest-icon" className="w-10 h-10 sm:w-11 sm:h-11 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0">
              <Trophy size={18} className="animate-pulse" />
            </div>
            <div>
              <span id="school-logo-title" className="block text-sm sm:text-base lg:text-sm xl:text-lg font-extrabold tracking-tight text-[#1E3A8A] whitespace-nowrap">
                ГБУ РК «Спортивная школа № 1»
              </span>
              <span id="school-logo-subtitle" className="block text-[10px] text-slate-500 uppercase tracking-widest font-semibold leading-none mt-0.5">
                Симферополь, Крым
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center lg:gap-1.5 xl:gap-4.5 flex-shrink-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`transition-all relative py-1.5 px-0.5 cursor-pointer lg:text-xs xl:text-sm font-bold whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-[#1E3A8A] font-extrabold"
                    : "text-slate-600 hover:text-[#1E3A8A]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div
                    id={`active-nav-indicator-${item.id}`}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E3A8A] rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Contact Details (Desktop) */}
          <div id="header-contacts-desktop" className="hidden lg:flex items-center lg:gap-2 xl:gap-4 flex-shrink-0">
            <a
              id="header-phone-link"
              href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 text-[#1E3A8A] hover:text-blue-800 lg:text-xs xl:text-sm font-bold transition-colors border-r border-slate-200 lg:pr-3 xl:pr-5 whitespace-nowrap flex-shrink-0"
            >
              <Phone size={14} className="text-[#1E3A8A] flex-shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <div id="header-address-tag" className="hidden xl:flex items-center gap-1.5 text-slate-500 text-xs font-semibold whitespace-nowrap">
              <MapPin size={14} className="text-slate-400 flex-shrink-0" />
              <span>ул. Севастопольская, 156</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div id="mobile-menu-trigger" className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              id="mobile-nav-toggle"
              className="p-2 rounded-lg text-slate-600 hover:text-[#1E3A8A] hover:bg-slate-100 focus:outline-none cursor-pointer"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div id="mobile-nav-panel" className="lg:hidden bg-white border-b border-slate-200 animate-fadeIn shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
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
            <div id="mobile-nav-contacts" className="border-t border-slate-200 pt-4 pb-2 px-4 space-y-3">
              <a
                id="mobile-nav-phone-link"
                href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 text-[#1E3A8A] text-sm py-1.5"
              >
                <Phone size={18} className="text-[#1E3A8A]" />
                <span className="font-bold">{CONTACT_INFO.phone}</span>
              </a>
              <div id="mobile-nav-address-tag" className="flex items-center gap-3 text-slate-500 text-xs font-semibold">
                <MapPin size={16} className="text-slate-400" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
