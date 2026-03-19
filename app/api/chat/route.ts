import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY!;
const WEBHOOK_URL = process.env.WEBHOOK_URL!;

const SYSTEM_PROMPT = `Você é a assistente de vendas da Sena Works, uma agência digital que cria sites, sistemas com IA, apps, tráfego pago, criativos e IA para WhatsApp.

SEU OBJETIVO: Capturar o NOME, NÚMERO DE WHATSAPP e a IDEIA/NECESSIDADE do visitante da forma mais natural e rápida possível (em no máximo 3-4 trocas de mensagem).

REGRAS:
- Seja simpática, direta e profissional. Nada de enrolação.
- Use frases curtas. Máximo 2-3 frases por resposta.
- NUNCA invente preços exatos — diga que o time vai montar uma proposta personalizada.
- Se o visitante perguntar sobre serviços, responda brevemente e conduza para capturar os dados.
- Assim que tiver os 3 dados (nome, WhatsApp, ideia), agradeça e diga que o time entrará em contato em breve.

FLUXO IDEAL:
1. Visitante manda primeira mensagem → Responda sobre o assunto e pergunte o nome
2. Visitante dá o nome → Agradeça e peça o WhatsApp para enviar mais detalhes
3. Visitante dá o WhatsApp → Pergunte brevemente o que precisa (site? app? IA? tráfego?)
4. Visitante explica a ideia → Confirme que entendeu, agradeça e avise que o time vai entrar em contato

Se o visitante já fornecer mais de um dado de uma vez, não repita a pergunta — avance para o próximo dado que falta.

IMPORTANTE: Quando você já tiver os 3 dados, inclua EXATAMENTE esta tag no final da sua resposta (invisível ao usuário):
[LEAD_CAPTURED]{"nome":"NOME_AQUI","whatsapp":"NUMERO_AQUI","ideia":"IDEIA_AQUI"}[/LEAD_CAPTURED]`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://senaworks.com",
        "X-Title": "Sena Works Chat",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-001",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter error:", errorText);
      return NextResponse.json(
        { error: "Erro ao processar mensagem" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const aiContent = data.choices?.[0]?.message?.content || "Desculpe, tive um problema. Pode repetir?";

    // Check if lead was captured
    const leadMatch = aiContent.match(/\[LEAD_CAPTURED\](.*?)\[\/LEAD_CAPTURED\]/s);
    if (leadMatch) {
      try {
        const leadData = JSON.parse(leadMatch[1]);
        // Fire webhook in background
        fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: 1,
            nome: leadData.nome,
            whatsapp: leadData.whatsapp,
            ideia: leadData.ideia,
            source: "senaworks-chat-ia",
            timestamp: new Date().toISOString(),
          }),
        }).catch((err) => console.error("Webhook error:", err));
      } catch (e) {
        console.error("Lead parse error:", e);
      }
    }

    // Remove the lead tag from visible response
    const cleanContent = aiContent.replace(/\[LEAD_CAPTURED\].*?\[\/LEAD_CAPTURED\]/s, "").trim();

    return NextResponse.json({ content: cleanContent });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}