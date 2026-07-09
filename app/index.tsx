import { useAuth, useClerk } from "@clerk/expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6C4EF5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24, gap: 16 }}>
        <Text style={{ fontFamily: "Poppins-Bold", fontSize: 28, color: "#0D132B" }}>
          Welcome! 🎉
        </Text>
        <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16, color: "#6B7280", textAlign: "center" }}>
          You're signed in. Home screen coming soon.
        </Text>
        <TouchableOpacity
          onPress={() => signOut()}
          style={{ backgroundColor: "#6C4EF5", borderRadius: 18, paddingVertical: 14, paddingHorizontal: 32 }}
        >
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16, color: "#fff" }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
