import { NextRequest } from "next/server";
import { streamText } from "ai";
import { env } from "@/lib/env";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const prompt = messages?.[messages.length - 1]?.content ?? "";
  const systemPrompt = `Tu es WINBOX Copilot, assistant marketing & design. Reste concis et actionnable.`;

  const result = await streamText({
    model: env.AI_MODEL,
    provider: env.AI_PROVIDER as any,
    messages: [{ role: "system", content: systemPrompt }, ...(messages || [])],
    stream: { onFinish: () => {} },
  });

  return result.toAIStreamResponse();
}
