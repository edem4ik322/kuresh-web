import { useState } from "react";
import * as Icons from "lucide-react";
import { DISCIPLINES } from "../data";
import { Discipline } from "../types";

export default function Disciplines() {
  const [selectedId, setSelectedId] = useState<string>("kuresh");

  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className={className} /> : <Icons.Activity className={className} />;
  };

  return (
    <section id="disciplines" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[#1E3A8A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-150 inline-block">
            Секции
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A] mt-4 tracking-tight">
            Виды спорта
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Все занятия проводятся бесплатно на базе ГБУ РК «Спортивная школа № 1».
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DISCIPLINES.map((sport) => {
              const isSelected = selectedId === sport.id;
              return (
                <div
                  key={sport.id}
                  onClick={() => setSelectedId(sport.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-50 border-[#1E3A8A] shadow-md"
                      : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${
                      isSelected ? "bg-[#1E3A8A] text-white" : "bg-slate-100 text-slate-500"
                    }`}>
                      {renderIcon(sport.iconName)}
                    </div>
                    <div>
                      {sport.originalName && (
                        <span className="block text-[10px] font-semibold tracking-widest text-[#1E3A8A] uppercase">
                          {sport.originalName}
                        </span>
                      )}
                      <h3 className={`font-bold text-sm ${isSelected ? "text-[#1E3A8A]" : "text-slate-900"}`}>
                        {sport.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-3 line-clamp-2">{sport.description}</p>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{sport.ageGroup}</span>
                    <span className="text-[#1E3A8A] font-bold">{isSelected ? "Выбрано" : "Подробнее →"}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            {selectedId ? (
              (() => {
                const sport = DISCIPLINES.find((s) => s.id === selectedId) as Discipline;
                return (
                  <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-slate-200">
                    <div className="flex items-start justify-between border-b border-slate-200 pb-5 mb-5">
                      <div>
                        {sport.originalName && (
                          <span className="inline-block px-2.5 py-0.5 rounded bg-blue-50 text-[#1E3A8A] border border-blue-100 text-[10px] font-bold tracking-widest uppercase mb-1.5">
                            {sport.originalName}
                          </span>
                        )}
                        <h3 className="text-xl font-black text-[#1E3A8A]">{sport.name}</h3>
                      </div>
                      <div className="p-3 bg-white text-[#1E3A8A] rounded-2xl border border-slate-200">
                        {renderIcon(sport.iconName, "w-7 h-7")}
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{sport.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1">Возраст</span>
                        <span className="text-sm font-bold text-slate-900">{sport.ageGroup}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1">Занятия</span>
                        <span className="text-sm font-bold text-slate-900">Бесплатно</span>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-[#1E3A8A] uppercase tracking-widest mb-3">
                        Что дает спорт:
                      </h4>
                      <ul className="space-y-2">
                        {sport.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-5 border-t border-slate-200">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Тренеры: </span>
                      <span className="text-xs font-bold text-orange-600 ml-1">{sport.coaches.join(", ")}</span>
                    </div>
                  </div>
                );
              })()
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
