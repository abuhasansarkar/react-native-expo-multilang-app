import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { posthog } from "@/lib/posthog";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import { LANGUAGES } from "@/data/languages";
import { LESSONS } from "@/data/lessons";
import { UNITS } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore } from "@/store/progressStore";
import { colors, fontFamily } from "@/theme/tokens";

// Today's plan activity types with icon config
const PLAN_ACTIVITIES = [
  {
    key: "lesson",
    label: "Lesson",
    getSubtitle: (lesson: { title: string }) => lesson.title,
    icon: "book" as const,
    iconBg: "#6C4EF5",
  },
  {
    key: "ai-conversation",
    label: "AI Conversation",
    subtitle: "Talk about your day",
    icon: "headset" as const,
    iconBg: "#5B3BF6",
  },
  {
    key: "new-words",
    label: "New words",
    subtitle: "10 words",
    icon: "chatbubble" as const,
    iconBg: "#E05252",
  },
];

export default function HomeScreen() {
  const { user } = useUser();
  const router = useRouter();
  const { selectedLanguage } = useLanguageStore();
  const { xp, streak, completedLessons, isHydrated, hydrate } = useProgressStore();

  useEffect(() => {
    if (!isHydrated) hydrate();
  }, []);

  const language = LANGUAGES.find((l) => l.code === selectedLanguage);
  const unit = UNITS.find((u) => u.languageCode === selectedLanguage);
  const allLessons = LESSONS.filter((l) => l.unitId === unit?.id);
  const currentLesson = allLessons.find((l) => !completedLessons.includes(l.id)) ?? allLessons[0];

  const dailyGoal = 20;
  const dailyXp = Math.min(xp, dailyGoal);
  const dailyProgress = dailyGoal > 0 ? dailyXp / dailyGoal : 0;

  const firstName = user?.firstName ?? user?.username ?? "Learner";
  const flagUri = language?.flag;

  const GREETINGS: Record<string, string> = {
    es: "Hola",
    fr: "Salut",
    de: "Hallo",
    ja: "こんにちは",
    ar: "مرحبا",
  };
  const greetWord = selectedLanguage ? (GREETINGS[selectedLanguage] ?? "Hey") : "Hey";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* ── Header ──────────────────────────────────────────── */}
        <View style={styles.header}>
          {/* Flag avatar */}
          <View style={styles.flagAvatar}>
            {flagUri ? (
              <Image source={{ uri: flagUri }} style={styles.flagAvatarImg} contentFit="cover" />
            ) : (
              <Text style={{ fontSize: 22 }}>🌐</Text>
            )}
          </View>

          <Text style={styles.greeting}>
            {`${greetWord}, ${firstName}! 👋`}
          </Text>

          <View style={styles.headerRight}>
            {/* Streak */}
            <View style={styles.streakRow}>
              <Image source={images.streakFire} style={styles.fireIcon} contentFit="contain" />
              <Text style={styles.streakCount}>{streak}</Text>
            </View>
            {/* Bell */}
            <Pressable style={styles.bellBtn}>
              <Ionicons name="notifications-outline" size={22} color={colors.textPrimary} />
            </Pressable>
          </View>
        </View>

        {/* ── Daily Goal Card ──────────────────────────────────── */}
        <View style={styles.dailyCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.dailyLabel}>Daily goal</Text>
            <View style={styles.dailyXpRow}>
              <Text style={styles.dailyXpCurrent}>{dailyXp}</Text>
              <Text style={styles.dailyXpTotal}> / {dailyGoal} XP</Text>
            </View>
            {/* Progress bar */}
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${Math.round(dailyProgress * 100)}%` }]} />
            </View>
          </View>
          <Image source={images.treasure} style={styles.treasureImg} contentFit="contain" />
        </View>

        {/* ── Continue Learning Card ───────────────────────────── */}
        <Pressable
          style={({ pressed }) => [styles.continueCard, pressed && { opacity: 0.95 }]}
          onPress={() => {
            if (currentLesson) {
              posthog.capture("home_continue_learning_tapped", {
                lesson_id: currentLesson.id,
                lesson_title: currentLesson.title,
              });
              router.push(`/lesson/${currentLesson.id}` as any);
            }
          }}
        >
          {/* Text side */}
          <View style={styles.continueLeft}>
            <Text style={styles.continueSub}>Continue learning</Text>
            <Text style={styles.continueLang}>{language?.name ?? "Spanish"}</Text>
            <Text style={styles.continueUnit}>
              A1 · {unit?.title ?? "Unit 1"}
            </Text>
            <View style={styles.continueBtn}>
              <Text style={styles.continueBtnText}>Continue</Text>
            </View>
          </View>
          {/* Palace illustration */}
          <Image source={images.palace} style={styles.palaceImg} contentFit="contain" />
        </Pressable>

        {/* ── Today's Plan ─────────────────────────────────────── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's plan</Text>
            <Pressable>
              <Text style={styles.viewAll}>View all</Text>
            </Pressable>
          </View>

          <View style={styles.planList}>
            {PLAN_ACTIVITIES.map((activity, idx) => {
              const isDone = idx === 0 && currentLesson
                ? completedLessons.includes(currentLesson.id)
                : false;
              const subtitle =
                activity.key === "lesson" && currentLesson
                  ? currentLesson.description
                  : activity.subtitle ?? "";

              return (
                <Pressable
                  key={activity.key}
                  style={({ pressed }) => [styles.planRow, pressed && { opacity: 0.85 }]}
                  onPress={() => {
                    posthog.capture("home_plan_activity_tapped", {
                      activity_key: activity.key,
                      activity_label: activity.label,
                    });
                    if (activity.key === "lesson" && currentLesson) {
                      router.push(`/lesson/${currentLesson.id}` as any);
                    }
                  }}
                >
                  {/* Icon box */}
                  <View style={[styles.planIconBox, { backgroundColor: activity.iconBg }]}>
                    <Ionicons name={activity.icon} size={20} color="#fff" />
                  </View>

                  {/* Text */}
                  <View style={styles.planText}>
                    <Text style={styles.planTitle}>{activity.label}</Text>
                    <Text style={styles.planSubtitle} numberOfLines={1}>{subtitle}</Text>
                  </View>

                  {/* Checkbox */}
                  {isDone ? (
                    <View style={styles.checkDone}>
                      <Ionicons name="checkmark" size={16} color="#fff" />
                    </View>
                  ) : (
                    <View style={styles.checkEmpty} />
                  )}
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* ── Next Up Card ─────────────────────────────────────── */}
        <View style={styles.nextUpCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.nextUpLabel}>Next up</Text>
            <Text style={styles.nextUpTitle}>AI Video Call</Text>
            <Text style={styles.nextUpSub}>Practice speaking</Text>
          </View>
          {/* Teacher avatar */}
          <View style={styles.teacherAvatarWrap}>
            <Image
              source={{ uri: "https://picsum.photos/seed/teacher/200/200" }}
              style={styles.teacherAvatar}
              contentFit="cover"
            />
          </View>
          {/* Video button */}
          <Pressable
            style={styles.videoBtn}
            onPress={() => posthog.capture("home_ai_video_call_tapped")}
          >
            <Ionicons name="videocam" size={20} color="#fff" />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 16,
  },

  // ── Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    gap: 10,
  },
  flagAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
  },
  flagAvatarImg: {
    width: 44,
    height: 44,
  },
  greeting: {
    flex: 1,
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    color: colors.textPrimary,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  streakRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  fireIcon: {
    width: 22,
    height: 22,
  },
  streakCount: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    color: colors.streak,
  },
  bellBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Daily Goal
  dailyCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF5E6",
    borderRadius: 20,
    padding: 20,
    ...Platform.select({
      ios: { shadowColor: "#FFB347", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 12 },
      android: { elevation: 3 },
    }),
  },
  dailyLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  dailyXpRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 12,
  },
  dailyXpCurrent: {
    fontFamily: fontFamily.bold,
    fontSize: 36,
    color: colors.textPrimary,
  },
  dailyXpTotal: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    color: colors.textSecondary,
  },
  progressTrack: {
    height: 8,
    backgroundColor: "#FFD9A8",
    borderRadius: 4,
    overflow: "hidden",
    width: "100%",
  },
  progressFill: {
    height: 8,
    backgroundColor: colors.streak,
    borderRadius: 4,
  },
  treasureImg: {
    width: 80,
    height: 80,
    marginLeft: 12,
  },

  // ── Continue Learning
  continueCard: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#5B3BF6",
    borderRadius: 24,
    paddingTop: 24,
    paddingLeft: 24,
    paddingBottom: 24,
    paddingRight: 0,
    overflow: "hidden",
    minHeight: 160,
    ...Platform.select({
      ios: { shadowColor: "#5B3BF6", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.4, shadowRadius: 20 },
      android: { elevation: 10 },
    }),
  },
  continueLeft: {
    flex: 1,
    paddingRight: 12,
  },
  continueSub: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    color: "rgba(255,255,255,0.75)",
    marginBottom: 4,
  },
  continueLang: {
    fontFamily: fontFamily.bold,
    fontSize: 30,
    color: "#fff",
    lineHeight: 34,
  },
  continueUnit: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: "rgba(255,255,255,0.7)",
    marginTop: 4,
    marginBottom: 16,
  },
  continueBtn: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 22,
    paddingVertical: 10,
    alignSelf: "flex-start",
  },
  continueBtnText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: "#5B3BF6",
  },
  palaceImg: {
    width: 130,
    height: 150,
    alignSelf: "flex-end",
  },

  // ── Today's Plan
  section: {
    gap: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    color: colors.textPrimary,
  },
  viewAll: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: colors.linguaPurple,
  },
  planList: {
    gap: 4,
  },
  planRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  planIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  planText: {
    flex: 1,
  },
  planTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    color: colors.textPrimary,
  },
  planSubtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  checkDone: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.linguaPurple,
    alignItems: "center",
    justifyContent: "center",
  },
  checkEmpty: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.border,
  },

  // ── Next Up
  nextUpCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDF7EE",
    borderRadius: 20,
    padding: 20,
    gap: 12,
    ...Platform.select({
      ios: { shadowColor: "#21C16B", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 12 },
      android: { elevation: 3 },
    }),
  },
  nextUpLabel: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  nextUpTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 17,
    color: colors.textPrimary,
  },
  nextUpSub: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  teacherAvatarWrap: {
    width: 52,
    height: 52,
    borderRadius: 26,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#fff",
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, shadowRadius: 6 },
      android: { elevation: 4 },
    }),
  },
  teacherAvatar: {
    width: 52,
    height: 52,
  },
  videoBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.success,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: { shadowColor: colors.success, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 8 },
      android: { elevation: 6 },
    }),
  },
});
