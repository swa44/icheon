import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const subscription = await request.json();

    // 중복 방지를 위해 subscription 전체를 jsonb로 저장
    const { error } = await supabase
      .from("push_subscriptions")
      .insert([{ subscription }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe API error:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
