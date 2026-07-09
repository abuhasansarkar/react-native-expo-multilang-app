import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  visible: boolean;
  email: string;
  onClose: () => void;
}

export default function VerificationModal({ visible, email, onClose }: Props) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      setCode("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [visible]);

  function handleChange(text: string) {
    const digits = text.replace(/\D/g, "").slice(0, 6);
    setCode(digits);
    if (digits.length === 6) {
      setTimeout(() => {
        onClose();
        router.replace("/");
      }, 200);
    }
  }

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      {/* KeyboardAvoidingView — behavior prop requires StyleSheet, not className */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.overlay}
      >
        <TouchableOpacity style={StyleSheet.absoluteFill} onPress={onClose} />

        {/* Sheet — static styles, use className */}
        <View className="bg-white rounded-t-[28px] px-6 pt-4 pb-12">
          <View className="w-10 h-1 bg-border rounded-full self-center mb-6" />

          <Text className="font-bold text-[22px] text-text-primary text-center mb-2">
            Check your email ✉️
          </Text>
          <Text className="text-body-md text-text-secondary text-center mb-8">
            We sent a 6-digit code to{"\n"}
            <Text className="font-semibold text-text-primary">{email}</Text>
          </Text>

          {/* Hidden real input — position/opacity are dynamic/RN-specific, must use StyleSheet */}
          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleChange}
            keyboardType="number-pad"
            maxLength={6}
            style={styles.hiddenInput}
            caretHidden
          />

          {/* Digit boxes row */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => inputRef.current?.focus()}
            className="flex-row justify-center gap-2.5"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <View
                key={i}
                className="w-12 h-14 rounded-xl items-center justify-center"
                style={[
                  styles.box,
                  code.length === i && styles.boxActive,
                  code.length > i && styles.boxFilled,
                ]}
              >
                <Text className="font-bold text-[22px] text-text-primary">
                  {code[i] ?? ""}
                </Text>
              </View>
            ))}
          </TouchableOpacity>

          <Text className="text-body-sm text-text-secondary text-center mt-6">
            Didn't receive it?{" "}
            <Text className="text-multiLang-purple font-semibold">Resend</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  // KeyboardAvoidingView — behavior/flex/justifyContent not supported via className
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  // TextInput — position:absolute and opacity are dynamic/RN-specific
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
  // Digit box — dynamic border/background states driven at runtime
  box: {
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    backgroundColor: "#F6F7FB",
  },
  boxActive: {
    borderColor: "#6C4EF5",
    backgroundColor: "#fff",
  },
  boxFilled: {
    borderColor: "#6C4EF5",
    backgroundColor: "#EEF2FF",
  },
});
