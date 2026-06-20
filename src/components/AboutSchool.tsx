/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, Clock, MapPin, Phone, ShieldCheck, Landmark, Users } from "lucide-react";
import { CONTACT_INFO, OPERATING_SCHEDULE } from "../data";

export default function AboutSchool() {
  // Use the generated beautiful arena image or a fallback
  const heroImage = "/src/assets/images/school_hero_banner_1781821673841.jpg";

  return (
    <section id="about" className="relative pt-24 pb-16 overflow-hidden bg-[#F8FAFC] text-slate-800">
      {/* Hero Section Container */}
      <div id="hero-banner-container" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-12">
        <div id="hero-inner" className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 bg-slate-900">
          {/* Background image covering whole banner */}
          <div id="hero-bg-overlay" className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent z-10" />
          <img
            src={heroImage}
            alt="ГБУ РК «Спортивная школа № 1»"
            className="absolute inset-0 w-full h-full object-cover select-none scale-102 hover:scale-100 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />

          {/* Hero text overlay content */}
          <div id="hero-text-content" className="absolute inset-x-0 bottom-0 p-6 sm:p-12 z-20 flex flex-col justify-end h-full">
            <div id="hero-badges" className="flex flex-wrap gap-2 mb-4">
              <span id="badge-gov" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-slate-950 uppercase tracking-wider">
                <Landmark size={12} />
                ГБУ РК
              </span>
              <span id="badge-national" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#1E3A8A] text-white uppercase tracking-wider">
                <ShieldCheck size={12} />
                Национальные Виды Спорта
              </span>
            </div>
            
            <h1 id="hero-main-title" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              {CONTACT_INFO.name}
            </h1>
            
            <p id="hero-main-desc" className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
              Главный центр сохранения и развития традиционного богатства Крыма. 
              Мы воспитываем новое поколение атлетов на фундаменте силы, чести и многовековых национальных традиций борьбы на поясах 
              <span className="text-orange-400 font-bold"> «Къушакъ куреши»</span>, конного спорта и атлетики.
            </p>

            <div id="hero-quick-stats" className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
              <div id="stat-1" className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-orange-400">Симферополь</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-0.5">Локация Базы</span>
              </div>
              <div id="stat-2" className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-orange-400">100%</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-0.5">Бесплатное Обучение</span>
              </div>
              <div id="stat-3" className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-orange-400">8+</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-0.5">Уникальных Секций</span>
              </div>
              <div id="stat-4" className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-orange-400">Минспорт РФ</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-0.5">Гос. Стандарты</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Narrative & Operating Hours Schedule Grid */}
      <div id="about-details-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column: Comprehensive School Info */}
        <div id="about-info-col" className="lg:col-span-7 space-y-8">
          <div>
            <h2 id="about-title-h2" className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] tracking-tight mb-4 flex items-center gap-2">
              <Landmark size={24} className="text-[#1E3A8A]" />
              О государственном учреждении
            </h2>
            <div className="w-20 h-1 bg-[#1E3A8A] rounded-full mb-6" />
          </div>

          <p id="about-p-1" className="text-slate-600 leading-relaxed text-base">
            <strong className="text-slate-900">{CONTACT_INFO.fullStateName}</strong> является ключевой государственной организацией 
            Министерства спорта Республики Крым, осуществляющей бесплатную подготовку в сфере детско-юношеского и профессионального спорта. 
            Школа обеспечивает профессиональный тренировочный процесс, организует сборы, проведение соревнований и присвоение спортивных разрядов.
          </p>

          <p id="about-p-2" className="text-slate-600 leading-relaxed text-base">
            Особое внимание наша школа уделяет развитию традиционных этноспортивных единоборств и дисциплин, узаконенных 
            новым Уставом Крымской федерации национальных видов спорта и борьбы Куреш (зарегистрированным Министерством юстиции в 2024 году).
            Мы верим, что воспитание характера происходит через уважение к корням своего края.
          </p>

          <div id="features-bullets" className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div id="feature-box-1" className="flex gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-800">
              <div className="text-[#1E3A8A]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Государственная Лицензия</h4>
                <p className="text-xs text-slate-500 mt-1">Обучение по официальным программам спортивной подготовки Минспорта РФ.</p>
              </div>
            </div>

            <div id="feature-box-2" className="flex gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-800">
              <div className="text-[#1E3A8A]">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Профессиональный Штаб</h4>
                <p className="text-xs text-slate-500 mt-1">Мастера спорта, заслуженные тренеры и увлеченные исследователи традиций.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Schedule & Quick Contacts */}
        <div id="about-schedule-col" className="lg:col-span-5">
          <div id="schedule-card" className="bg-[#1E3A8A] text-white p-6 sm:p-8 rounded-3xl border border-blue-900/10 shadow-xl relative overflow-hidden">
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-500/5 rounded-full blur-xl" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 text-white rounded-lg">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Режим работы</h3>
                <p className="text-xs text-blue-200 font-mono">Графика приема граждан и тренировок</p>
              </div>
            </div>

            {/* Operating Times Table */}
            <div id="schedule-table" className="space-y-3">
              {OPERATING_SCHEDULE.map((item) => (
                <div
                  key={item.day}
                  id={`schedule-row-${item.day}`}
                  className={`flex justify-between items-center py-2 px-3.5 rounded-lg border transition-all ${
                    item.isWeekend
                      ? "bg-white/5 border-white/5 text-slate-300"
                      : "bg-white/10 border-white/10 text-white"
                  }`}
                >
                  <span className={`text-sm font-semibold ${item.isWeekend ? "text-slate-300" : "text-white"}`}>
                    {item.day}
                  </span>
                  
                  {item.isWeekend ? (
                    <span className="text-[10px] px-2.5 py-0.5 rounded bg-orange-500/10 text-orange-300 border border-orange-500/20 uppercase font-bold">
                      Выходной
                    </span>
                  ) : (
                    <span className="text-xs sm:text-sm font-bold text-orange-300 font-mono">
                      {item.hours}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Callout Location Indicator */}
            <div id="schedule-footer-contacts" className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[9px] text-blue-200 font-bold block">АДРЕС ШКОЛЫ:</span>
                  <span className="text-sm font-bold text-white">{CONTACT_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[9px] text-blue-200 font-bold block">СПРАВОЧНАЯ СЛУЖБА:</span>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-sm font-bold text-orange-300 hover:text-white transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
