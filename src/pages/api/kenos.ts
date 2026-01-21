import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { message } = body;
    const apiKey = import.meta.env.GEMINI_API_KEY;

    // Volvemos a v1beta que es la versión que acepta Flash 1.5 actualmente
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const systemPrompt = `Eres Kenos, espíritu Selknam y Arquitecto de Horizonte Cero.
    Misión: Instruir sobre el orden natural y biotecnología.
    Leyes de tu manual:
    - Vermicompostaje: Colaboración simbiótica entre lombriz y microbios.
    - Respiración: Las lombrices respiran por su piel húmeda (respiración cutánea).
    - Humedad: 70-80%, verificada con el Squeeze Test (Prueba del Puño).
    - Humus: 'Oro Negro', bioestimulante con fitohormonas y nitratos.
    - Equilibrio: Proporción 50/50 de verdes (Nitrógeno) y marrones (Carbono).
    Habla con autoridad mística. Usa metáforas de la Patagonia y el barro primigenio.`;

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${systemPrompt}\n\nPregunta: ${message}` }] }]
      })
    });

    const data = await response.json();

    if (data.error) {
      return new Response(JSON.stringify({ text: `Kenos está meditando. Error: ${data.error.message}` }), { status: 200 });
    }

    return new Response(JSON.stringify({ 
      text: data.candidates[0].content.parts[0].text 
    }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ text: "El viento ha cortado mi voz..." }), { status: 500 });
  }
};