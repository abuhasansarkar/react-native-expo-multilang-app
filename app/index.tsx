import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView contentContainerStyle={{ padding: 24, gap: 16 }}>
        <Text className="text-h2 text-center flex items-center justify-center">
          MultiLang Language learn AI App
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
