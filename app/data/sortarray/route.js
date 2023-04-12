import { bubbleSort, removeDuplicate } from "@/app/utils";
import { NextResponse } from "next/server";

export async function POST(request) {
  let { array } = await request.json();
  array = removeDuplicate(array);
  array = bubbleSort(array);
  return NextResponse.json({ array });
}
