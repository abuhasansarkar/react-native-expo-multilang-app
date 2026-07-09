import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "selected_language";

interface LanguageState {
  selectedLanguage: string | null;
  isHydrated: boolean;
  setLanguage: (code: string) => Promise<void>;
  clearLanguage: () => Promise<void>;
  hydrate: () => Promise<void>;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  selectedLanguage: null,
  isHydrated: false,

  hydrate: async () => {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    set({ selectedLanguage: stored ?? null, isHydrated: true });
  },

  setLanguage: async (code: string) => {
    await AsyncStorage.setItem(STORAGE_KEY, code);
    set({ selectedLanguage: code });
  },

  clearLanguage: async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    set({ selectedLanguage: null });
  },
}));
