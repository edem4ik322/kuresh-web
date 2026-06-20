import { useState } from "react";
import { FileText, Download, Eye, EyeOff, BookOpen } from "lucide-react";
import { APP_DOCUMENTS } from "../data";
import type { AppDocument } from "../types";

function getDownloadUrl(doc: AppDocument): string | undefined {
  if (doc.downloadUrl && !doc.isPlaceholderUrl) return doc.downloadUrl;
  return undefined;
}

export default function Documents() {
  const [previewDoc, setPreviewDoc] = useState<AppDocument | null>(null);

  const mainCharter = APP_DOCUMENTS[0];

  return (
    <section id="charter" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[#1E3A8A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-150 inline-block">
            Документы
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A] mt-4 tracking-tight">
            Главный устав и учредительные документы
          </h2>
        </div>

        {/* Featured main charter */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#1E3A8A] shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <BookOpen size={32} className="text-[#1E3A8A]" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Основной документ</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E3A8A] mt-1">{mainCharter.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{mainCharter.subtitle}</p>
              <p className="text-xs text-slate-400 mt-2">{mainCharter.date} | {mainCharter.number}</p>
              <div className="mt-4 space-y-1">
                {mainCharter.summary.map((s, i) => (
                  <p key={i} className="text-sm text-slate-600 flex gap-2">
                    <span className="text-[#1E3A8A] font-bold">—</span>
                    {s}
                  </p>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setPreviewDoc(mainCharter)}
                  className="px-5 py-2.5 bg-[#1E3A8A] text-white rounded-xl text-sm font-bold hover:bg-blue-800 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Eye size={16} />
                  Читать устав
                </button>
                {getDownloadUrl(mainCharter) && (
                  <a
                    href={getDownloadUrl(mainCharter)}
                    download
                    className="px-5 py-2.5 bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors flex items-center gap-2"
                  >
                    <Download size={16} />
                    Скачать PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Other documents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {APP_DOCUMENTS.slice(1).map((doc) => (
            <div key={doc.id} className="bg-white p-5 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className={`p-3 rounded-xl ${
                  doc.docType === "doc" ? "bg-blue-50 text-[#1E3A8A] border border-blue-100" :
                  doc.docType === "pdf" ? "bg-red-50 text-red-600 border border-red-100" :
                  "bg-green-50 text-green-600 border border-green-100"
                }`}>
                  <FileText size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase py-0.5 px-2.5 rounded-full bg-slate-100 text-slate-500">
                  .{doc.docType.toUpperCase()}
                </span>
              </div>

              <span className="text-[10px] font-bold text-slate-400">{doc.date}</span>
              <h4 className="font-bold text-slate-900 text-sm mt-1">{doc.title}</h4>
              <p className="text-xs text-slate-500 mt-1">{doc.subtitle}</p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex gap-2">
                <button
                  onClick={() => setPreviewDoc(doc)}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors cursor-pointer border border-slate-200 flex items-center justify-center gap-1"
                >
                  <Eye size={12} />
                  Просмотр
                </button>
                {getDownloadUrl(doc) && (
                  <a
                    href={getDownloadUrl(doc)}
                    download
                    className="px-3 py-2 rounded-xl bg-[#1E3A8A]/10 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Download size={12} />
                    Скачать
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Preview modal */}
        {previewDoc && (
          <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
              <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-[#1E3A8A] border border-blue-100">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#1E3A8A] leading-snug">
                      {previewDoc.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-bold mt-0.5">
                      {previewDoc.subtitle} | {previewDoc.date}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer border border-slate-200"
                >
                  <EyeOff size={18} />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
                <ul className="space-y-2">
                  {previewDoc.summary.map((sum, index) => (
                    <li key={index} className="text-sm text-slate-600 leading-relaxed flex gap-3 items-start">
                      <span className="p-1 px-1.5 rounded bg-blue-50 text-[#1E3A8A] text-[10px] font-bold shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {sum}
                    </li>
                  ))}
                </ul>

                {previewDoc.fullTranscription && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">
                      Транскрипция документа
                    </h4>
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 max-h-72 overflow-y-auto space-y-3 text-sm text-slate-600 leading-relaxed">
                      {previewDoc.fullTranscription.map((line, lIdx) => (
                        <p key={lIdx} className={line === line.toUpperCase() && line.length > 3 ? "text-[#1E3A8A] font-bold" : ""}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
                <span className="text-xs text-slate-400 font-semibold">
                  Формат: {previewDoc.docType.toUpperCase()}
                </span>
                <div className="flex gap-2">
                  {getDownloadUrl(previewDoc) && (
                    <a
                      href={getDownloadUrl(previewDoc)}
                      download
                      className="px-4 py-2 bg-[#1E3A8A] text-white hover:bg-blue-800 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download size={14} />
                      Скачать файл
                    </a>
                  )}
                  <button
                    onClick={() => setPreviewDoc(null)}
                    className="px-4 py-2 bg-white hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-600 transition-colors border border-slate-200 cursor-pointer"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
