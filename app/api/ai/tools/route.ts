import { NextRequest, NextResponse } from "next/server";

const templates = {
  ads: "Génère 3 angles Meta + scripts 30s.",
  seo: "Analyse la page et propose 5 optimisations.",
  brief: "Structure un brief design avec moodboard.",
  content: "Rédige un post LinkedIn en français et anglais.",
};

export async function POST(req: NextRequest) {
  const { type, payload } = await req.json();
  const template = templates[type as keyof typeof templates] ?? "Décris ton besoin.";
  const text = `Outil: ${type}\nTemplate: ${template}\nContexte: ${payload ?? "Aucun"}`;
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(text));
      controller.close();
    },
  });
  return new Response(stream, { headers: { "Content-Type": "text/plain" } });
}

export async function GET() {
  return NextResponse.json({ templates });
}
