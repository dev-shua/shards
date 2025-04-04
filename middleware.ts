// export { auth as middleware } from "@/lib/auth";

import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.next();
}
