import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Generate text
export async function generateText(prompt: string, options?: { model?: string; maxTokens?: number }) {
  try {
    const response = await openai.chat.completions.create({
      model: options?.model || 'gpt-4-turbo-preview',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: options?.maxTokens || 1024,
    });
    return response.choices[0].message.content;
  } catch (error: any) {
    throw new Error(`AI error: ${error?.message || 'Unknown error'}`);
  }
}

// Stream text
export async function streamText(prompt: string) {
  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    });
    return stream;
  } catch (error: any) {
    throw new Error(`Stream error: ${error?.message || 'Unknown error'}`);
  }
}

// Generate image
export async function generateImage(prompt: string) {
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      size: '1024x1024',
    });
    return response.data[0].url;
  } catch (error: any) {
    throw new Error(`Image error: ${error?.message || 'Unknown error'}`);
  }
}
