import OpenAI from "openai";
import { NextResponse } from "next/server";
import { buildPrompt } from "@/lib/formatter";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  const { answers } = await req.json();
  const { prompt, missingRequired } = buildPrompt(answers);

  if (missingRequired.length > 0) {
    return NextResponse.json(
      { error: "Missing required answers", missingRequired },
      { status: 400 }
    );
  }

  const image = await client.images.generate({
    model: "gpt-image-1.5",
    prompt,
    size: "1024x1024"
  });

  return NextResponse.json({
    prompt,
    image: image.data[0].b64_json
  });
}
