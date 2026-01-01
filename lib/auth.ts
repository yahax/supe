import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { env } from "@/lib/env";

const credentialSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

const users = [
  { id: "1", email: "admin@winbox.ma", password: "admin123", role: "admin" as const },
  { id: "2", email: "client@winbox.ma", password: "client123", role: "client" as const },
];

export const { auth, signIn, signOut, handlers } = NextAuth({
  secret: env.AUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (raw) => {
        const parsed = credentialSchema.safeParse(raw);
        if (!parsed.success) return null;
        const user = users.find(
          (u) => u.email === parsed.data.email && u.password === parsed.data.password,
        );
        if (!user) return null;
        return { id: user.id, email: user.email, role: user.role } as any;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string | undefined;
      }
      return session;
    },
  },
});
