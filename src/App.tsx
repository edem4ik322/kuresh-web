/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  MapPin, 
  Map as MapIcon, 
  Navigation, 
  Compass, 
  ChevronRight, 
  Calendar, 
  Trophy, 
  Award,
  Sparkles,
  ArrowUp
} from "lucide-react";

import Header from "./components/Header";
import AboutSchool from "./components/AboutSchool";
import Disciplines from "./components/Disciplines";
import Documents from "./components/Documents";
import EnrollmentForm from "./components/EnrollmentForm";
import Coaches from "./components/Coaches";
import Footer from "./components/Footer";

import { CONTACT_INFO, NEWS } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mapMode, setMapMode] = useState<"map" | "satellite">("map");

  // Track scroll position to set active navigation section dynamically and show scroll-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ["about", "disciplines", "coaches", "documents", "enroll"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="school-app-wrapper" className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#1E3A8A] selection:text-white scroll-smooth">
      
      {/* Dynamic Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main id="main-content-flow">
        
        {/* About school with Operating Hours */}
        <AboutSchool />

        {/* Disciplines and sports classes */}
        <Disciplines />

        {/* Staff, founders and trainers */}
        <Coaches />

        {/* Documents panel containing OCR summaries of uploaded files and placeholder for .DOC */}
        <Documents />

        {/* Dynamic News ticker / Events banner */}
        <section id="news-section" className="py-20 bg-white text-slate-800 relative border-t border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <span className="text-[#1E3A8A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-150 inline-block font-bold">
                  События & Объявления
                </span>
                <h2 className="text-3xl font-extrabold text-[#1E3A8A] mt-4 tracking-tight">
                  Новости спортивной школы
                </h2>
              </div>
              <p className="text-slate-500 text-sm max-w-md mt-4 md:mt-0 leading-relaxed font-bold">
                Будьте в курсе праздников, соревнований, побед наших воспитанников и расписания мастер-классов в Симферополе.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NEWS.map((item) => (
                <div
                  key={item.id}
                  id={`news-card-${item.id}`}
                  className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-350 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* News thumbnail cover */}
                    <div className="h-48 overflow-hidden relative bg-slate-100">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase py-0.5 px-2.5 rounded-full ${
                        item.category === "event"
                          ? "bg-blue-600 text-white"
                          : item.category === "announcement"
                          ? "bg-orange-500 text-white z-10"
                          : "bg-slate-700 text-white"
                      }`}>
                        {item.category === "event" ? "Турнир" : item.category === "announcement" ? "Важно" : "Пресса"}
                      </span>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <span className="text-[10px] font-bold text-slate-400 block flex items-center gap-1">
                        <Calendar size={10} />
                        {item.date}
                      </span>
                      <h3 className="font-extrabold text-slate-900 text-base tracking-tight leading-snug group-hover:text-[#1E3A8A] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-550 leading-relaxed line-clamp-3 font-medium">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button className="text-xs font-bold text-[#1E3A8A] group-hover:text-blue-800 transition-colors flex items-center gap-1 cursor-pointer">
                      <span>Читать подробнее</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct wizard for child/athlete enrollment */}
        <EnrollmentForm />

        {/* Custom Interactive Map Section */}
        <section id="interactive-map" className="py-20 bg-[#F8FAFC] text-slate-800 relative border-t border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Coordinates Description */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <span className="text-[#1E3A8A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-150 inline-block font-bold">
                    Локация Базы
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#1E3A8A] mt-4 tracking-tight leading-tight">
                    Как нас найти в Симферополе
                  </h2>
                </div>

                <p className="text-slate-650 text-sm leading-relaxed font-bold">
                  Наша центральная спортивная школа расположена на одной из главных магистралей города Симферополь — 
                  <strong> Севастопольская улица, дом 156</strong>. До нас удобно добираться как на личном авто, так и на автобусах или троллейбусах.
                </p>

                <div className="p-5.5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs font-medium">
                  <div className="flex gap-3">
                    <MapPin className="text-[#1E3A8A] shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="font-bold text-slate-900 block">Адрес:</span>
                      <span className="text-slate-600 mt-0.5 block">{CONTACT_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Navigation className="text-[#1E3A8A] shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="font-bold text-slate-900 block">Ориентир:</span>
                      <span className="text-slate-600 mt-0.5 block">Рядом с остановкой общественного транспорта «Улица Севастопольская». Автобусы № 4, 12а, Троллейбусы № 10, 15.</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Compass className="text-[#1E3A8A] shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="font-bold text-slate-900 block">Координаты GPS:</span>
                      <span className="text-orange-600 font-bold mt-0.5 block">44.924823, 34.073427</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Premium Custom Interactive Simulated Vector Map Block */}
              <div className="lg:col-span-8">
                <div id="simulated-map-container" className="h-[400px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative bg-white select-none">
                  
                  {/* Map Canvas Background (Simulating a premium vector slate coordinate grid) */}
                  <div className="absolute inset-0 bg-[#F1F5F9] overflow-hidden font-bold text-[9px] text-slate-400 p-2 leading-none pointer-events-none">
                    {/* Mesh grid patterns */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b8_2px,transparent_2px),linear-gradient(to_bottom,#94a3b8_2px,transparent_2px)] bg-[size:200px_200px] opacity-10" />
                    
                    {/* Simulated city blocks */}
                    <div className="absolute top-[20%] left-[10%] w-[35%] h-[25%] bg-white rounded-lg border border-slate-200 opacity-60" />
                    <div className="absolute top-[10%] right-[10%] w-[40%] h-[30%] bg-white rounded-lg border border-slate-200 opacity-60" />
                    <div className="absolute bottom-[10%] left-[15%] w-[45%] h-[25%] bg-white rounded-lg border border-slate-200 opacity-60" />
                    <div className="absolute bottom-[20%] right-[5%] w-[30%] h-[20%] bg-white rounded-lg border border-slate-200 opacity-60" />

                    {/* Simulated Major Roads (Highway paths) */}
                    <div className="absolute inset-x-0 top-[50%] h-12 bg-white/80 border-y border-slate-200/80 -rotate-6 transform origin-center flex items-center justify-around text-[10px] text-slate-600 font-extrabold uppercase tracking-wider">
                      <span>← Бахчисарай</span>
                      <span>Севастопольская улица</span>
                      <span>Центр Симферополя →</span>
                    </div>
                    <div className="absolute inset-y-0 left-[60%] w-10 bg-white/80 border-x border-slate-250 rotate-12 transform origin-center" />

                    {/* Surrounding landscape tags */}
                    <span className="absolute top-[8%] left-[5%] text-slate-400">квартал Заводское</span>
                    <span className="absolute bottom-[5%] left-[5%] text-slate-400">Парк Шевченко</span>
                    <span className="absolute top-[5%] right-[5%] text-slate-400">ул. Дмитрия Ульянова</span>
                    <span className="absolute bottom-[8%] right-[12%] text-slate-400">ул. Данилова</span>
                  </div>

                  {/* Satellite Mode Fake Photographic Backdrop layer */}
                  {mapMode === "satellite" && (
                    <div className="absolute inset-0 bg-slate-100 pointer-events-none scale-102 transition-all duration-300">
                      <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200"
                        alt="Satellite view of Crimea landscape mockup"
                        className="w-full h-full object-cover opacity-30 filter saturate-50 contrast-125"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
                    </div>
                  )}

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                    <button
                      onClick={() => setMapMode("map")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        mapMode === "map"
                          ? "bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md"
                          : "bg-white text-slate-600 border-slate-200 hover:text-slate-900"
                      }`}
                    >
                      Карта
                    </button>
                    <button
                      onClick={() => setMapMode("satellite")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        mapMode === "satellite"
                          ? "bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md"
                          : "bg-white text-slate-600 border-slate-200 hover:text-slate-900"
                      }`}
                    >
                      Спутник
                    </button>
                  </div>

                  {/* Centered Map Pointer Badge represents the site location */}
                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[70%] z-10 flex flex-col items-center flex-shrink-0">
                    {/* Animated Ripple Effect */}
                    <div className="absolute bottom-1 w-6 h-6 rounded-full bg-blue-500/30 animate-ping" />
                    <div className="absolute bottom-1 w-12 h-12 rounded-full bg-blue-500/10 animate-pulse" />

                    {/* Popover Card */}
                    <div className="bg-white border-2 border-[#1E3A8A] p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce shrink-0 w-64">
                      <div className="p-2.5 bg-[#1E3A8A] text-white rounded-xl shadow-sm">
                        <Trophy size={16} />
                      </div>
                      <div className="min-w-0 text-left">
                        <span className="block text-[10px] font-bold text-orange-600 uppercase tracking-widest leading-none">ГБУ РК «СШ № 1»</span>
                        <span className="block text-[11px] font-bold text-[#1E3A8A] mt-1 truncate">ул. Севастопольская, 156</span>
                        <span className="block text-[9px] text-slate-500 font-bold mt-0.5">Вход со стороны проспекта</span>
                      </div>
                    </div>

                    {/* Pin Point head */}
                    <div className="w-3.5 h-3.5 bg-orange-500 rounded-full border-2 border-white shadow relative -bottom-1" />
                  </div>

                  {/* Map branding footer strip */}
                  <div className="absolute bottom-0 inset-x-0 bg-white border-t border-slate-200 p-3 z-10 flex justify-between items-center text-[10px] font-bold text-slate-400">
                    <span>Симферополь, Севастопольская ул., 156 </span>
                    <span>Масштаб: 1 : 5000</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Styled Comprehensive Footer */}
      <Footer />

      {/* Back to top scroll button standard */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top-button"
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-[#1E3A8A] text-white hover:bg-blue-800 shadow-xl shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer flex items-center justify-center border border-blue-100"
        >
          <ArrowUp size={18} className="font-bold text-white" />
        </button>
      )}

    </div>
  );
}
