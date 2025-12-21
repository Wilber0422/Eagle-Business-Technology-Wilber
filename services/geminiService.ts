
import { GoogleGenAI, GenerateContentResponse, Modality } from "@google/genai";
import { ImageSize, AspectRatio } from "../types";

// Always use named parameter and direct process.env.API_KEY reference for initialization.
// A new instance is created per request to ensure the latest API key from selection is used.
const getAiClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateImage = async (prompt: string, size: ImageSize = ImageSize.OneK, ratio: AspectRatio = AspectRatio.OneOne): Promise<string> => {
  const ai = getAiClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: {
      parts: [{ text: prompt }]
    },
    config: {
      imageConfig: {
        aspectRatio: ratio,
        imageSize: size
      }
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error('No image generated');
};

export const editImage = async (prompt: string, base64Image: string, mimeType: string = 'image/png'): Promise<string> => {
  const ai = getAiClient();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { inlineData: { data: base64Image.split(',')[1], mimeType } },
        { text: prompt }
      ]
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error('Image editing failed');
};

export const generateVideoFromImage = async (prompt: string, base64Image: string, mimeType: string = 'image/png', ratio: '16:9' | '9:16' = '16:9'): Promise<string> => {
  const ai = getAiClient();
  
  let operation = await ai.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: prompt,
    image: {
      imageBytes: base64Image.split(',')[1],
      mimeType: mimeType,
    },
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio: ratio
    }
  });

  while (!operation.done) {
    // 10s delay between polling attempts for video operations
    await new Promise(resolve => setTimeout(resolve, 10000));
    operation = await ai.operations.getVideosOperation({ operation: operation });
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  if (!downloadLink) throw new Error('Video generation failed');

  // Must append API key when fetching MP4 bytes from download link
  const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
  const blob = await videoResponse.blob();
  return URL.createObjectURL(blob);
};

export const chatWithAi = async (prompt: string): Promise<string> => {
  const ai = getAiClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt
  });
  // Use .text property directly for extracting generated output
  return response.text || "No response";
};
