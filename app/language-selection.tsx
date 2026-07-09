import { useMemo, useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { images } from "@/constants/images";
import { LANGUAGES } from "@/data/languages";
import { Language } from "@/types/learning";

export default function LanguageSelection() {
  const [selected, setSelected] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LANGUAGES;
    return LANGUAGES.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.nativeName.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <View className="items-center pt-6 pb-4 px-6">
        <Image
          source={images.earth}
          className="w-24 h-24 mb-4"
          resizeMode="contain"
        />
        <Text className="text-h2 text-center">Choose a Language</Text>
        <Text className="text-body-md text-text-secondary text-center mt-1">
          Pick the language you want to learn today
        </Text>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search languages…"
          placeholderTextColor="#6B7280"
          style={{
            marginTop: 16,
            width: "100%",
            backgroundColor: "#F6F7FB",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            paddingHorizontal: 16,
            paddingVertical: 10,
            fontFamily: "Poppins-Regular",
            fontSize: 14,
            color: "#0D132B",
          }}
        />
      </View>

      {/* Language List */}
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 24, gap: 12 }}
        showsVerticalScrollIndicator={false}
      >
        {filtered.length === 0 && (
          <Text className="text-body-md text-text-secondary text-center mt-6">
            No languages found.
          </Text>
        )}
        {filtered.map((lang: Language) => (
          <TouchableOpacity
            key={lang.code}
            onPress={() => setSelected(lang.code)}
            activeOpacity={0.8}
            style={{
              borderRadius: 16,
              borderWidth: 2,
              borderColor: selected === lang.code ? "#6C4EF5" : "#E5E7EB",
              backgroundColor: selected === lang.code ? "#F3F0FF" : "#FFFFFF",
              padding: 16,
              flexDirection: "row",
              alignItems: "center",
              gap: 14,
            }}
          >
            <Image
              source={{ uri: lang.flag }}
              style={{ width: 48, height: 34, borderRadius: 6 }}
              resizeMode="cover"
            />
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Text className="text-h4">{lang.name}</Text>
                <Text className="text-body-sm">{lang.nativeName}</Text>
              </View>
              <Text className="text-body-sm mt-0.5">{lang.description}</Text>
            </View>
            {selected === lang.code && (
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  backgroundColor: "#6C4EF5",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff", fontSize: 13, fontFamily: "Poppins-Bold" }}>✓</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Confirm Button */}
      <View className="px-5 pb-6 pt-2">
        <TouchableOpacity
          className="btn--primary"
          disabled={!selected}
          style={{ opacity: selected ? 1 : 0.45 }}
          onPress={() => {
            if (selected) router.replace("/");
          }}
        >
          <Text className="btn__label--primary">Start Learning</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
