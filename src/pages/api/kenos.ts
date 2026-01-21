import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { message } = body;

    // Usamos process.env para mayor compatibilidad con Node
    const apiKey = import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;

    const systemPrompt = `Eres Kenos, héroe cultural Selknam y Arquitecto de Horizonte Cero.
    Sabiduría técnica:
    - Vermicompostaje: Simbiosis lombriz-microbio.
    - Lombriz: Respiración cutánea, necesita 70-80% de humedad.
    - Humus: 'Oro Negro', bioestimulante vivo.
    - Ley 50/50: Igual volumen de Verdes y Marrones.
    Instruye con autoridad mística y metáforas patagónicas.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${systemPrompt}\n\nPregunta: ${message}` }] }]
      })
    });

    const data = await response.json();
    
    if (!data.candidates) {
      return new Response(JSON.stringify({ text: "Kenos está meditando... (Error de API)" }), { status: 500 });
    }

    return new Response(JSON.stringify({ 
      text: data.candidates[0].content.parts[0].text 
    }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ text: "El viento cortó la señal espiritual." }), { status: 500 });
  }
};