import { useState } from "react";
import { Award, Users } from "lucide-react";
import { FOUNDERS, COACHES } from "../data";

export default function Coaches() {
  const [activeTab, setActiveTab] = useState<"founders" | "coaches">("founders");

  const getInitials = (name: string) => {
    return name.split(" ").filter(Boolean).map((w) => w[0]).join("").slice(0, 2);
  };

  return (
    <section id="founders" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[#1E3A8A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-150 inline-block">
            Команда
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A] mt-4 tracking-tight">
            Учредители и тренерский состав
          </h2>
        </div>

        <div className="flex gap-2 mb-10">
          <button
            onClick={() => setActiveTab("founders")}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
              activeTab === "founders"
                ? "bg-[#1E3A8A] text-white border-[#1E3A8A]"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <Users size={16} className="inline mr-1.5" />
            Учредители
          </button>
          <button
            onClick={() => setActiveTab("coaches")}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
              activeTab === "coaches"
                ? "bg-[#1E3A8A] text-white border-[#1E3A8A]"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <Award size={16} className="inline mr-1.5" />
            Тренеры
          </button>
        </div>

        {activeTab === "founders" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDERS.map((founder) => (
              <div key={founder.id} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
                <div className="w-16 h-16 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white font-black text-lg mb-4">
                  {getInitials(founder.name)}
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{founder.name}</h3>
                <p className="text-sm text-orange-600 font-bold mt-1">{founder.role}</p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COACHES.map((coach) => (
              <div key={coach.id} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-base mb-4">
                  {getInitials(coach.name)}
                </div>
                <h3 className="font-bold text-slate-900">{coach.name}</h3>
                <p className="text-xs text-orange-600 font-bold mt-1">{coach.role}</p>
                <p className="text-xs text-slate-500 mt-2">{coach.experience}</p>
                <ul className="mt-3 space-y-1">
                  {coach.achievements.map((a, i) => (
                    <li key={i} className="text-xs text-slate-600 flex gap-1.5 items-start">
                      <span className="w-1 h-1 rounded-full bg-[#1E3A8A] mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
