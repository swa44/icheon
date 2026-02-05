import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import webpush from "web-push";
import fs from "fs";
import path from "path";

// VAPID 설정 (환경변수가 있을 때만)
if (process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(
    "mailto:example@yourdomain.org",
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY,
  );
}

export const dynamic = "force-dynamic";

export async function GET() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  const body = await request.json();

  const { data, error } = await supabase
    .from("posts")
    .insert([
      {
        title: body.title,
        content: body.content,
        date: body.date,
        images: body.images || [],
      },
    ])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // 알림 발송 로직 (비동기로 실행)
  try {
    const { data: subs, error: subsError } = await supabase
      .from("push_subscriptions")
      .select("subscription");

    if (!subsError && subs && subs.length > 0) {
      const payload = JSON.stringify({
        title: body.title || "새로운 소식",
        body: "이천시 국회의원 송석준의 새로운 소식이 등록되었습니다.",
        url: "/song",
        icon: "/song/assets/196x196.png",
      });

      subs.forEach((row: any) => {
        webpush.sendNotification(row.subscription, payload).catch((err) => {
          // 만료된 토큰인 경우 DB에서 삭제하는 로직을 추가할 수 있습니다.
          console.error("Push send error", err);
        });
      });
    }
  } catch (pushError) {
    console.error("Push notification logic error:", pushError);
  }

  return NextResponse.json({ success: true, post: data[0] });
}

export async function PUT(request: Request) {
  const body = await request.json();

  const { error } = await supabase
    .from("posts")
    .update({
      title: body.title,
      content: body.content,
      date: body.date,
      images: body.images,
    })
    .eq("id", body.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
