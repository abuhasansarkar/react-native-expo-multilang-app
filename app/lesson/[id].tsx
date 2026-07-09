import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors, fontFamily, fontSize } from "@/theme/tokens";
import { LESSONS } from "@/data/lessons";
import { Lesson } from "@/types/learning";
import { images } from "@/constants/images";

export default function AudioLessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isSubtitlesOn, setIsSubtitlesOn] = useState(true);

  useEffect(() => {
    if (id) {
      const foundLesson = LESSONS.find((l) => l.id === id);
      setLesson(foundLesson || null);
    }
  }, [id]);

  if (!lesson) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontFamily: fontFamily.medium, color: colors.textSecondary }}>
            Lesson not found
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleEndCall = () => {
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={["top"]}>
      {/* Header */}
      <View className="px-4 py-3 flex-row items-center justify-between">
        <Pressable onPress={() => router.back()} className="mr-3">
          <Ionicons name="chevron-back" size={28} color={colors.textPrimary} />
        </Pressable>

        <View className="flex-1">
          <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.h3, color: colors.textPrimary }}>
            AI Teacher
          </Text>
          <View className="flex-row items-center mt-0.5">
            <View className="w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: colors.success }} />
            <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.bodySmall, color: colors.textSecondary }}>
              Online
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-3">
          <Pressable className="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: colors.surface }}>
            <Ionicons name="videocam-outline" size={22} color={colors.textPrimary} />
          </Pressable>

          <View className="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: colors.surface }}>
            <Text style={{ fontFamily: fontFamily.semiBold, fontSize: fontSize.bodyMedium, color: colors.textPrimary }}>
              12
            </Text>
          </View>

          <Pressable className="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: colors.surface }}>
            <Ionicons name="notifications-outline" size={22} color={colors.textPrimary} />
          </Pressable>
        </View>
      </View>

      {/* Main Content */}
      <View className="flex-1 px-4">
        {/* Video Area with Mascot */}
        <View className="rounded-3xl overflow-hidden mb-6" style={[styles.videoContainer, { backgroundColor: "#C8BFB5" }]}>
          {/* Background home environment styling */}
          <View className="absolute inset-0" style={{ backgroundColor: "#C8BFB5" }} />

          {/* Mascot - Main Focus - Centered Vertically */}
          <View className="flex-1 items-center justify-center -mt-20">
            <Image
              source={images.mascotWelcome}
              style={{ width: 320, height: 320, resizeMode: "contain" }}
            />
          </View>

          {/* Teacher Response Bubble */}
          <View className="absolute bottom-5 left-5 right-5">
            <View className="rounded-2xl p-4 flex-row items-start" style={[styles.responseBubble, { backgroundColor: colors.background }]}>
              <View className="flex-1">
                <Text style={{ fontFamily: fontFamily.semiBold, fontSize: 17, color: colors.textPrimary, marginBottom: 2 }}>
                  ¡Muy bien!
                </Text>
                <View className="flex-row items-center">
                  <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.bodyMedium, color: colors.textPrimary }}>
                    That was great! 👏
                  </Text>
                </View>
              </View>
              <Pressable className="ml-3">
                <Ionicons name="volume-high" size={26} color={colors.linguaPurple} />
              </Pressable>
            </View>
          </View>
        </View>

        {/* Control Buttons */}
        <View className="flex-row items-center justify-between mb-6 px-1">
          <Pressable
            onPress={() => setIsCameraOn(!isCameraOn)}
            className="items-center"
          >
            <View className="w-16 h-16 rounded-full items-center justify-center mb-2" style={{ backgroundColor: "#FFFFFF" }}>
              <Ionicons name={isCameraOn ? "videocam" : "videocam-off"} size={26} color={colors.textPrimary} />
            </View>
            <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.bodySmall, color: colors.textSecondary }}>
              Camera
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setIsMicOn(!isMicOn)}
            className="items-center"
          >
            <View className="w-16 h-16 rounded-full items-center justify-center mb-2" style={{ backgroundColor: "#FFFFFF" }}>
              <Ionicons name={isMicOn ? "mic" : "mic-off"} size={26} color={colors.textPrimary} />
            </View>
            <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.bodySmall, color: colors.textSecondary }}>
              Mic
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setIsSubtitlesOn(!isSubtitlesOn)}
            className="items-center"
          >
            <View className="w-16 h-16 rounded-full items-center justify-center mb-2" style={{ backgroundColor: "#FFFFFF" }}>
              <Ionicons name="text" size={26} color={colors.textPrimary} />
            </View>
            <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.bodySmall, color: colors.textSecondary }}>
              Subtitles
            </Text>
          </Pressable>

          <Pressable
            onPress={handleEndCall}
            className="items-center"
          >
            <View className="w-16 h-16 rounded-full items-center justify-center mb-2" style={{ backgroundColor: "#FF4D4F" }}>
              <Ionicons name="call" size={26} color="#FFFFFF" />
            </View>
            <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.bodySmall, color: colors.textSecondary }}>
              End Call
            </Text>
          </Pressable>
        </View>

        {/* Feedback Section */}
        <View className="rounded-2xl p-5" style={{ backgroundColor: colors.surface }}>
          <View className="flex-row justify-between">
            <View className="flex-1">
              <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.bodyMedium, color: colors.textPrimary, marginBottom: 8 }}>
                Speaking
              </Text>
              <Text style={{ fontFamily: fontFamily.semiBold, fontSize: fontSize.bodyLarge, color: colors.success }}>
                Excellent
              </Text>
            </View>

            <View className="flex-1 items-center">
              <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.bodyMedium, color: colors.textPrimary, marginBottom: 8 }}>
                Pronunciation
              </Text>
              <Text style={{ fontFamily: fontFamily.semiBold, fontSize: fontSize.bodyLarge, color: colors.linguaBlue }}>
                Great
              </Text>
            </View>

            <View className="flex-1 items-end">
              <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.bodyMedium, color: colors.textPrimary, marginBottom: 8 }}>
                Grammar
              </Text>
              <Text style={{ fontFamily: fontFamily.semiBold, fontSize: fontSize.bodyLarge, color: colors.linguaPurple }}>
                Good
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    height: 420,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  responseBubble: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});
