"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const result = await signIn("credentials", { redirect: false, email, password });
    if (result?.ok) {
      router.push("/dashboard");
    } else {
      setError("Identifiants invalides");
    }
  }

  return (
    <div className="section-shell max-w-xl">
      <Card>
        <h1 className="mb-4 text-2xl font-bold">Connexion sécurisée</h1>
        <form className="space-y-3" onSubmit={submit}>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" aria-label="Email" />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            type="password"
            aria-label="Mot de passe"
          />
          <Button type="submit" className="w-full">
            Se connecter
          </Button>
          {error && <p className="text-sm text-red-300">{error}</p>}
        </form>
      </Card>
    </div>
  );
}
