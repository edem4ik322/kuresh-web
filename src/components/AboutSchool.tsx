import { ShieldCheck, Landmark, Award, Target } from "lucide-react";
import { FEDERATION, SPORTS_SCHOOL } from "../data";

export default function AboutSchool() {
  return (
    <section id="about" className="relative pt-28 pb-20 overflow-hidden bg-[#F8FAFC]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[#1E3A8A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-150 inline-block">
            О нас
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1E3A8A] mt-4 tracking-tight leading-tight">
            {FEDERATION.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Крымская федерация национальных видов спорта и борьбы Куреш — официально зарегистрированная общественная организация (ОГРН 1249100015790), созданная для возрождения и развития традиционных крымскотатарских видов спорта.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Федерация объединяет спортсменов, тренеров и энтузиастов национальных единоборств. Под эгидой федерации развивается борьба на поясах «Къушакъ куреши», борьба на лошадях «Авдарма», конный спорт, стрельба из традиционного лука, историческое фехтование и силовые дисциплины.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Тренировочная база расположена в <strong>{SPORTS_SCHOOL.name}</strong> ({SPORTS_SCHOOL.address}), где под руководством опытных тренеров проходят бесплатные занятия для детей и взрослых.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 p-4 rounded-xl bg-white border border-slate-200">
                <ShieldCheck size={20} className="text-[#1E3A8A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Официальный статус</h4>
                  <p className="text-xs text-slate-500 mt-1">Зарегистрирована Минюстом РФ. Включена в ЕГРЮЛ.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-xl bg-white border border-slate-200">
                <Award size={20} className="text-[#1E3A8A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">6 видов спорта</h4>
                  <p className="text-xs text-slate-500 mt-1">От борьбы на поясах до конных дисциплин.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-xl bg-white border border-slate-200">
                <Target size={20} className="text-[#1E3A8A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Соревнования</h4>
                  <p className="text-xs text-slate-500 mt-1">Организация турниров и этно-фестивалей.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-xl bg-white border border-slate-200">
                <Landmark size={20} className="text-[#1E3A8A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Культурное наследие</h4>
                  <p className="text-xs text-slate-500 mt-1">Сохранение традиций крымскотатарского народа.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#1E3A8A] text-white p-6 sm:p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Landmark size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Реквизиты организации</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Полное наименование</span>
                  <p className="text-sm font-bold mt-1 leading-snug">{FEDERATION.fullName}</p>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">ОГРН</span>
                  <p className="text-sm font-bold mt-1 text-orange-300">{FEDERATION.ogrn}</p>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Дата регистрации</span>
                  <p className="text-sm font-bold mt-1">{FEDERATION.registrationDate}</p>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Юридический адрес</span>
                  <p className="text-sm font-bold mt-1">{FEDERATION.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
