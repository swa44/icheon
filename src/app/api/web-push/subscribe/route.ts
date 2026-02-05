import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// 구독 정보를 저장할 파일 경로
const SUBS_FILE_PATH = path.join(process.cwd(), "subscriptions.json");

export async function POST(request: Request) {
  try {
    const subscription = await request.json();

    // 기존 구독 정보 읽기
    let subscriptions = [];
    if (fs.existsSync(SUBS_FILE_PATH)) {
      const fileContent = fs.readFileSync(SUBS_FILE_PATH, "utf8");
      subscriptions = JSON.parse(fileContent);
    }

    // 중복 확인 (endpoint 기준)
    const exists = subscriptions.some(
      (sub: any) => sub.endpoint === subscription.endpoint,
    );

    if (!exists) {
      subscriptions.push(subscription);
      // 파일에 저장
      fs.writeFileSync(SUBS_FILE_PATH, JSON.stringify(subscriptions, null, 2));
    }

    return NextResponse.json({ success: true, message: "Subscribed!" });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
