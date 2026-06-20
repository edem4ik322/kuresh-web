import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { FEDERATION, SPORTS_SCHOOL } from "../data";

export default function EnrollmentForm() {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[#1E3A8A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-150 inline-block">
            Контакты
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A] mt-4 tracking-tight">
            Свяжитесь с нами
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
            <div className="p-3 bg-blue-50 text-[#1E3A8A] rounded-xl w-fit border border-blue-100 mb-4">
              <Phone size={20} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Телефон</h3>
            <a href={`tel:${FEDERATION.phone.replace(/[^0-9+]/g, "")}`} className="text-lg font-bold text-orange-600 hover:text-orange-700 transition-colors block">
              {FEDERATION.phone}
            </a>
            <p className="text-xs text-slate-500 mt-1">Прием звонков в рабочее время</p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
            <div className="p-3 bg-orange-50 text-orange-500 rounded-xl w-fit border border-orange-100 mb-4">
              <MapPin size={20} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Адрес базы</h3>
            <p className="text-sm font-bold text-slate-700">{SPORTS_SCHOOL.address}</p>
            <p className="text-xs text-slate-500 mt-1">{SPORTS_SCHOOL.name}</p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl w-fit border border-green-100 mb-4">
              <Mail size={20} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Электронная почта</h3>
            <a href={`mailto:${FEDERATION.email}`} className="text-sm font-bold text-[#1E3A8A] hover:text-blue-800 transition-colors block break-all">
              {FEDERATION.email}
            </a>
          </div>
        </div>

        <div className="mt-8 bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <Clock size={20} className="text-[#1E3A8A]" />
            <h3 className="font-bold text-slate-900">Режим работы</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
              <span className="block text-xs font-bold text-slate-900">Пн–Пт</span>
              <span className="block text-sm font-bold text-orange-600 mt-1">09:00 – 18:00</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
              <span className="block text-xs font-bold text-slate-900">Сб</span>
              <span className="block text-sm text-slate-400 mt-1">Выходной</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
              <span className="block text-xs font-bold text-slate-900">Вс</span>
              <span className="block text-sm text-slate-400 mt-1">Выходной</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
              <span className="block text-xs font-bold text-slate-900">Обед</span>
              <span className="block text-sm font-bold text-orange-600 mt-1">13:00 – 14:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
