import { NextResponse } from "next/server";
import { z } from "zod";

const phoneRegex = /^(\+212|0)([ \-]?\d){9}$/;

const contactSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional().refine((value) => !value || phoneRegex.test(value), {
    message: "Téléphone marocain invalide"
  }),
  type_projet: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message trop court")
});

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // TODO: Integrate Resend email delivery with RESEND_API_KEY

  return NextResponse.json({ ok: true });
}
