/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Mail, 
  FileText, 
  CheckCircle, 
  Info, 
  ShieldCheck, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { CONTACT_INFO, OPERATING_SCHEDULE } from "../data";

export default function EnrollmentForm() {
  const getCleanPhone = () => {
    return CONTACT_INFO.phone.replace(/[^0-9+]/g, "");
  };

  return (
    <section id="enroll" className="py-20 bg-[#F8FAFC] text-slate-800 relative">
      {/* Visual background details */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row 1: Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#1E3A8A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-50 border border-blue-150 inline-block">
            Присоединяйтесь к команде
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A8A] tracking-tight">
            Как записаться в Спортивную Школу № 1?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
            Прием заявлений на обучение по всем дисциплинам проводится в течение всего года. Для вашего удобства мы упростили процесс — просто выберите наиболее подходящий способ связи.
          </p>
        </div>

        {/* Row 2: Grid with Phone and Visit options */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Call Us (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-colors" />
            
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 text-[#1E3A8A] rounded-2xl w-fit border border-blue-100 shadow-sm">
                <Phone size={24} />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-[#1E3A8A] tracking-tight">
                  Позвоните нам
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Наш методист подробно расскажет о свободных местах в группах, требованиях к физической подготовке, расписании тренировок и ответит на любые интересующие вопросы касательно программ обучения.
                </p>
              </div>

              {/* Highlight block for phone number */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Телефон приемной комиссии
                </span>
                <a 
                  href={`tel:${getCleanPhone()}`}
                  className="text-2xl font-black text-orange-500 hover:text-orange-600 transition-colors block font-mono"
                >
                  {CONTACT_INFO.phone}
                </a>
                <span className="text-[10px] text-slate-500 font-bold block">
                  Звонки принимаются в рабочее время
                </span>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href={`tel:${getCleanPhone()}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1E3A8A] text-white hover:bg-blue-800 font-extrabold text-xs tracking-wider uppercase rounded-2xl transition-all shadow-md shadow-blue-500/10 cursor-pointer"
              >
                <span>Позвонить прямо сейчас</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Card 2: Visit Us (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Visit Details */}
              <div className="space-y-6">
                <div className="p-4 bg-orange-50 text-orange-500 rounded-2xl w-fit border border-orange-100 shadow-sm">
                  <MapPin size={24} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-[#1E3A8A] tracking-tight">
                    Придите лично
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    Будем рады видеть вас у себя в гостях! Вы сможете воочию осмотреть спортивную базу, залы и конгрессные аудитории, лично познакомиться с тренерами и на месте подать документы.
                  </p>
                </div>

                <div className="bg-orange-500/[0.02] border border-orange-500/10 rounded-2xl p-4 space-y-2">
                  <div className="flex gap-2.5 items-start">
                    <MapPin size={16} className="text-orange-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-slate-900 leading-none">Адрес спортивной базы:</span>
                      <span className="block text-xs font-semibold text-slate-550 mt-1 leading-normal">{CONTACT_INFO.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reception schedule */}
              <div className="space-y-5 bg-slate-50/70 border border-slate-150 p-6 rounded-2xl">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#1E3A8A]" />
                  <span className="text-xs font-extrabold text-[#1E3A8A] uppercase tracking-wider">
                    Часы приема документов
                  </span>
                </div>

                <div className="space-y-2.5">
                  {OPERATING_SCHEDULE.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`flex justify-between items-center text-xs pb-1.5 border-b border-slate-200/60 last:border-0 last:pb-0 ${
                        item.isWeekend ? "text-slate-400" : "text-slate-700"
                      }`}
                    >
                      <span className="font-bold">{item.day}</span>
                      <span className={`font-semibold font-mono text-[11px] ${item.isWeekend ? "text-red-400 font-extrabold" : "text-slate-600"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 mt-6 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/40 -mx-8 -mb-8 p-6 rounded-b-3xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-[#1E3A8A] rounded-xl shrink-0">
                  <Info size={16} />
                </div>
                <p className="text-[11px] font-bold text-slate-500 leading-normal max-w-md">
                  Если вы приедете с готовым пакетом документов, наш методист оформит зачисление в течение 15 минут!
                </p>
              </div>
              <button 
                onClick={() => {
                  const mapElement = document.getElementById("interactive-map");
                  if (mapElement) {
                    mapElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-colors text-xs font-extrabold rounded-xl shadow-sm cursor-pointer shrink-0"
              >
                <span>Показать карту</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* Row 3: Useful Block of Required Documents */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/[0.01] rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-fit border border-emerald-100 shadow-sm">
                <FileText size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-9 border-b border-slate-100 pb-2">
                Документы для зачисления
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Для оформления спортсмена в выбранную секцию, согласно государственному стандарту, рекомендуем подготовить следующий пакет оригиналов или копий документов.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Doc item 1 */}
              <div className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-50/50 transition-colors">
                <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Заявление о приеме</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-semibold">Заполняется на стандартном бланке у нас в приемной у методиста.</p>
                </div>
              </div>

              {/* Doc item 2 */}
              <div className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-50/50 transition-colors">
                <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Медицинский допуск</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-semibold">Справка от врача-педиатра или спортивного врача об отсутствии противопоказаний.</p>
                </div>
              </div>

              {/* Doc item 3 */}
              <div className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-50/50 transition-colors">
                <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Свидетельство о рождении / Паспорт</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-semibold">Копия документа ребенка (или копия паспорта, если исполнилось 14 лет).</p>
                </div>
              </div>

              {/* Doc item 4 */}
              <div className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-50/50 transition-colors">
                <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Паспорт родителя</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-semibold">Для подтверждения представительства несовершеннолетнего при подписании договора.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Row 4: Write on Email */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center p-6 border border-blue-100 bg-blue-50/40 rounded-3xl gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-2xl text-[#1E3A8A]">
              <Mail size={18} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Прием обращений по электронной почте</h4>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">Вы также можете отправить свои вопросы или сканы документов на наш официальный ящик.</p>
            </div>
          </div>
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-950 font-bold text-xs rounded-xl text-white transition-all cursor-pointer block font-mono border border-slate-950"
          >
            {CONTACT_INFO.email}
          </a>
        </div>

      </div>
    </section>
  );
}
