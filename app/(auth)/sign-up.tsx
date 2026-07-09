import VerificationModal from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { useSignUp, useSSO } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { type Href, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const router = useRouter();
  const { signUp, errors, fetchStatus } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [verifyError, setVerifyError] = useState("");

  const handleSignUp = async () => {
    setVerifyError("");
    const { error } = await signUp.password({ emailAddress: email, password });
    if (error) return;
    await signUp.verifications.sendEmailCode();
    setModalVisible(true);
  };

  const handleVerify = async (code: string) => {
    setVerifyError("");
    await signUp.verifications.verifyEmailCode({ code });
    if (signUp.status === "complete") {
      setModalVisible(false);
      await signUp.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) return;
          const url = decorateUrl("/");
          router.replace(url as Href);
        },
      });
    } else {
      setVerifyError("Invalid code. Please try again.");
    }
  };

  const handleResend = async () => {
    await signUp.verifications.sendEmailCode();
  };

  const emailError = errors?.fields?.emailAddress?.message;
  const passwordError = errors?.fields?.password?.message;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Back */}
        <TouchableOpacity
          className="w-9 h-9 justify-center"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="#0D132B" />
        </TouchableOpacity>

        {/* Heading */}
        <Text className="font-bold text-[28px] text-text-primary mt-2 mb-1">
          Create your account
        </Text>
        <Text className="text-body-md text-text-secondary mb-4">
          Start your language journey today ✨
        </Text>

        {/* Mascot */}
        <View className="items-center -mb-6">
          <Image
            source={images.mascotAuth}
            className="w-40 h-[140px]"
            resizeMode="contain"
          />
        </View>

        {/* Email */}
        <View className="border border-border rounded-2xl px-4 pt-2.5 pb-3 bg-white">
          <Text className="font-sans text-[12px] text-text-secondary mb-0.5">
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>
        {emailError ? (
          <Text className="text-error text-[12px] -mt-2">{emailError}</Text>
        ) : null}

        {/* Password */}
        <View className="border border-border rounded-2xl px-4 pt-2.5 pb-3 bg-white mt-3">
          <Text className="font-sans text-[12px] text-text-secondary mb-0.5">
            Password
          </Text>
          <View className="flex-row items-center">
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={!showPassword}
              style={[styles.input, styles.inputFlex]}
            />
            <TouchableOpacity
              className="pl-2"
              onPress={() => setShowPassword((v) => !v)}
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#9CA3AF"
              />
            </TouchableOpacity>
          </View>
        </View>
        {passwordError ? (
          <Text className="text-error text-[12px] -mt-2">{passwordError}</Text>
        ) : null}

        {/* Sign Up Button */}
        <TouchableOpacity
          className="bg-multiLang-purple rounded-[18px] py-[18px] items-center mt-6"
          activeOpacity={0.85}
          onPress={handleSignUp}
          disabled={!email || !password || fetchStatus === "fetching"}
          style={(!email || !password || fetchStatus === "fetching") ? { opacity: 0.5 } : undefined}
        >
          <Text className="font-semibold text-[17px] text-white">Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-5 gap-3">
          <View className="flex-1 h-px bg-border" />
          <Text className="text-body-sm text-text-secondary">
            or continue with
          </Text>
          <View className="flex-1 h-px bg-border" />
        </View>

        {/* Social Buttons */}
        <SocialButton icon="logo-google" label="Continue with Google" strategy="oauth_google" />
        <SocialButton icon="logo-apple" label="Continue with Apple" strategy="oauth_apple" />

        {/* Footer */}
        <View className="flex-row justify-center mt-8 mb-2">
          <Text className="text-body-md text-text-secondary">
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.replace("/(auth)/sign-in")}>
            <Text className="text-body-md text-multiLang-purple font-semibold">
              Log in
            </Text>
          </TouchableOpacity>
        </View>

        {/* Required for Clerk bot protection */}
        <View nativeID="clerk-captcha" />
      </ScrollView>

      <VerificationModal
        visible={modalVisible}
        email={email || "your email"}
        onClose={() => setModalVisible(false)}
        onVerify={handleVerify}
        onResend={handleResend}
        isLoading={fetchStatus === "fetching"}
        error={verifyError}
      />
    </SafeAreaView>
  );
}

function SocialButton({
  icon,
  label,
  strategy,
  color,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  strategy: "oauth_google" | "oauth_apple";
  color?: string;
}) {
  const router = useRouter();
  const { startSSOFlow } = useSSO();

  const handlePress = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
      }
    } catch (err) {
      console.error("SSO error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <TouchableOpacity
      className="flex-row items-center border border-border rounded-2xl py-3.5 px-5 mb-2.5 bg-white gap-3"
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <Ionicons name={icon} size={22} color={color ?? "#0D132F"} />
      <Text className="font-medium text-[15px] text-text-primary">{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 32,
  },
  input: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#0D132B",
    padding: 0,
  },
  inputFlex: {
    flex: 1,
  },
});
