<wizard-report>
# PostHog post-wizard report

The wizard has completed a full PostHog analytics integration for the MultiLang Expo app. The SDK was installed (`posthog-react-native` + Expo peer dependencies), `app.json` was converted to `app.config.js` to expose PostHog config via `extras`, a singleton client was created at `lib/posthog.ts`, and the root layout was wrapped with `PostHogProvider` with manual screen tracking (Expo Router compatible) and automatic user identification via Clerk. Ten events were added across six files covering the complete user journey from onboarding through daily lesson engagement.

| Event | Description | File |
|---|---|---|
| `onboarding_get_started` | User taps the Get Started button on the onboarding screen, entering the sign-up funnel. | `app/onboarding.tsx` |
| `user_signed_up` | User completes email verification and successfully creates a new account. | `app/(auth)/sign-up.tsx` |
| `user_signed_in` | User successfully signs in with email and password. | `app/(auth)/sign-in.tsx` |
| `sso_sign_in_started` | User initiates a social SSO sign-in (Google or Apple) from the sign-in screen. | `app/(auth)/sign-in.tsx` |
| `sso_sign_up_started` | User initiates a social SSO sign-up (Google or Apple) from the sign-up screen. | `app/(auth)/sign-up.tsx` |
| `language_selected` | User confirms their chosen learning language and starts the learning journey. | `app/language-selection.tsx` |
| `home_continue_learning_tapped` | User taps the Continue Learning card on the home screen to resume their current lesson. | `app/(tabs)/index.tsx` |
| `home_plan_activity_tapped` | User taps an activity item in the Today's Plan section on the home screen. | `app/(tabs)/index.tsx` |
| `home_ai_video_call_tapped` | User taps the AI video call button on the home screen to start a speaking practice session. | `app/(tabs)/index.tsx` |
| `lesson_completed` | User completes a lesson, earning XP and advancing their progress. | `store/progressStore.ts` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/504990/dashboard/1823647)
- [User acquisition funnel (wizard)](https://us.posthog.com/project/504990/insights/9YdcfpaB)
- [New sign-ups over time (wizard)](https://us.posthog.com/project/504990/insights/I9qIYLLl)
- [Language selections by language (wizard)](https://us.posthog.com/project/504990/insights/5Bu6SlK5)
- [Lesson completions over time (wizard)](https://us.posthog.com/project/504990/insights/6sfI5ngB)
- [Home screen engagement (wizard)](https://us.posthog.com/project/504990/insights/1RbtjesY)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` to `.env.example` and any onboarding/bootstrap scripts so collaborators know what to set.
- [ ] Confirm the returning-visitor path also calls `identify` — the `ClerkIdentitySync` component in `app/_layout.tsx` fires on every app load when a Clerk session exists, so this should be covered, but verify it in a real device session.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
