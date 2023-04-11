import { bubbleSort, removeDuplicate } from "@/app/utils";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  let { array } = res;
  array = removeDuplicate(array);
  array = bubbleSort(array);
  return NextResponse.json({ array });
}
