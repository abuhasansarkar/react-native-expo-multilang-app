import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView contentContainerStyle={{ padding: 24, gap: 16 }}>
        <Text className="text-h2 text-center">MultiLang AI App</Text>
        <TouchableOpacity
          style={styles.link}
          onPress={() => router.push("/onboarding")}
        >
          <Text style={styles.linkText}>→ View Onboarding</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 8,
    alignItems: "center",
  },
  linkText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#6C4EF5",
  },
});
