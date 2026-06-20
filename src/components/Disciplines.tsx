/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import * as Icons from "lucide-react";
import { DISCIPLINES } from "../data";
import { Discipline } from "../types";

export default function Disciplines() {
  const [selectedId, setSelectedId] = useState<string | null>("kuresh");

  // Helper to dynamically render a Lucide icon safely
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.Activity className={className} />;
  };

  return (
    <section id="disciplines" className="py-20 bg-white text-slate-800 relative">
      {/* Decorative patterns */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E3A8A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-150 inline-block">
            Секции & Направления
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A] mt-4 tracking-tight">
            Чему мы обучаем
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Мы объединили классические спортивные стандарты ОФП и уникальный каталог традиционных 
            крымских воинских увлечений. Все занятия бесплатны для прошедших отбор воспитанников.
          </p>
        </div>

        {/* Dynamic Interactive Layout: Left is grid of cards, Right is detail inspector preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List/Grid of Cards (8 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DISCIPLINES.map((sport) => {
              const isSelected = selectedId === sport.id;
              return (
                <div
                  key={sport.id}
                  id={`discipline-card-${sport.id}`}
                  onClick={() => setSelectedId(sport.id)}
                  className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isSelected
                      ? "bg-slate-50 border-[#1E3A8A] shadow-lg shadow-blue-500/5"
                      : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-350"
                  }`}
                >
                  {/* Subtle active state decoration */}
                  {isSelected && (
                    <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/10 rounded-bl-3xl flex items-center justify-center border-l border-b border-[#1E3A8A]/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] animate-ping" />
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl transition-all ${
                        isSelected
                          ? "bg-[#1E3A8A] text-white shadow-lg shadow-blue-500/20"
                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700"
                      }`}
                    >
                      {renderIcon(sport.iconName, "w-6 h-6")}
                    </div>
                    <div>
                      {sport.originalName && (
                        <span className="block text-[10px] font-semibold tracking-widest text-[#1E3A8A] uppercase">
                          {sport.originalName}
                        </span>
                      )}
                      <h3 className={`font-bold transition-colors text-sm sm:text-base ${
                        isSelected ? "text-[#1E3A8A]" : "text-slate-900 group-hover:text-[#1E3A8A]"
                      }`}>
                        {sport.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mt-4 line-clamp-2 leading-relaxed">
                    {sport.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1">
                      <Icons.Target size={12} className="text-orange-500" />
                      {sport.ageGroup}
                    </span>
                    <span className="text-[#1E3A8A] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Подробнее →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Details Inspector (5 cols) - Sticky panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            {selectedId ? (
              (() => {
                const sport = DISCIPLINES.find((s) => s.id === selectedId) as Discipline;
                return (
                  <div
                    id="discipline-inspector-active"
                    className="bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden animate-slideUp text-slate-800"
                  >
                    {/* Background visual cue representing the specific sport */}
                    <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex items-start justify-between border-b border-slate-200 pb-5 mb-5">
                      <div>
                        {sport.originalName && (
                          <span className="inline-block px-2.5 py-0.5 rounded bg-blue-50 text-[#1E3A8A] border border-blue-100 text-[10px] font-bold tracking-widest uppercase mb-1.5">
                            {sport.originalName}
                          </span>
                        )}
                        <h3 className="text-xl sm:text-2xl font-black text-[#1E3A8A] tracking-tight">
                          {sport.name}
                        </h3>
                      </div>
                      <div className="p-3 bg-white text-[#1E3A8A] rounded-2xl border border-slate-200 shadow-sm">
                        {renderIcon(sport.iconName, "w-7 h-7")}
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {sport.description}
                    </p>

                    {/* Metadata boxes */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="block text:[9px] text-slate-400 font-bold tracking-wider uppercase mb-1">Возраст приема:</span>
                        <span className="text-xs sm:text-sm font-bold text-slate-900">{sport.ageGroup}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="block text:[9px] text-slate-400 font-bold tracking-wider uppercase mb-1">Форма занятий:</span>
                        <span className="text-xs sm:text-sm font-bold text-slate-900">Бесплатно</span>
                      </div>
                    </div>

                    {/* Benefits of taking this class */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-[#1E3A8A] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                        <Icons.CheckCircle size={14} className="text-[#1E3A8A]" />
                        Чему научится спортсмен:
                      </h4>
                      <ul className="space-y-2">
                        {sport.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-600 leading-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Coaches list for the class */}
                    <div className="pt-5 border-t border-slate-200 flex items-center gap-3">
                      <div className="p-1 px-2.5 rounded bg-white border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wider shadow-sm">
                        Тренеры секции
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs font-bold text-orange-600">
                        {sport.coaches.join(", ")}
                      </div>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div id="discipline-inspector-empty" className="bg-white p-8 rounded-3xl border border-dashed border-slate-305 text-center text-slate-400 py-24">
                <Icons.Sparkles className="mx-auto w-10 h-10 mb-3 text-slate-300 animate-pulse" />
                <p className="text-sm font-medium leading-relaxed">Выберите спортивное направление слева для детального ознакомления с программой обучения</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
