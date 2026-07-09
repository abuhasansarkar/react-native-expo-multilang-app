import { Unit } from "@/types/learning";

export const UNITS: Unit[] = [
  {
    id: "es-unit-1",
    languageCode: "es",
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
    order: 1,
    lessonIds: ["es-lesson-1", "es-lesson-2"],
  },
  {
    id: "fr-unit-1",
    languageCode: "fr",
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
    order: 1,
    lessonIds: ["fr-lesson-1", "fr-lesson-2"],
  },
  {
    id: "de-unit-1",
    languageCode: "de",
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
    order: 1,
    lessonIds: [
      "de-lesson-1",
      "de-lesson-2",
      "de-lesson-3",
      "de-lesson-4",
      "de-lesson-5",
      "de-lesson-6",
    ],
  },
  {
    id: "ja-unit-1",
    languageCode: "ja",
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
    order: 1,
    lessonIds: [
      "ja-lesson-1",
      "ja-lesson-2",
      "ja-lesson-3",
      "ja-lesson-4",
      "ja-lesson-5",
      "ja-lesson-6",
    ],
  },
  {
    id: "ar-unit-1",
    languageCode: "ar",
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
    order: 1,
    lessonIds: [
      "ar-lesson-1",
      "ar-lesson-2",
      "ar-lesson-3",
      "ar-lesson-4",
      "ar-lesson-5",
      "ar-lesson-6",
    ],
  },
];

export function getUnitsByLanguage(languageCode: string): Unit[] {
  return UNITS.filter((unit) => unit.languageCode === languageCode);
}
