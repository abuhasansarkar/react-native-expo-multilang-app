import { View, Text, ScrollView, Image, Pressable, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { colors, fontFamily, fontSize } from "@/theme/tokens";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore } from "@/store/progressStore";
import { useEffect, useState } from "react";
import { UNITS } from "@/data/units";
import { LESSONS } from "@/data/lessons";
import { Lesson, Unit } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { getLessonIcon, images } from "@/constants/images";

type TabType = "lessons" | "practice";

export default function LearnScreen() {
  const { selectedLanguage, isHydrated: langHydrated } = useLanguageStore();
  const { completedLessons, isHydrated: progressHydrated } = useProgressStore();
  const [activeTab, setActiveTab] = useState<TabType>("lessons");
  const [currentUnit, setCurrentUnit] = useState<Unit | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    if (langHydrated && selectedLanguage) {
      // Get first unit for selected language
      const units = UNITS.filter((u) => u.languageCode === selectedLanguage);
      if (units.length > 0) {
        const firstUnit = units[0];
        setCurrentUnit(firstUnit);

        // Get lessons for this unit
        const unitLessons = LESSONS.filter((l) => l.unitId === firstUnit.id);
        setLessons(unitLessons);
      }
    }
  }, [selectedLanguage, langHydrated]);

  if (!langHydrated || !progressHydrated) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontFamily: fontFamily.medium, color: colors.textSecondary }}>
            Loading...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!selectedLanguage || !currentUnit) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 24 }}>
          <Text
            style={{
              fontFamily: fontFamily.bold,
              fontSize: fontSize.h3,
              color: colors.textPrimary,
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            No Language Selected
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.regular,
              fontSize: fontSize.bodyMedium,
              color: colors.textSecondary,
              textAlign: "center",
            }}
          >
            Please select a language from the home screen to start learning.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const completedCount = lessons.filter((l) => completedLessons.includes(l.id)).length;
  const totalCount = lessons.length;

  // Determine lesson status
  const getLessonStatus = (lesson: Lesson, index: number): "completed" | "in-progress" | "locked" | "available" => {
    if (completedLessons.includes(lesson.id)) {
      return "completed";
    }
    
    // Find first incomplete lesson
    const firstIncompleteIndex = lessons.findIndex((l) => !completedLessons.includes(l.id));
    
    if (index === firstIncompleteIndex) {
      return "in-progress";
    }
    
    // For now, all lessons are available (no locking logic)
    return "available";
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={["top"]}>
      {/* Header */}
      <View className="px-4 py-3 flex-row items-center justify-between">
        <Pressable className="w-10 h-10 items-center justify-center">
          <Ionicons name="chevron-back" size={28} color={colors.textPrimary} />
        </Pressable>
        
        <View className="flex-1 items-center">
          <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.h3, color: colors.textPrimary }}>
            {currentUnit.title}
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.regular,
              fontSize: fontSize.bodySmall,
              color: colors.textSecondary,
              marginTop: 2,
            }}
          >
            Unit {currentUnit.order} · {completedCount} / {totalCount} lessons
          </Text>
        </View>

        <Pressable className="w-10 h-10 items-center justify-center">
          <Ionicons name="bookmark-outline" size={24} color={colors.linguaPurple} />
        </Pressable>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Hero Illustration */}
        <View className="px-4 mb-4">
          <View
            className="rounded-3xl overflow-hidden items-center justify-center"
            style={{ backgroundColor: "#E8F5F3", height: 220 }}
          >
            <Image
              source={images.palace}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </View>
        </View>

        {/* Tabs */}
        <View className="px-4 mb-6">
          <View className="flex-row rounded-2xl p-1" style={{ backgroundColor: colors.surface }}>
            <Pressable
              onPress={() => setActiveTab("lessons")}
              className="flex-1 py-3 rounded-xl items-center"
              style={activeTab === "lessons" ? { backgroundColor: colors.background } : {}}
            >
              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: fontSize.bodyLarge,
                  color: activeTab === "lessons" ? colors.linguaPurple : colors.textSecondary,
                }}
              >
                Lessons
              </Text>
            </Pressable>
            
            <Pressable
              onPress={() => setActiveTab("practice")}
              className="flex-1 py-3 rounded-xl items-center"
              style={activeTab === "practice" ? { backgroundColor: colors.background } : {}}
            >
              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: fontSize.bodyLarge,
                  color: activeTab === "practice" ? colors.linguaPurple : colors.textSecondary,
                }}
              >
                Practice
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Lessons List */}
        {activeTab === "lessons" ? (
          <View className="px-4 pb-8">
            {lessons.map((lesson, index) => {
              const status = getLessonStatus(lesson, index);
              const isCompleted = status === "completed";
              const isInProgress = status === "in-progress";
              const isLocked = status === "locked";
              const isAvailable = status === "available";

              return (
                <Link
                  key={lesson.id}
                  href={isLocked ? "#" : (`/lesson/${lesson.id}` as any)}
                  asChild
                  disabled={isLocked}
                >
                  <Pressable
                    className="mb-3 rounded-2xl flex-row items-center justify-between"
                    style={[
                      {
                        backgroundColor: isInProgress ? "#F8F6FF" : colors.surface,
                        paddingVertical: 16,
                        paddingHorizontal: 20,
                      },
                      isInProgress && styles.inProgressCard,
                    ]}
                    disabled={isLocked}
                  >
                  <View className="flex-1">
                    <Text
                      style={{
                        fontFamily: fontFamily.medium,
                        fontSize: fontSize.bodySmall,
                        color: isInProgress ? colors.linguaPurple : colors.textSecondary,
                        marginBottom: 4,
                      }}
                    >
                      Lesson {index + 1}
                    </Text>
                    <Text
                      style={{
                        fontFamily: fontFamily.bold,
                        fontSize: 18,
                        color: isLocked || isAvailable ? colors.textSecondary : colors.textPrimary,
                      }}
                    >
                      {lesson.title}
                    </Text>
                    {isInProgress && (
                      <Text
                        style={{
                          fontFamily: fontFamily.medium,
                          fontSize: fontSize.bodySmall,
                          color: colors.linguaPurple,
                          marginTop: 4,
                        }}
                      >
                        In progress
                      </Text>
                    )}
                    {(isLocked || isAvailable) && (
                      <Text
                        style={{
                          fontFamily: fontFamily.regular,
                          fontSize: fontSize.bodySmall,
                          color: colors.textSecondary,
                          marginTop: 4,
                        }}
                      >
                        0 / {lesson.activities.length} lessons
                      </Text>
                    )}
                  </View>

                  {/* Right Icon/Status */}
                  <View>
                    {isCompleted && (
                      <View
                        className="w-12 h-12 rounded-full items-center justify-center"
                        style={{ backgroundColor: colors.success }}
                      >
                        <Ionicons name="checkmark" size={28} color="#fff" />
                      </View>
                    )}
                    {isInProgress && (
                      <Image
                        source={getLessonIcon(lesson.title)}
                        style={{ width: 56, height: 56, resizeMode: "contain" }}
                      />
                    )}
                    {(isLocked || isAvailable) && (
                      <View
                        className="w-12 h-12 rounded-full items-center justify-center"
                        style={{ backgroundColor: "#E5E7EB" }}
                      >
                        <Ionicons name="lock-closed" size={22} color={colors.textSecondary} />
                      </View>
                    )}
                  </View>
                </Pressable>
                </Link>
              );
            })}
          </View>
        ) : (
          <View className="px-4 pb-8 items-center justify-center" style={{ minHeight: 200 }}>
            <Text
              style={{
                fontFamily: fontFamily.medium,
                fontSize: fontSize.bodyLarge,
                color: colors.textSecondary,
              }}
            >
              Practice mode coming soon!
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inProgressCard: {
    borderWidth: 2,
    borderColor: colors.linguaPurple,
    ...Platform.select({
      ios: {
        shadowColor: colors.linguaPurple,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
