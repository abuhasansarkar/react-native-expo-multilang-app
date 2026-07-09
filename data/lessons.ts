import { Lesson } from "@/types/learning";

export const LESSONS: Lesson[] = [
  // ── Spanish ──────────────────────────────────────────────────────────────
  {
    id: "es-lesson-1",
    unitId: "es-unit-1",
    title: "Greetings",
    description: "Learn how to say hello and goodbye in Spanish.",
    xpReward: 10,
    goals: [
      "Say hello and goodbye",
      "Introduce yourself",
      "Ask someone how they are",
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish teacher. Greet the student warmly in Spanish, then teach them basic greetings like hola, adiós, and ¿cómo estás?. Speak slowly and clearly. Encourage them to repeat after you.",
    activities: [
      {
        id: "es-lesson-1-vocab",
        type: "vocabulary",
        prompt: "Learn these Spanish words",
        items: [
          { word: "Hola", translation: "Hello", pronunciation: "OH-lah" },
          { word: "Adiós", translation: "Goodbye", pronunciation: "ah-DYOS" },
          { word: "Gracias", translation: "Thank you", pronunciation: "GRAH-syahs" },
          { word: "Por favor", translation: "Please", pronunciation: "por fah-VOR" },
          { word: "Sí", translation: "Yes", pronunciation: "see" },
          { word: "No", translation: "No", pronunciation: "noh" },
        ],
      },
      {
        id: "es-lesson-1-phrases",
        type: "phrase",
        prompt: "Practice these common phrases",
        items: [
          {
            phrase: "¿Cómo estás?",
            translation: "How are you?",
            pronunciation: "KOH-moh es-TAHS",
          },
          {
            phrase: "Me llamo...",
            translation: "My name is...",
            pronunciation: "meh YAH-moh",
          },
          {
            phrase: "Mucho gusto",
            translation: "Nice to meet you",
            pronunciation: "MOO-choh GOOS-toh",
          },
        ],
      },
    ],
  },
  {
    id: "es-lesson-2",
    unitId: "es-unit-1",
    title: "Numbers 1–10",
    description: "Count from one to ten in Spanish.",
    xpReward: 10,
    goals: ["Count from 1 to 10", "Use numbers in simple sentences"],
    aiTeacherPrompt:
      "You are a cheerful Spanish teacher. Teach the student numbers uno through diez. Count together, then quiz them by asking '¿Cuántos?' with simple examples.",
    activities: [
      {
        id: "es-lesson-2-vocab",
        type: "vocabulary",
        prompt: "Learn the numbers 1–10",
        items: [
          { word: "Uno", translation: "One", pronunciation: "OO-noh" },
          { word: "Dos", translation: "Two", pronunciation: "dohs" },
          { word: "Tres", translation: "Three", pronunciation: "trehs" },
          { word: "Cuatro", translation: "Four", pronunciation: "KWAH-troh" },
          { word: "Cinco", translation: "Five", pronunciation: "SEEN-koh" },
          { word: "Seis", translation: "Six", pronunciation: "says" },
          { word: "Siete", translation: "Seven", pronunciation: "SYEH-teh" },
          { word: "Ocho", translation: "Eight", pronunciation: "OH-choh" },
          { word: "Nueve", translation: "Nine", pronunciation: "NWEH-veh" },
          { word: "Diez", translation: "Ten", pronunciation: "dyehs" },
        ],
      },
    ],
  },

  // ── French ───────────────────────────────────────────────────────────────
  {
    id: "fr-lesson-1",
    unitId: "fr-unit-1",
    title: "Greetings",
    description: "Learn how to say hello and goodbye in French.",
    xpReward: 10,
    goals: [
      "Say hello and goodbye",
      "Introduce yourself",
      "Ask someone how they are",
    ],
    aiTeacherPrompt:
      "You are a warm French teacher. Greet the student in French and teach them bonjour, au revoir, and comment allez-vous. Speak at a natural but clear pace and invite them to repeat.",
    activities: [
      {
        id: "fr-lesson-1-vocab",
        type: "vocabulary",
        prompt: "Learn these French words",
        items: [
          { word: "Bonjour", translation: "Hello / Good day", pronunciation: "bohn-ZHOOR" },
          { word: "Au revoir", translation: "Goodbye", pronunciation: "oh ruh-VWAHR" },
          { word: "Merci", translation: "Thank you", pronunciation: "mehr-SEE" },
          { word: "S'il vous plaît", translation: "Please", pronunciation: "seel voo PLEH" },
          { word: "Oui", translation: "Yes", pronunciation: "wee" },
          { word: "Non", translation: "No", pronunciation: "nohn" },
        ],
      },
      {
        id: "fr-lesson-1-phrases",
        type: "phrase",
        prompt: "Practice these common phrases",
        items: [
          {
            phrase: "Comment allez-vous ?",
            translation: "How are you? (formal)",
            pronunciation: "koh-mahn tah-lay VOO",
          },
          {
            phrase: "Je m'appelle...",
            translation: "My name is...",
            pronunciation: "zhuh mah-PEL",
          },
          {
            phrase: "Enchanté(e)",
            translation: "Nice to meet you",
            pronunciation: "ahn-shahn-TAY",
          },
        ],
      },
    ],
  },
  {
    id: "fr-lesson-2",
    unitId: "fr-unit-1",
    title: "Numbers 1–10",
    description: "Count from one to ten in French.",
    xpReward: 10,
    goals: ["Count from 1 to 10"],
    aiTeacherPrompt:
      "You are an encouraging French teacher. Teach the student un through dix. Count together slowly, then ask them to count back to you.",
    activities: [
      {
        id: "fr-lesson-2-vocab",
        type: "vocabulary",
        prompt: "Learn the numbers 1–10",
        items: [
          { word: "Un", translation: "One", pronunciation: "uhn" },
          { word: "Deux", translation: "Two", pronunciation: "duh" },
          { word: "Trois", translation: "Three", pronunciation: "twah" },
          { word: "Quatre", translation: "Four", pronunciation: "KAH-truh" },
          { word: "Cinq", translation: "Five", pronunciation: "sank" },
          { word: "Six", translation: "Six", pronunciation: "sees" },
          { word: "Sept", translation: "Seven", pronunciation: "set" },
          { word: "Huit", translation: "Eight", pronunciation: "weet" },
          { word: "Neuf", translation: "Nine", pronunciation: "nuhf" },
          { word: "Dix", translation: "Ten", pronunciation: "dees" },
        ],
      },
    ],
  },

  // ── German ───────────────────────────────────────────────────────────────
  {
    id: "de-lesson-1",
    unitId: "de-unit-1",
    title: "Greetings",
    description: "Learn how to say hello and goodbye in German.",
    xpReward: 10,
    goals: ["Say hello and goodbye", "Introduce yourself"],
    aiTeacherPrompt:
      "You are a friendly German teacher. Teach the student Hallo, Tschüss, and Wie geht es Ihnen? Speak clearly and encourage repetition.",
    activities: [
      {
        id: "de-lesson-1-vocab",
        type: "vocabulary",
        prompt: "Learn these German words",
        items: [
          { word: "Hallo", translation: "Hello", pronunciation: "HAH-loh" },
          { word: "Tschüss", translation: "Bye", pronunciation: "choos" },
          { word: "Danke", translation: "Thank you", pronunciation: "DAHN-keh" },
          { word: "Bitte", translation: "Please / You're welcome", pronunciation: "BIT-teh" },
          { word: "Ja", translation: "Yes", pronunciation: "yah" },
          { word: "Nein", translation: "No", pronunciation: "nine" },
        ],
      },
      {
        id: "de-lesson-1-phrases",
        type: "phrase",
        prompt: "Practice these common phrases",
        items: [
          {
            phrase: "Wie heißt du?",
            translation: "What is your name?",
            pronunciation: "vee hysst doo",
          },
          {
            phrase: "Ich heiße...",
            translation: "My name is...",
            pronunciation: "ikh HY-seh",
          },
          {
            phrase: "Wie geht es Ihnen?",
            translation: "How are you? (formal)",
            pronunciation: "vee gayt es EE-nen",
          },
        ],
      },
    ],
  },

  // ── Japanese ─────────────────────────────────────────────────────────────
  {
    id: "ja-lesson-1",
    unitId: "ja-unit-1",
    title: "Greetings",
    description: "Learn how to say hello and goodbye in Japanese.",
    xpReward: 10,
    goals: ["Say hello and goodbye", "Introduce yourself"],
    aiTeacherPrompt:
      "You are a patient Japanese teacher. Teach the student こんにちは, さようなら, and はじめまして. Explain the pronunciation carefully and invite them to repeat each phrase.",
    activities: [
      {
        id: "ja-lesson-1-vocab",
        type: "vocabulary",
        prompt: "Learn these Japanese words",
        items: [
          { word: "こんにちは", translation: "Hello", pronunciation: "kon-ni-chi-wa" },
          { word: "さようなら", translation: "Goodbye", pronunciation: "sa-yo-na-ra" },
          { word: "ありがとう", translation: "Thank you", pronunciation: "a-ri-ga-to" },
          { word: "はい", translation: "Yes", pronunciation: "hai" },
          { word: "いいえ", translation: "No", pronunciation: "i-i-e" },
        ],
      },
      {
        id: "ja-lesson-1-phrases",
        type: "phrase",
        prompt: "Practice these common phrases",
        items: [
          {
            phrase: "はじめまして",
            translation: "Nice to meet you",
            pronunciation: "ha-ji-me-ma-shi-te",
          },
          {
            phrase: "わたしは...です",
            translation: "I am...",
            pronunciation: "wa-ta-shi wa ... de-su",
          },
          {
            phrase: "おねがいします",
            translation: "Please",
            pronunciation: "o-ne-ga-i-shi-ma-su",
          },
        ],
      },
    ],
  },

  // ── Arabic ───────────────────────────────────────────────────────────────
  {
    id: "ar-lesson-1",
    unitId: "ar-unit-1",
    title: "Greetings",
    description: "Learn how to say hello and goodbye in Arabic.",
    xpReward: 10,
    goals: ["Say hello and goodbye", "Introduce yourself"],
    aiTeacherPrompt:
      "You are a warm Arabic teacher. Teach the student مرحبا, مع السلامة, and كيف حالك. Speak slowly, explain the pronunciation, and encourage the student to repeat after you.",
    activities: [
      {
        id: "ar-lesson-1-vocab",
        type: "vocabulary",
        prompt: "Learn these Arabic words",
        items: [
          { word: "مرحبا", translation: "Hello", pronunciation: "mar-ha-ban" },
          { word: "مع السلامة", translation: "Goodbye", pronunciation: "ma-as-sa-la-ma" },
          { word: "شكراً", translation: "Thank you", pronunciation: "shuk-ran" },
          { word: "من فضلك", translation: "Please", pronunciation: "min fad-lak" },
          { word: "نعم", translation: "Yes", pronunciation: "na-am" },
          { word: "لا", translation: "No", pronunciation: "la" },
        ],
      },
      {
        id: "ar-lesson-1-phrases",
        type: "phrase",
        prompt: "Practice these common phrases",
        items: [
          {
            phrase: "كيف حالك؟",
            translation: "How are you?",
            pronunciation: "kay-fa ha-luk",
          },
          {
            phrase: "اسمي...",
            translation: "My name is...",
            pronunciation: "is-mi",
          },
          {
            phrase: "تشرفنا",
            translation: "Nice to meet you",
            pronunciation: "ta-shar-raf-na",
          },
        ],
      },
    ],
  },
];
