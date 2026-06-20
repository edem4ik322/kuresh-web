import { MapPin, Phone, Mail, Landmark } from "lucide-react";
import { FEDERATION, SPORTS_SCHOOL } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#1E3A8A] rounded-xl text-white">
              <Landmark size={20} />
            </div>
            <div>
              <span className="block text-base font-extrabold tracking-tight text-white">
                {FEDERATION.shortName}
              </span>
              <span className="block text-[10px] text-orange-400 font-bold tracking-widest uppercase">
                ОГРН {FEDERATION.ogrn}
              </span>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-slate-400">
            Официально зарегистрированная общественная организация. Тренировки проходят на базе {SPORTS_SCHOOL.name}.
          </p>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
            Навигация
          </h4>
          <ul className="space-y-2">
            {[
              { id: "about", label: "О нас" },
              { id: "goals", label: "Цели и задачи" },
              { id: "founders", label: "Учредители" },
              { id: "charter", label: "Устав" },
              { id: "disciplines", label: "Секции" },
              { id: "contacts", label: "Контакты" },
            ].map((link) => (
              <li key={link.id}>
                <button onClick={() => handleScrollToSection(link.id)} className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left text-sm font-bold">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
            Контакты
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#1E3A8A] mt-0.5 shrink-0" />
              <span className="text-slate-400">{SPORTS_SCHOOL.address}</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-[#1E3A8A] mt-0.5 shrink-0" />
              <a href={`tel:${FEDERATION.phone.replace(/[^0-9+]/g, "")}`} className="text-orange-400 hover:text-white font-bold transition-colors">
                {FEDERATION.phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="text-[#1E3A8A] mt-0.5 shrink-0" />
              <span className="text-slate-400">{FEDERATION.email}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0b111e] py-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-600">
          <span>© {currentYear} {FEDERATION.shortName}</span>
          <span>Сделано для спортсменов Крыма</span>
        </div>
      </div>
    </footer>
  );
}
