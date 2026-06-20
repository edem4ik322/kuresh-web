/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Award, GraduationCap, Trophy, ChevronRight } from "lucide-react";
import { COACHES } from "../data";

export default function Coaches() {
  const [activeCoachId, setActiveCoachId] = useState<string>("yagyaev");

  const activeCoach = COACHES.find((c) => c.id === activeCoachId) || COACHES[0];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .filter((word) => word.length > 0)
      .map((word) => word[0])
      .join("")
      .substring(0, 2);
  };

  return (
    <section id="coaches" className="py-20 bg-[#F8FAFC] text-slate-800 relative">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E3A8A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-150 inline-block">
            Наши Наставники
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A] mt-4 tracking-tight">
            Тренерский и Административный штаб
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Наши тренеры — действующие мастера спорта, сертифицированные судьи и специалисты высокого уровня, 
            несущие личную ответственность за развитие потенциала каждого ребенка.
          </p>
        </div>

        {/* Master-Detail Split Layout for Coaches */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* List of Coach selector tiles (5 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2 mb-2">Список персонала:</span>
            {COACHES.map((coach) => {
              const isActive = activeCoachId === coach.id;
              return (
                <div
                  key={coach.id}
                  id={`coach-selector-tile-${coach.id}`}
                  onClick={() => setActiveCoachId(coach.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? "bg-white border-[#1E3A8A] shadow-md text-[#1E3A8A]"
                      : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-350"
                  }`}
                >
                  {/* Styled circular monogram badge instead of image */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-sm shrink-0 border transition-colors ${
                    isActive 
                      ? "bg-blue-50 border-blue-200 text-[#1E3A8A]" 
                      : "bg-slate-50 border-slate-200 text-slate-600"
                  }`}>
                    {getInitials(coach.name)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className={`font-bold text-sm truncate ${isActive ? "text-[#1E3A8A]" : "text-slate-900"}`}>{coach.name}</h4>
                    <p className="text-xs text-slate-500 truncate mt-0.5">{coach.role}</p>
                  </div>

                  <ChevronRight
                    size={16}
                    className={`text-slate-400 transition-transform ${isActive ? "text-[#1E3A8A] translate-x-1" : ""}`}
                  />
                </div>
              );
            })}
          </div>

          {/* Coach Detail Inspector Display Box (8 cols) */}
          <div className="lg:col-span-8">
            <div
              id="coach-details-card"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center md:items-start h-full text-slate-800"
            >
              {/* Background gradient block */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Large Portrait Mock Frame - Stylized Monogram Medallion instead of picture */}
              <div className="w-full sm:w-2/3 md:w-1/3 shrink-0 relative">
                <div className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center p-6 text-center shadow-inner relative overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#1E3A8A]/5 rounded-full blur-xl" />
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-500/5 rounded-full blur-xl" />
                  
                  <div className="w-20 h-20 rounded-full bg-white border border-blue-150 flex items-center justify-center shadow-md text-2xl font-black text-[#1E3A8A] mb-4">
                    {getInitials(activeCoach.name)}
                  </div>
                  
                  <span className="font-bold text-[10px] uppercase tracking-wider text-[#1E3A8A] block px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                    Реестр СШ №1
                  </span>
                </div>
                {/* Visual experience badge below */}
                <div className="mt-3 bg-[#1E3A8A]/95 px-3 py-2.5 rounded-xl border border-blue-900/10 text-center shadow-sm">
                  <span className="block text-[9px] font-bold text-blue-200 uppercase tracking-widest">ОПЫТ ПРЕПОДАВАНИЯ:</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">{activeCoach.experience}</span>
                </div>
              </div>

              {/* Info columns */}
              <div className="flex-1 space-y-5 w-full">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1E3A8A] tracking-tight leading-none">
                    {activeCoach.name}
                  </h3>
                  <p className="text-sm text-orange-600 font-bold mt-2">
                    {activeCoach.role}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-2">
                    <Trophy size={14} className="text-[#1E3A8A]" />
                    Ключевые достижения и заслуги:
                  </h4>

                  <ul className="space-y-3">
                    {activeCoach.achievements.map((ach, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <div className="p-1 rounded bg-[#1E3A8A]/5 text-[#1E3A8A] shrink-0 mt-0.5">
                          <Award size={12} />
                        </div>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footnote matching the provided PDF files */}
                {activeCoach.id === "yagyaev" && (
                  <div className="p-3 bg-orange-500/5 rounded-xl border border-orange-500/10 text-[11px] text-orange-700 leading-relaxed flex gap-2">
                    <GraduationCap size={16} className="shrink-0 mt-0.5 text-orange-600" />
                    <span>
                      Официально представляет интересы Крымской федерации национальных спортивных видов борьбы в государственных органах согласно Листу записи ЕГРЮЛ (ОГРН 1249100015790).
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
