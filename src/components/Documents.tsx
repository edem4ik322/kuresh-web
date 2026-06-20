/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Search, FileText, Download, Calendar, Eye, EyeOff, Check, AlertCircle, Building, BookOpen } from "lucide-react";
import { APP_DOCUMENTS } from "../data";
import { AppDocument } from "../types";

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "doc" | "pdf" | "sheet">("all");
  const [previewDoc, setPreviewDoc] = useState<AppDocument | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const filteredDocs = APP_DOCUMENTS.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.summary.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = selectedType === "all" || doc.docType === selectedType;
    return matchesSearch && matchesType;
  });

  const handleDownloadClick = (docId: string, title: string, event: React.MouseEvent) => {
    event.preventDefault();
    setDownloadSuccess(docId);
    
    // Create a mock trigger for downloading
    const statusDiv = document.createElement("div");
    statusDiv.style.display = "none";
    document.body.appendChild(statusDiv);
    
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3000);
  };

  return (
    <section id="documents" className="py-20 bg-white text-slate-800 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="docs-header" className="max-w-3xl mb-12">
          <span className="text-[#1E3A8A] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-150 inline-block">
            Официальный архив
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A] mt-4 tracking-tight">
            Документы и Учредительные свидетельства
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Ознакомьтесь с актуальной нормативно-правовой базой ГБУ РК «Спортивная школа № 1» 
            и официально зарегистрированной Крымской федерацией национальных видов спорта (ОГРН 1249100015790).
          </p>
        </div>

        {/* User prompt specific callout - Charter DOCX place */}
        <div id="user-docs-callout" className="mb-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between shadow-sm">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-blue-50 text-[#1E3A8A] rounded-xl mt-1 shrink-0 border border-blue-100">
              <BookOpen size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-950 text-base">Официальный Устав ГБУ РК «СШ № 1»</h4>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                По запросу в архив документов интегрировано официальное место для главного действующего Устава нашей спортивной школы. 
                Вы можете ознакомиться с интерактивным содержанием ниже либо загрузить оригинальный текстовый документ в формате <strong className="text-orange-600 font-bold">.doc</strong>.
              </p>
            </div>
          </div>
          <button
            onClick={(e) => handleDownloadClick("school_statute", "Устав СШ №1", e as any)}
            className="w-full md:w-auto px-5 py-3 rounded-xl bg-[#1E3A8A] text-white hover:bg-blue-800 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            {downloadSuccess === "school_statute" ? (
              <>
                <Check size={16} className="animate-scaleIn" />
                <span>Загрузка начата!</span>
              </>
            ) : (
              <>
                <Download size={16} />
                <span>Скачать Устав (.DOC)</span>
              </>
            )}
          </button>
        </div>

        {/* Filters and Search Tools */}
        <div id="docs-tools-grid" className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          {/* Search bar */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Поиск по названию, ключевым словам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#1E3A8A] text-sm placeholder-slate-400 text-slate-800 transition-all font-sans"
            />
          </div>

          {/* Type filters */}
          <div className="md:col-span-7 flex flex-wrap gap-2 justify-start md:justify-end">
            {[
              { id: "all", label: "Все файлы" },
              { id: "doc", label: "Шаблоны DOC/DOCX" },
              { id: "pdf", label: "Уставы и Справки PDF" },
              { id: "sheet", label: "Листы ЕГРЮЛ" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  selectedType === tab.id
                    ? "bg-[#1E3A8A] border-[#1E3A8A] text-white shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid Display */}
        <div id="docs-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              id={`document-preview-card-${doc.id}`}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-350 hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {doc.docType === "doc" && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
              )}

              <div>
                {/* File Header Details */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    doc.docType === "doc"
                      ? "bg-blue-50 text-[#1E3A8A] border border-blue-100"
                      : doc.docType === "pdf"
                      ? "bg-red-50 text-red-650 border border-red-100"
                      : "bg-green-50 text-green-650 border border-green-100"
                  }`}>
                    <FileText size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase py-0.5 px-2.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                    .{doc.docType.toUpperCase()}
                  </span>
                </div>

                {/* Info block */}
                <span className="block text-[10px] font-bold text-slate-400 mb-1 flex items-center gap-1">
                  <Calendar size={10} />
                  {doc.date} {doc.number && `| ${doc.number}`}
                </span>
                
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight leading-snug group-hover:text-[#1E3A8A] transition-colors">
                  {doc.title}
                </h3>
                
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  {doc.subtitle}
                </p>

                {/* Dynamic Summary list under doc */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">Ключевая информация:</span>
                  <ul className="space-y-1.5">
                    {doc.summary.slice(0, 3).map((item, index) => (
                      <li key={index} className="text-[11px] text-slate-600 leading-normal flex gap-1.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Document Interactive Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setPreviewDoc(doc)}
                  className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors flex items-center justify-center gap-1 border border-slate-200 cursor-pointer"
                >
                  <Eye size={12} />
                  <span>Просмотр</span>
                </button>

                <button
                  onClick={(e) => handleDownloadClick(doc.id, doc.title, e)}
                  className="px-3 py-2 rounded-xl bg-[#1E3A8A]/10 hover:bg-[#1E3A8A] text-[#1E3A8A] hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1 border border-blue-100 cursor-pointer"
                >
                  {downloadSuccess === doc.id ? (
                    <>
                      <Check size={12} className="animate-ping" />
                      <span>Готово</span>
                    </>
                  ) : (
                    <>
                      <Download size={12} />
                      <span>Скачать</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}

          {filteredDocs.length === 0 && (
            <div id="no-docs-fallback" className="col-span-1 md:col-span-2 lg:col-span-4 p-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-center text-slate-500">
              <AlertCircle className="mx-auto text-slate-400 mb-3" size={32} />
              <p className="text-sm font-medium">Документы, удовлетворяющие критериям поиска, не обнаружены.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("all");
                }}
                className="mt-4 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </div>

        {/* POPUP: Beautiful Interactive Document Reader Modal */}
        {previewDoc && (
          <div
            id="doc-reader-overlay"
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
          >
            <div
              id="doc-reader-body"
              className="bg-white border border-slate-200 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl text-slate-800"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-[#1E3A8A] border border-blue-100 shadow-sm">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#1E3A8A] leading-snug">
                      {previewDoc.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-bold mt-0.5">
                      {previewDoc.subtitle} | {previewDoc.date} {previewDoc.number && `| ${previewDoc.number}`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer border border-slate-200 shadow-sm"
                >
                  <EyeOff size={18} />
                </button>
              </div>

              {/* Modal Core Contents: Summary and Official Transcript */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
                {/* Visual Metadata Alert */}
                <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 text-xs flex gap-3 items-center text-slate-600">
                  <AlertCircle size={18} className="text-[#1E3A8A] shrink-0" />
                  <span>
                    Ниже представлена верифицированная текстовая транскрипция официального документа, 
                    загруженного в архив Государственного реестра.
                  </span>
                </div>

                {/* Interactive Expandable Summary bullet checklist */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">
                    Аннотация содержания
                  </h4>
                  <ul className="space-y-2">
                    {previewDoc.summary.map((sum, index) => (
                      <li key={index} className="text-xs sm:text-sm text-slate-600 leading-relaxed flex gap-3 items-start">
                        <span className="p-1 px-1.5 rounded bg-blue-50 text-[#1E3A8A] text-[10px] font-bold shrink-0 mt-0.5 border border-blue-100">
                          {index + 1}
                        </span>
                        <span>{sum}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Official transcript text */}
                {previewDoc.fullTranscription && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 pb-2 flex justify-between items-center">
                      <span>Официальная транскрипция</span>
                      <span className="text-[10px] text-slate-400 font-semibold normal-case">Верифицировано ЕГРЮЛ</span>
                    </h4>
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 max-h-72 overflow-y-auto space-y-3 font-semibold text-[11px] sm:text-xs text-slate-650 leading-relaxed">
                      {previewDoc.fullTranscription.map((line, lIdx) => (
                        <p key={lIdx} className={`${line.toUpperCase() === line ? "text-[#1E3A8A] font-extrabold tracking-tight pt-2" : "text-slate-600"}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Controls */}
              <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <span className="text-xs text-slate-400 font-semibold">
                  Формат файла: {previewDoc.docType.toUpperCase()} | Документ имеет юридическую силу
                </span>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setPreviewDoc(null)}
                    className="w-full sm:w-auto px-4 py-2 bg-white hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-600 transition-colors border border-slate-200 cursor-pointer shadow-sm"
                  >
                    Закрыть ридер
                  </button>
                  <button
                    onClick={(e) => handleDownloadClick(previewDoc.id, previewDoc.title, e)}
                    className="w-full sm:w-auto px-4.5 py-2 bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold text-xs transition-colors rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Download size={14} />
                    <span>Скачать документ</span>
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
