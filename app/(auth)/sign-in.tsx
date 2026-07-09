import VerificationModal from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { useSignIn, useSSO } from "@clerk/expo";
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

export default function SignIn() {
  const router = useRouter();
  const { signIn, errors, fetchStatus } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [verifyError, setVerifyError] = useState("");

  const navigateAfterAuth = ({ session, decorateUrl }: { session: any; decorateUrl: (url: string) => string }) => {
    if (session?.currentTask) return;
    const url = decorateUrl("/");
    router.replace(url as Href);
  };

  const handleSignIn = async () => {
    setVerifyError("");
    const { error } = await signIn.password({ emailAddress: email, password });
    if (error) return;

    if (signIn.status === "complete") {
      await signIn.finalize({ navigate: navigateAfterAuth });
    } else if (signIn.status === "needs_client_trust") {
      const emailFactor = signIn.supportedSecondFactors?.find(
        (f: any) => f.strategy === "email_code"
      );
      if (emailFactor) await signIn.mfa.sendEmailCode();
      setModalVisible(true);
    }
  };

  const handleVerify = async (code: string) => {
    setVerifyError("");
    await signIn.mfa.verifyEmailCode({ code });
    if (signIn.status === "complete") {
      setModalVisible(false);
      await signIn.finalize({ navigate: navigateAfterAuth });
    } else {
      setVerifyError("Invalid code. Please try again.");
    }
  };

  const handleResend = async () => {
    await signIn.mfa.sendEmailCode();
  };

  const identifierError = errors?.fields?.identifier?.message;
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
          Welcome back
        </Text>
        <Text className="text-body-md text-text-secondary mb-4">
          Sign in to continue your journey ✨
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
        {identifierError ? (
          <Text className="text-error text-[12px] -mt-2">{identifierError}</Text>
        ) : null}

        {/* Password */}
        <View className="border border-border rounded-2xl px-4 pt-2.5 pb-3 bg-white mt-3">
          <Text className="font-sans text-[12px] text-text-secondary mb-0.5">
            Password
          </Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            style={styles.input}
          />
        </View>
        {passwordError ? (
          <Text className="text-error text-[12px] -mt-2">{passwordError}</Text>
        ) : null}

        {/* Sign In Button */}
        <TouchableOpacity
          className="bg-multiLang-purple rounded-[18px] py-[18px] items-center mt-6"
          activeOpacity={0.85}
          onPress={handleSignIn}
          disabled={!email || !password || fetchStatus === "fetching"}
          style={(!email || !password || fetchStatus === "fetching") ? { opacity: 0.5 } : undefined}
        >
          <Text className="font-semibold text-[17px] text-white">Sign In</Text>
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
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.replace("/(auth)/sign-up")}>
            <Text className="text-body-md text-multiLang-purple font-semibold">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
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
});
