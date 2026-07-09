import { colors } from "@/theme/tokens";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Platform, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TabConfig = {
  name: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconActive: keyof typeof Ionicons.glyphMap;
};

const TABS: TabConfig[] = [
  { name: "index", label: "Home", icon: "home-outline", iconActive: "home" },
  { name: "learn", label: "Learn", icon: "book-outline", iconActive: "book" },
  {
    name: "ai-teacher",
    label: "AI TEACHER",
    icon: "sparkles-outline",
    iconActive: "sparkles",
  },
  {
    name: "chat",
    label: "Chat",
    icon: "chatbubble-outline",
    iconActive: "chatbubble",
  },
  {
    name: "profile",
    label: "Profile",
    icon: "person-outline",
    iconActive: "person",
  },
];

function CustomTabBar({ state, navigation }: any) {
  const insets = useSafeAreaInsets();

  // progress: JS-driver only — used for color interpolation (cannot use native driver)
  const progress = useRef(
    TABS.map((_, i) => new Animated.Value(i === state.index ? 1 : 0)),
  ).current;

  // All of these are native-driver — transforms + opacity only
  const scales = useRef(TABS.map(() => new Animated.Value(1))).current;
  const labelOpacity = useRef(
    TABS.map((_, i) => new Animated.Value(i === state.index ? 0 : 1)),
  ).current;
  const labelTranslY = useRef(TABS.map(() => new Animated.Value(0))).current;
  const iconTranslY = useRef(
    TABS.map((_, i) => new Animated.Value(i === state.index ? 6 : 0)),
  ).current;

  useEffect(() => {
    TABS.forEach((_, i) => {
      const active = i === state.index;

      // JS-driver: color interpolation only — isolated to its own animation
      Animated.timing(progress[i], {
        toValue: active ? 1 : 0,
        duration: 220,
        useNativeDriver: false,
      }).start();

      // Native-driver: opacity + transforms — all on separate nodes, never mixed with JS-driver
      Animated.parallel([
        Animated.timing(labelOpacity[i], {
          toValue: active ? 0 : 1,
          duration: 180,
          useNativeDriver: true,
        }),
        Animated.spring(iconTranslY[i], {
          toValue: active ? 6 : 0,
          useNativeDriver: true,
          damping: 16,
          stiffness: 180,
        }),
        Animated.spring(labelTranslY[i], {
          toValue: active ? 5 : 0,
          useNativeDriver: true,
          damping: 16,
          stiffness: 180,
        }),
      ]).start();
    });
  }, [state.index]);

  const handlePress = (index: number) => {
    const isFocused = state.index === index;

    // Native-driver: press bounce — isolated, never in same parallel as JS-driver
    Animated.sequence([
      Animated.timing(scales[index], {
        toValue: 0.88,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.spring(scales[index], {
        toValue: 1,
        useNativeDriver: true,
        damping: 10,
        stiffness: 200,
      }),
    ]).start();

    const event = navigation.emit({
      type: "tabPress",
      target: state.routes[index].key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(state.routes[index].name);
    }
  };

  return (
    // View — NativeWind className ✅ | shadow via StyleSheet (Platform-specific exception)
    <View
      className="tab-bar"
      style={[shadows.container, { paddingBottom: insets.bottom }]}
    >
      <View className="tab-bar__row">
        {TABS.map((tab, index) => {
          const isFocused = state.index === index;
          const isAI = tab.name === "ai-teacher";

          // Animated color interpolations — useNativeDriver: false, must use style prop
          const activeIconColor = progress[index].interpolate({
            inputRange: [0, 1],
            outputRange: [colors.textSecondary, colors.linguaPurple],
          });
          const inactiveIconOpacity = progress[index].interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          });

          if (isAI) {
            return (
              // Pressable — style prop exception ✅
              <Pressable
                key={tab.name}
                onPress={() => handlePress(index)}
                style={pressable.item}
              >
                {/* Animated.View — StyleSheet for transform exception ✅ */}
                <Animated.View
                  style={{
                    transform: [{ scale: scales[index] }],
                    alignItems: "center",
                  }}
                >
                  <View
                    className={`tab-bar__ai-btn ${isFocused ? "tab-bar__ai-btn--active" : ""}`}
                    style={isFocused ? shadows.aiActive : shadows.ai}
                  >
                    <Ionicons
                      name={isFocused ? tab.iconActive : tab.icon}
                      size={26}
                      color="#fff"
                    />
                  </View>
                </Animated.View>
                {/* Animated.Text — StyleSheet for animated color exception ✅ */}
                <Animated.Text
                  className="tab-bar__label"
                  style={{ color: activeIconColor }}
                >
                  {tab.label}
                </Animated.Text>
              </Pressable>
            );
          }

          return (
            // Pressable — style prop exception ✅
            <Pressable
              key={tab.name}
              onPress={() => handlePress(index)}
              style={pressable.item}
            >
              {/*
                Two separate Animated.View wrappers:
                - outer: native-driver scale + translateY (transforms only)
                - inner icon wrappers: JS-driver opacity (progress) — separate nodes
              */}
              <Animated.View
                style={{
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  transform: [
                    { scale: scales[index] },
                    { translateY: iconTranslY[index] },
                  ],
                }}
              >
                {/* Active icon — JS-driver opacity on its own node */}
                <Animated.View
                  style={{ opacity: progress[index], position: "absolute" }}
                >
                  <Ionicons
                    name={tab.iconActive}
                    size={24}
                    color={colors.linguaPurple}
                  />
                </Animated.View>
                {/* Inactive icon — JS-driver opacity on its own node */}
                <Animated.View style={{ opacity: inactiveIconOpacity }}>
                  <Ionicons
                    name={tab.icon}
                    size={24}
                    color={colors.textSecondary}
                  />
                </Animated.View>
              </Animated.View>

              {/* Native-driver wrapper: opacity + translateY on their own node */}
              <Animated.View
                style={{
                  opacity: labelOpacity[index],
                  transform: [{ translateY: labelTranslY[index] }],
                }}
              >
                {/* JS-driver: color interpolation only on its own node */}
                <Animated.Text
                  className="tab-bar__label"
                  style={{ color: activeIconColor }}
                >
                  {tab.label}
                </Animated.Text>
              </Animated.View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

// StyleSheet only for: Platform-specific shadows, Pressable style prop, Animated transforms
const shadows = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.07,
        shadowRadius: 20,
      },
      android: { elevation: 20 },
    }),
  },
  ai: {
    ...Platform.select({
      ios: {
        shadowColor: colors.linguaPurple,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 14,
      },
      android: { elevation: 10 },
    }),
  },
  aiActive: {
    ...Platform.select({
      ios: {
        shadowColor: colors.linguaPurple,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.65,
        shadowRadius: 18,
      },
      android: { elevation: 14 },
    }),
  },
});

const pressable = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 68,
    gap: 2,
  },
});

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="learn" />
      <Tabs.Screen name="ai-teacher" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
