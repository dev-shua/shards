import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db/prisma";
import { getUserTables } from "@/lib/table/getUserTables";
import { generateTableSlug } from "@/lib/utils/slug";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  console.log("DEBUG SESSION POST:", session);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { name, description } = body;

  if (!name) {
    return NextResponse.json({ error: "Missing table name" }, { status: 400 });
  }

  const slug = generateTableSlug(name);

  const table = await prisma.table.create({
    data: {
      name,
      slug,
      description,
      ownerId: session.user.id,
    },
  });

  return NextResponse.json(table, { status: 201 });
}

export async function GET() {
  const session = await auth();
  console.log("DEBUG SESSION GET:", session);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const allTables = getUserTables(userId);

  return NextResponse.json(allTables);
}
