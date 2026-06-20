/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Landmark, ShieldCheck, Heart } from "lucide-react";
import { CONTACT_INFO, OPERATING_SCHEDULE } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="app-footer" className="bg-[#0F172A] text-slate-405 font-sans border-t border-slate-800">
      
      {/* Upper Grid Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Col 1: Brand & State affiliation banner (4 cols) */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#1E3A8A] rounded-xl text-white">
              <Landmark size={20} />
            </div>
            <div>
              <span className="block text-base font-extrabold tracking-tight text-white uppercase">
                ГБУ РК «Спортивная школа № 1»
              </span>
              <span className="block text-[10px] text-orange-400 font-bold tracking-widest uppercase">
                г. Симферополь
              </span>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-slate-400 font-medium">
            Государственное бюджетное учреждение Республики Крым по подготовке спортивного резерва и развитию национальных видов спорта. 
            Деятельность координируется Министерством спорта Республики Крым.
          </p>

          <div className="flex gap-2.5 pt-2">
            <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400">
              <ShieldCheck size={11} className="text-orange-500" />
              ОГРН 1249100015790
            </span>
          </div>
        </div>

        {/* Col 2: Navigation shortcuts (3 cols) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
            Быстрая навигация
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {[
              { id: "about", label: "О школе и Режим работы" },
              { id: "disciplines", label: "Спортивные Секции" },
              { id: "coaches", label: "Тренерский Штаб" },
              { id: "documents", label: "Официальные Документы" },
              { id: "enroll", label: "Подать заявку онлайн" },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScrollToSection(link.id)}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left font-bold"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Direct Contacts section (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
            Контакты и Координаты
          </h4>

          <div className="space-y-3.5 text-xs sm:text-sm">
            
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#1E3A8A] mt-0.5 shrink-0" />
              <div>
                <span className="block font-bold text-white">Адрес спортивной базы:</span>
                <span className="text-slate-400 block mt-0.5 font-medium">{CONTACT_INFO.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={16} className="text-[#1E3A8A] mt-0.5 shrink-0" />
              <div>
                <span className="block font-bold text-white">Горячий контактный телефон:</span>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-orange-400 hover:text-white font-black block mt-0.5 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={16} className="text-[#1E3A8A] mt-0.5 shrink-0" />
              <div>
                <span className="block font-bold text-white">Электронная приёмная:</span>
                <span className="block text-slate-400 mt-0.5 font-medium font-mono">
                  {CONTACT_INFO.email}
                </span>
                <span className="block text-[10px] text-slate-500 font-bold font-mono">
                  Резервный адрес (ЕГРЮЛ): {CONTACT_INFO.additionalEmailInDocs}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Legal Mention Area */}
      <div className="bg-[#0b111e] py-6 border-t border-slate-800 text-[10px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500">
          <div className="text-center sm:text-left font-bold">
            <span>© 2014 – {currentYear} {CONTACT_INFO.fullStateName}. Все права защищены.</span>
            <span className="block mt-0.5 text-[10px] text-slate-650 font-bold font-mono">
              Регистрационные документы соответствуют требованиям Министерства юстиции РФ и ФНС по РК
            </span>
          </div>

          <div className="flex items-center gap-1 font-mono text-[9px] text-slate-600">
            <span>Сделано с</span>
            <Heart size={10} className="text-orange-500/60 animate-pulse fill-orange-500/20" />
            <span>для спортсменов Крыма</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
