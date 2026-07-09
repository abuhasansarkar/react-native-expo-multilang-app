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
    title: "Greetings & Introductions",
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
  {
    id: "de-lesson-2",
    unitId: "de-unit-1",
    title: "Daily Life",
    description: "Common words and phrases for everyday situations.",
    xpReward: 10,
    goals: ["Talk about daily activities", "Use common verbs"],
    aiTeacherPrompt:
      "You are an encouraging German teacher. Teach common verbs like essen, trinken, schlafen. Use simple sentences and encourage repetition.",
    activities: [
      {
        id: "de-lesson-2-vocab",
        type: "vocabulary",
        prompt: "Learn everyday German words",
        items: [
          { word: "Essen", translation: "To eat", pronunciation: "ES-sen" },
          { word: "Trinken", translation: "To drink", pronunciation: "TRIN-ken" },
          { word: "Schlafen", translation: "To sleep", pronunciation: "SHLAH-fen" },
          { word: "Arbeiten", translation: "To work", pronunciation: "AR-by-ten" },
          { word: "Lernen", translation: "To learn", pronunciation: "LEHR-nen" },
        ],
      },
    ],
  },
  {
    id: "de-lesson-3",
    unitId: "de-unit-1",
    title: "At the Café",
    description: "Order food and drinks at a German café.",
    xpReward: 15,
    goals: ["Order at a café", "Ask for the bill"],
    aiTeacherPrompt:
      "You are a friendly German teacher. Teach café-related vocabulary and phrases like 'Ich möchte...', 'Die Rechnung, bitte'.",
    activities: [
      {
        id: "de-lesson-3-vocab",
        type: "vocabulary",
        prompt: "Learn café vocabulary",
        items: [
          { word: "Kaffee", translation: "Coffee", pronunciation: "kah-FAY" },
          { word: "Tee", translation: "Tea", pronunciation: "tay" },
          { word: "Wasser", translation: "Water", pronunciation: "VAH-ser" },
          { word: "Kuchen", translation: "Cake", pronunciation: "KOO-khen" },
        ],
      },
    ],
  },
  {
    id: "de-lesson-4",
    unitId: "de-unit-1",
    title: "Travel & Directions",
    description: "Ask for and give directions in German.",
    xpReward: 15,
    goals: ["Ask for directions", "Understand location words"],
    aiTeacherPrompt:
      "You are a patient German teacher. Teach direction words like links, rechts, geradeaus and phrases for asking directions.",
    activities: [
      {
        id: "de-lesson-4-vocab",
        type: "vocabulary",
        prompt: "Learn direction words",
        items: [
          { word: "Links", translation: "Left", pronunciation: "links" },
          { word: "Rechts", translation: "Right", pronunciation: "rekhts" },
          { word: "Geradeaus", translation: "Straight ahead", pronunciation: "geh-RAH-deh-ous" },
          { word: "Hier", translation: "Here", pronunciation: "heer" },
          { word: "Dort", translation: "There", pronunciation: "dort" },
        ],
      },
    ],
  },
  {
    id: "de-lesson-5",
    unitId: "de-unit-1",
    title: "Shopping",
    description: "Shop for items and ask about prices.",
    xpReward: 15,
    goals: ["Ask for prices", "Buy items in a shop"],
    aiTeacherPrompt:
      "You are a warm German teacher. Teach shopping phrases like 'Wie viel kostet das?', numbers, and common items.",
    activities: [
      {
        id: "de-lesson-5-vocab",
        type: "vocabulary",
        prompt: "Learn shopping vocabulary",
        items: [
          { word: "Kaufen", translation: "To buy", pronunciation: "KOW-fen" },
          { word: "Bezahlen", translation: "To pay", pronunciation: "beh-TSAH-len" },
          { word: "Preis", translation: "Price", pronunciation: "pryce" },
          { word: "Geld", translation: "Money", pronunciation: "gelt" },
        ],
      },
    ],
  },
  {
    id: "de-lesson-6",
    unitId: "de-unit-1",
    title: "Family & Friends",
    description: "Talk about your family and friends.",
    xpReward: 15,
    goals: ["Describe family members", "Talk about relationships"],
    aiTeacherPrompt:
      "You are a caring German teacher. Teach family words like Mutter, Vater, Bruder, Schwester and how to talk about family.",
    activities: [
      {
        id: "de-lesson-6-vocab",
        type: "vocabulary",
        prompt: "Learn family vocabulary",
        items: [
          { word: "Mutter", translation: "Mother", pronunciation: "MOO-ter" },
          { word: "Vater", translation: "Father", pronunciation: "FAH-ter" },
          { word: "Bruder", translation: "Brother", pronunciation: "BROO-der" },
          { word: "Schwester", translation: "Sister", pronunciation: "SHVES-ter" },
          { word: "Freund", translation: "Friend", pronunciation: "froynt" },
        ],
      },
    ],
  },

  // ── Japanese ─────────────────────────────────────────────────────────
  {
    id: "ja-lesson-1",
    unitId: "ja-unit-1",
    title: "Greetings & Introductions",
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
  {
    id: "ja-lesson-2",
    unitId: "ja-unit-1",
    title: "Daily Life",
    description: "Common Japanese words for everyday activities.",
    xpReward: 10,
    goals: ["Talk about daily activities", "Use common verbs"],
    aiTeacherPrompt:
      "You are an encouraging Japanese teacher. Teach common verbs like 食べる (taberu), 飲む (nomu), 寝る (neru). Use simple sentences.",
    activities: [
      {
        id: "ja-lesson-2-vocab",
        type: "vocabulary",
        prompt: "Learn everyday Japanese words",
        items: [
          { word: "食べる", translation: "To eat", pronunciation: "ta-be-ru" },
          { word: "飲む", translation: "To drink", pronunciation: "no-mu" },
          { word: "寝る", translation: "To sleep", pronunciation: "ne-ru" },
          { word: "行く", translation: "To go", pronunciation: "i-ku" },
          { word: "勉強する", translation: "To study", pronunciation: "ben-kyo-su-ru" },
        ],
      },
    ],
  },
  {
    id: "ja-lesson-3",
    unitId: "ja-unit-1",
    title: "At the Café",
    description: "Order food and drinks at a Japanese café.",
    xpReward: 15,
    goals: ["Order at a café", "Use polite expressions"],
    aiTeacherPrompt:
      "You are a friendly Japanese teacher. Teach café vocabulary and polite ordering phrases like 'お願いします'.",
    activities: [
      {
        id: "ja-lesson-3-vocab",
        type: "vocabulary",
        prompt: "Learn café vocabulary",
        items: [
          { word: "コーヒー", translation: "Coffee", pronunciation: "ko-hi" },
          { word: "紅茶", translation: "Tea", pronunciation: "ko-cha" },
          { word: "水", translation: "Water", pronunciation: "mi-zu" },
          { word: "ケーキ", translation: "Cake", pronunciation: "ke-ki" },
        ],
      },
    ],
  },
  {
    id: "ja-lesson-4",
    unitId: "ja-unit-1",
    title: "Travel & Directions",
    description: "Ask for and understand directions in Japanese.",
    xpReward: 15,
    goals: ["Ask for directions", "Understand location words"],
    aiTeacherPrompt:
      "You are a patient Japanese teacher. Teach direction words like 右 (migi), 左 (hidari), まっすぐ (massugu).",
    activities: [
      {
        id: "ja-lesson-4-vocab",
        type: "vocabulary",
        prompt: "Learn direction words",
        items: [
          { word: "右", translation: "Right", pronunciation: "mi-gi" },
          { word: "左", translation: "Left", pronunciation: "hi-da-ri" },
          { word: "まっすぐ", translation: "Straight", pronunciation: "ma-ssu-gu" },
          { word: "ここ", translation: "Here", pronunciation: "ko-ko" },
          { word: "そこ", translation: "There", pronunciation: "so-ko" },
        ],
      },
    ],
  },
  {
    id: "ja-lesson-5",
    unitId: "ja-unit-1",
    title: "Shopping",
    description: "Shop for items and ask about prices.",
    xpReward: 15,
    goals: ["Ask for prices", "Buy items politely"],
    aiTeacherPrompt:
      "You are a warm Japanese teacher. Teach shopping phrases like 'いくらですか?' and numbers for prices.",
    activities: [
      {
        id: "ja-lesson-5-vocab",
        type: "vocabulary",
        prompt: "Learn shopping vocabulary",
        items: [
          { word: "買う", translation: "To buy", pronunciation: "ka-u" },
          { word: "高い", translation: "Expensive", pronunciation: "ta-ka-i" },
          { word: "安い", translation: "Cheap", pronunciation: "ya-su-i" },
          { word: "お金", translation: "Money", pronunciation: "o-ka-ne" },
        ],
      },
    ],
  },
  {
    id: "ja-lesson-6",
    unitId: "ja-unit-1",
    title: "Family & Friends",
    description: "Talk about your family and friends in Japanese.",
    xpReward: 15,
    goals: ["Describe family members", "Talk about relationships"],
    aiTeacherPrompt:
      "You are a caring Japanese teacher. Teach family words like 母 (haha), 父 (chichi), 兄弟 (kyodai) and how to talk about family.",
    activities: [
      {
        id: "ja-lesson-6-vocab",
        type: "vocabulary",
        prompt: "Learn family vocabulary",
        items: [
          { word: "母", translation: "Mother", pronunciation: "ha-ha" },
          { word: "父", translation: "Father", pronunciation: "chi-chi" },
          { word: "兄弟", translation: "Siblings", pronunciation: "kyo-da-i" },
          { word: "姉妹", translation: "Sisters", pronunciation: "shi-ma-i" },
          { word: "友達", translation: "Friend", pronunciation: "to-mo-da-chi" },
        ],
      },
    ],
  },

  // ── Arabic ──────────────────────────────────────────────────────────
  {
    id: "ar-lesson-1",
    unitId: "ar-unit-1",
    title: "Greetings & Introductions",
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
  {
    id: "ar-lesson-2",
    unitId: "ar-unit-1",
    title: "Daily Life",
    description: "Common Arabic words for everyday activities.",
    xpReward: 10,
    goals: ["Talk about daily activities", "Use common verbs"],
    aiTeacherPrompt:
      "You are an encouraging Arabic teacher. Teach common verbs and everyday expressions. Speak clearly and use repetition.",
    activities: [
      {
        id: "ar-lesson-2-vocab",
        type: "vocabulary",
        prompt: "Learn everyday Arabic words",
        items: [
          { word: "يأكل", translation: "To eat", pronunciation: "ya-kul" },
          { word: "يشرب", translation: "To drink", pronunciation: "yash-rab" },
          { word: "ينام", translation: "To sleep", pronunciation: "ya-nam" },
          { word: "يعمل", translation: "To work", pronunciation: "ya-mal" },
          { word: "يدرس", translation: "To study", pronunciation: "yad-rus" },
        ],
      },
    ],
  },
  {
    id: "ar-lesson-3",
    unitId: "ar-unit-1",
    title: "At the Café",
    description: "Order food and drinks at an Arabic café.",
    xpReward: 15,
    goals: ["Order at a café", "Use polite expressions"],
    aiTeacherPrompt:
      "You are a friendly Arabic teacher. Teach café vocabulary and polite ordering phrases.",
    activities: [
      {
        id: "ar-lesson-3-vocab",
        type: "vocabulary",
        prompt: "Learn café vocabulary",
        items: [
          { word: "قهوة", translation: "Coffee", pronunciation: "qah-wa" },
          { word: "شاي", translation: "Tea", pronunciation: "shay" },
          { word: "ماء", translation: "Water", pronunciation: "ma" },
          { word: "حلوى", translation: "Sweets", pronunciation: "hel-wa" },
        ],
      },
    ],
  },
  {
    id: "ar-lesson-4",
    unitId: "ar-unit-1",
    title: "Travel & Directions",
    description: "Ask for and understand directions in Arabic.",
    xpReward: 15,
    goals: ["Ask for directions", "Understand location words"],
    aiTeacherPrompt:
      "You are a patient Arabic teacher. Teach direction words and phrases for asking directions.",
    activities: [
      {
        id: "ar-lesson-4-vocab",
        type: "vocabulary",
        prompt: "Learn direction words",
        items: [
          { word: "يمين", translation: "Right", pronunciation: "ya-min" },
          { word: "يسار", translation: "Left", pronunciation: "ya-sar" },
          { word: "مباشرة", translation: "Straight", pronunciation: "mu-ba-sha-ra" },
          { word: "هنا", translation: "Here", pronunciation: "hu-na" },
          { word: "هناك", translation: "There", pronunciation: "hu-nak" },
        ],
      },
    ],
  },
  {
    id: "ar-lesson-5",
    unitId: "ar-unit-1",
    title: "Shopping",
    description: "Shop for items and ask about prices in Arabic.",
    xpReward: 15,
    goals: ["Ask for prices", "Buy items politely"],
    aiTeacherPrompt:
      "You are a warm Arabic teacher. Teach shopping phrases and numbers for prices.",
    activities: [
      {
        id: "ar-lesson-5-vocab",
        type: "vocabulary",
        prompt: "Learn shopping vocabulary",
        items: [
          { word: "يشتري", translation: "To buy", pronunciation: "yash-ta-ri" },
          { word: "يدفع", translation: "To pay", pronunciation: "yad-fa" },
          { word: "سعر", translation: "Price", pronunciation: "si-r" },
          { word: "مال", translation: "Money", pronunciation: "mal" },
        ],
      },
    ],
  },
  {
    id: "ar-lesson-6",
    unitId: "ar-unit-1",
    title: "Family & Friends",
    description: "Talk about your family and friends in Arabic.",
    xpReward: 15,
    goals: ["Describe family members", "Talk about relationships"],
    aiTeacherPrompt:
      "You are a caring Arabic teacher. Teach family words and how to talk about family relationships.",
    activities: [
      {
        id: "ar-lesson-6-vocab",
        type: "vocabulary",
        prompt: "Learn family vocabulary",
        items: [
          { word: "أم", translation: "Mother", pronunciation: "um" },
          { word: "أب", translation: "Father", pronunciation: "ab" },
          { word: "أخ", translation: "Brother", pronunciation: "akh" },
          { word: "أخت", translation: "Sister", pronunciation: "ukht" },
          { word: "صديق", translation: "Friend", pronunciation: "sa-diq" },
        ],
      },
    ],
  },
];

export function getLessonsByLanguage(languageCode: string): Lesson[] {
  return LESSONS.filter((lesson) => lesson.unitId.startsWith(languageCode));
}
