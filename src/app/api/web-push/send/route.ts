import { NextResponse } from "next/server";
import webpush from "web-push";
import fs from "fs";
import path from "path";

const SUBS_FILE_PATH = path.join(process.cwd(), "subscriptions.json");

// VAPID 설정
webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!,
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, message, url } = body;

    // 구독 정보 읽기
    if (!fs.existsSync(SUBS_FILE_PATH)) {
      return NextResponse.json(
        { message: "No subscriptions found" },
        { status: 200 },
      );
    }

    const fileContent = fs.readFileSync(SUBS_FILE_PATH, "utf8");
    const subscriptions = JSON.parse(fileContent);

    const payload = JSON.stringify({
      title: title || "새로운 소식",
      body: message || "지금 확인해보세요!",
      url: url || "/song",
      icon: "/song/assets/196x196.png",
    });

    // 모든 구독자에게 알림 발송
    const promises = subscriptions.map((subscription: any) =>
      webpush.sendNotification(subscription, payload).catch((err) => {
        if (err.statusCode === 410 || err.statusCode === 404) {
          // 만료된 구독은 나중에 삭제 로직 추가 필요 (지금은 로그만)
          console.log("Subscription expired:", subscription.endpoint);
          return null;
        }
        console.error("Error sending notification", err);
        return null;
      }),
    );

    await Promise.all(promises);

    return NextResponse.json({ success: true, count: subscriptions.length });
  } catch (error) {
    console.error("Error sending push:", error);
    return NextResponse.json(
      { error: "Failed to send notifications" },
      { status: 500 },
    );
  }
}
