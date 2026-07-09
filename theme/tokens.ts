// Design tokens — sourced from 01-design-system.png

export const colors = {
  // Primary
  linguaPurple: "#6C4EF5",
  linguaDeepPurple: "#5B3BF6",
  linguaBlue: "#4D8BFF",
  linguaGreen: "#21C16B",

  // Semantic
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",

  // Neutrals
  textPrimary: "#0D132B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const fontSize = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  bodyLarge: 16,
  bodyMedium: 14,
  bodySmall: 13,
  caption: 11,
} as const;

export const lineHeight = {
  h1: 1.2,
  h2: 1.3,
  h3: 1.3,
  h4: 1.4,
  bodyLarge: 1.6,
  bodyMedium: 1.6,
  bodySmall: 1.6,
  caption: 1.4,
} as const;
