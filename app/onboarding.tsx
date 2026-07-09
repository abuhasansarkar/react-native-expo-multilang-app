import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 px-6 pt-4 pb-6">
        {/* Logo Row */}
        <View className="flex-row items-center justify-center gap-2 mb-8">
          <Image
            source={images.mascotLogo}
            className="w-10 h-10"
            resizeMode="contain"
          />
          <Text className="font-semibold text-[22px] text-text-primary">
            MultiLang
          </Text>
        </View>

        {/* Heading */}
        <View className="mb-3">
          <Text className="font-bold text-[34px] leading-[42px] text-text-primary">
            Your AI language
          </Text>
          <View className="flex-row items-baseline">
            <Text className="font-bold text-[34px] leading-[42px] text-multiLang-purple uppercase">
              teacher
            </Text>
            <Text className="font-bold text-[34px] leading-[42px] text-text-primary">
              .
            </Text>
          </View>
        </View>

        {/* Subtitle */}
        <Text className="text-body-md text-text-secondary mb-6">
          Real conversations, personalized{"\n"}lessons, anytime, anywhere.
        </Text>

        {/* Mascot + Speech Bubbles */}
        <View className="flex-1 items-center justify-center">
          <View className="w-full items-center">
            {/* Hello bubble — left */}
            <View className="self-start ml-4 bg-[#EEF2FF] rounded-2xl px-4 py-2.5">
              <Text className="font-semibold text-[15px] text-text-primary -mb-4">
                Hello!
              </Text>
            </View>

            {/* ¡Hola! bubble — right */}
            <View className="self-end mr-4 bg-[#EEF2FF] rounded-2xl px-4 py-2.5 ">
              <Text className="font-semibold text-[15px] text-multiLang-purple">
                ¡Hola!
              </Text>
            </View>

            {/* Mascot */}
            <Image
              source={images.mascotWelcome}
              className="w-80 h-80 -mt-20"
              resizeMode="contain"
            />

            {/* 你好! bubble — right, lower */}
            <View
              className="self-end mr-6 bg-[#FFF0F0] rounded-2xl px-4 py-2.5"
              style={{ marginTop: -80 }}
            >
              <Text className="font-semibold text-[15px] text-error">
                你好!
              </Text>
            </View>
          </View>
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          className="bg-multiLang-purple rounded-[18px] py-[18px] flex-row items-center justify-center mt-4"
          onPress={() => router.push("/(auth)/sign-up")}
          activeOpacity={0.85}
        >
          <Text className="font-semibold text-[17px] text-white">
            Get Started ›
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
