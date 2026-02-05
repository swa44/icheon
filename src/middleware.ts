import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";

  // 1. 송석준.이천.com (xn--3i4bljw2q.xn--hu5bi8g.com)
  if (host.includes("xn--3i4bljw2q")) {
    if (url.pathname === "/") {
      url.pathname = "/song";
      return NextResponse.rewrite(url);
    }
    if (!url.pathname.startsWith("/song")) {
      url.pathname = `/song${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // 2. 김재국.이천.com (xn--3e0bqpe42d.xn--hu5bi8g.com)
  if (host.includes("xn--3e0bqpe42d")) {
    if (url.pathname === "/") {
      url.pathname = "/kimjk";
      return NextResponse.rewrite(url);
    }
    if (!url.pathname.startsWith("/kimjk")) {
      url.pathname = `/kimjk${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

// 다음 경로는 미들웨어를 거치지 않도록 설정 (성능 최적화)
export const config = {
  matcher: [
    /*
     * 아래로 시작하는 모든 경로를 제외:
     * - api (API 경로)
     * - _next/static (정적 파일)
     * - _next/image (이미지 최적화 파일)
     * - favicon.ico (파비콘)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.json|.*\\.js|sw\\.js).*)",
  ],
};
