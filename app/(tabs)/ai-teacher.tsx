import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, fontFamily } from "@/theme/tokens";

export default function AITeacherScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontFamily: fontFamily.bold, fontSize: 24, color: colors.textPrimary }}>
          ✨ AI Teacher
        </Text>
        <Text style={{ fontFamily: fontFamily.regular, fontSize: 14, color: colors.textSecondary, marginTop: 8 }}>
          AI Teacher screen coming soon
        </Text>
      </View>
    </SafeAreaView>
  );
}
