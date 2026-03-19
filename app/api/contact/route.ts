import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(req: NextRequest) {
  try {
    const { nome, whatsapp, ideia } = await req.json();

    if (!nome?.trim() || !whatsapp?.trim() || !ideia?.trim()) {
      return NextResponse.json({ error: "Campos obrigatórios" }, { status: 400 });
    }

    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: 2,
        nome: nome.trim(),
        whatsapp: whatsapp.trim(),
        ideia: ideia.trim(),
        source: "senaworks-form-contato",
        timestamp: new Date().toISOString(),
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}