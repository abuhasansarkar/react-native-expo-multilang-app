export type LanguageCode = "es" | "fr" | "de" | "ja" | "ar";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  description: string;
}

export type ActivityType = "vocabulary" | "phrase" | "listen" | "speak" | "match";

export interface VocabItem {
  word: string;
  translation: string;
  pronunciation?: string;
}

export interface PhraseItem {
  phrase: string;
  translation: string;
  pronunciation?: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  prompt: string;
  items: VocabItem[] | PhraseItem[];
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  xpReward: number;
  goals: string[];
  aiTeacherPrompt: string;
  activities: Activity[];
}

export interface Unit {
  id: string;
  languageCode: LanguageCode;
  title: string;
  description: string;
  order: number;
  lessonIds: string[];
}
