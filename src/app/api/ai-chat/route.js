import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message, context } = await req.json();
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ reply: 'OpenAI API key not set.' }, { status: 500 });
    }
    if (!message) {
      return NextResponse.json({ reply: 'No message provided.' }, { status: 400 });
    }

    // Prepare messages for OpenAI (system prompt + user message)
    const messages = [
      {
        role: 'system',
        content: 'You are a helpful assistant for UK tax questions. Answer clearly and concisely. If context is provided, use it.'
      },
      ...(context ? [{ role: 'system', content: `Context: ${JSON.stringify(context)}` }] : []),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
        max_tokens: 256,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      return NextResponse.json({ reply: error.error?.message || 'OpenAI API error.' }, { status: 500 });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || 'No response from AI.';
    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json({ reply: 'Server error: ' + (err?.message || err) }, { status: 500 });
  }
} 