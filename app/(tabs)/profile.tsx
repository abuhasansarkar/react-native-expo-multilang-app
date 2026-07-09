import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, fontFamily } from "@/theme/tokens";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontFamily: fontFamily.bold, fontSize: 24, color: colors.textPrimary }}>
          👤 Profile
        </Text>
        <Text style={{ fontFamily: fontFamily.regular, fontSize: 14, color: colors.textSecondary, marginTop: 8 }}>
          Profile screen coming soon
        </Text>
      </View>
    </SafeAreaView>
  );
}
