import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  const { data: suggestions, error } = await supabase
    .from("suggestions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ suggestions });
}

export async function POST(request: Request) {
  const body = await request.json();

  const { data, error } = await supabase
    .from("suggestions")
    .insert([
      {
        name: body.name || "익명",
        phone: body.phone,
        title: body.title,
        content: body.content,
      },
    ])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, result: data[0] });
}

export async function DELETE(request: Request) {
  const body = await request.json();

  let query = supabase.from("suggestions").delete();

  if (body.id) {
    query = query.eq("id", body.id);
  } else if (body.deleteAll) {
    query = query.neq("id", 0); // 모든 ID 대상
  } else {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
