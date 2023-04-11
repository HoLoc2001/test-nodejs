import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ msg: "Wellcome to NextJS from Ho Tan Loc" });
}
