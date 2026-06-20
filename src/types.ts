/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ScheduleDay {
  day: string;
  hours: string;
  isWeekend: boolean;
}

export interface Discipline {
  id: string;
  name: string;
  originalName?: string;
  description: string;
  iconName: string; // Lucide icon name
  ageGroup: string;
  coaches: string[];
  benefits: string[];
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  experience: string;
  achievements: string[];
  photoUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: "news" | "event" | "announcement";
  imageUrl: string;
}

export interface AppDocument {
  id: string;
  title: string;
  subtitle: string;
  docType: "pdf" | "doc" | "sheet";
  date: string;
  number?: string;
  summary: string[];
  fullTranscription?: string[];
  downloadUrl?: string;
  isPlaceholderUrl?: boolean;
}
