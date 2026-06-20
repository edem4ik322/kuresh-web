import { useState, useEffect, type ReactNode } from "react";
import { Shield, Target, Trophy, Users, Heart } from "lucide-react";

import Header from "./components/Header";
import AboutSchool from "./components/AboutSchool";
import Disciplines from "./components/Disciplines";
import Documents from "./components/Documents";
import EnrollmentForm from "./components/EnrollmentForm";
import Coaches from "./components/Coaches";
import Footer from "./components/Footer";

import { GOALS } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "goals", "founders", "charter", "disciplines", "contacts"];
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

  const goalsIcons: Record<string, ReactNode> = {
    ShieldCheck: <Shield size={24} />,
    Trophy: <Trophy size={24} />,
    Users: <Users size={24} />,
    Heart: <Heart size={24} />,
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#1E3A8A] selection:text-white scroll-smooth">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <AboutSchool />

        {/* Goals section */}
        <section id="goals" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-[#1E3A8A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-150 inline-block">
                Миссия
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A] mt-4 tracking-tight">
                Цели и задачи организации
              </h2>
              <p className="text-slate-600 mt-3 text-base leading-relaxed">
                Федерация создана для возрождения, развития и популяризации национальных видов спорта и крымскотатарской борьбы «Къушакъ куреши» на территории Республики Крым.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GOALS.map((goal) => (
                <div key={goal.id} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
                  <div className="p-3 bg-blue-50 text-[#1E3A8A] rounded-xl w-fit border border-blue-100 mb-4">
                    {goalsIcons[goal.iconName] || <Target size={24} />}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{goal.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Coaches />
        <Documents />
        <Disciplines />
        <EnrollmentForm />
      </main>

      <Footer />
    </div>
  );
}
