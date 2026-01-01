import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  AUTH_SECRET: z.string().min(10),
  OPENAI_API_KEY: z.string().min(10),
  AI_PROVIDER: z.string().default("openai"),
  AI_MODEL: z.string().default("gpt-4o"),
});

type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  AUTH_SECRET: process.env.AUTH_SECRET,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  AI_PROVIDER: process.env.AI_PROVIDER,
  AI_MODEL: process.env.AI_MODEL,
});
