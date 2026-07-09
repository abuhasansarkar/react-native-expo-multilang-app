import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { posthog } from "@/lib/posthog";

const STORAGE_KEY = "progress_store";

interface ProgressState {
  xp: number;
  streak: number;
  completedLessons: string[];
  isHydrated: boolean;
  hydrate: () => Promise<void>;
  completeLesson: (lessonId: string, xpReward: number) => Promise<void>;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  xp: 0,
  streak: 3, // default demo streak
  completedLessons: [],
  isHydrated: false,

  hydrate: async () => {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      set({ ...data, isHydrated: true });
    } else {
      set({ isHydrated: true });
    }
  },

  completeLesson: async (lessonId: string, xpReward: number) => {
    const { completedLessons, xp, streak } = get();
    if (completedLessons.includes(lessonId)) return;
    const payload = {
      xp: xp + xpReward,
      streak,
      completedLessons: [...completedLessons, lessonId],
    };
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      set(payload);
      posthog.capture("lesson_completed", {
        lesson_id: lessonId,
        xp_earned: xpReward,
        total_xp: xp + xpReward,
        total_lessons_completed: completedLessons.length + 1,
      });
    } catch (e) {
      console.error("[progressStore] Failed to persist lesson completion:", e);
    }
  },
}));
