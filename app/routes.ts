import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  // Home — / (public) : 로그인/회원가입 진입
  index("common/pages/home-page.tsx"),

  // Users — Auth (public)
  route("/login", "features/users/pages/login-page.tsx"),
  route("/signup", "features/users/pages/signup-page.tsx"),

  // Challenges
  ...prefix("challenges", [
    // Challenge Create — /challenges/new (user)
    route("/new", "features/challenges/pages/challenge-create-page.tsx"),

    // Invite Link (Manage) — /challenges/:id/invite (participant)
    // - 초대 링크 생성/복사/재발급/만료 등 “보내는 사람”용 화면
    route("/:id/invite", "features/challenges/pages/challenge-invite-page.tsx"),

    // Challenge Dashboard — /challenges/:id (participant)
    route("/:id", "features/challenges/pages/challenge-dashboard-page.tsx"),

    // Daily Check-in — /challenges/:id/checkin (participant)
    route("/:id/checkin", "features/challenges/pages/daily-checkin-page.tsx"),

    // Feed/Activity — /challenges/:id/feed (participant)
    route("/:id/feed", "features/challenges/pages/challenge-feed-page.tsx"),

    // Chat — /challenges/:id/chat (participant)
    route("/:id/chat", "features/challenges/pages/challenge-chat-page.tsx"),

    // Progress — /challenges/:id/progress (participant)
    route(
      "/:id/progress",
      "features/challenges/pages/challenge-progress-page.tsx"
    ),

    // Results — /challenges/:id/results (participant)
    route(
      "/:id/results",
      "features/challenges/pages/challenge-results-page.tsx"
    ),
  ]),

  // Invite/Join — /join/:inviteCode (public -> user)
  // - inviteCode로 특정 챌린지를 조회하고, 로그인 필요 시 로그인 후 다시 돌아와 참가 처리
  route("/join/:inviteCode", "features/challenges/pages/invite-join-page.tsx"),

  // Users — Settings — /settings (user)
  route("/settings", "features/users/pages/settings-page.tsx"),
] satisfies RouteConfig;
