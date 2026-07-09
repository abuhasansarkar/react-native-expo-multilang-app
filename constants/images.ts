import mascotAuth from "@/assets/images/mascot-auth.png";
import mascotWelcome from "@/assets/images/mascot-welcome.png";
import mascotLogo from "@/assets/images/moscot-logo.png";
import earth from "@/assets/images/earth.png";
import palace from "@/assets/images/palace.png";
import treasure from "@/assets/images/treasure.png";
import streakFire from "@/assets/images/streak-fire.png";
import shoppingIcon from "@/assets/images/shopping-icon.png";

export const images = {
  mascotAuth,
  mascotWelcome,
  mascotLogo,
  earth,
  palace,
  treasure,
  streakFire,
  shoppingIcon,
} as const;

// Lesson icon mapping - using existing assets and placeholders
export const lessonIcons: Record<string, any> = {
  // Default/fallback
  default: mascotWelcome,
  
  // Themed lessons
  greetings: mascotWelcome,
  daily: earth,
  cafe: palace,
  travel: treasure,
  shopping: shoppingIcon,
  family: mascotAuth,
};

// Helper to get lesson icon based on title
export function getLessonIcon(lessonTitle: string): any {
  const title = lessonTitle.toLowerCase();
  
  if (title.includes("greeting") || title.includes("introduction")) {
    return lessonIcons.greetings;
  }
  if (title.includes("daily") || title.includes("life")) {
    return lessonIcons.daily;
  }
  if (title.includes("café") || title.includes("cafe")) {
    return lessonIcons.cafe;
  }
  if (title.includes("travel") || title.includes("direction")) {
    return lessonIcons.travel;
  }
  if (title.includes("shopping")) {
    return lessonIcons.shopping;
  }
  if (title.includes("family") || title.includes("friend")) {
    return lessonIcons.family;
  }
  
  return lessonIcons.default;
}
