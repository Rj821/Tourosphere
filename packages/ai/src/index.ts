import OpenAI from "openai";

type ChatOptions = { system?: string; messages: { role: "user" | "assistant" | "system"; content: string }[] };

export async function chat(options: ChatOptions) {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [options.system ? { role: "system", content: options.system } : null, ...options.messages].filter(Boolean) as any
  });
  return response.choices[0]?.message?.content ?? "";
}