import { GoogleGenAI } from "@google/genai";

const getClient = () => {
    const apiKey = process.env.API_KEY || '';
    if (!apiKey) {
        console.warn("API Key not found in environment.");
    }
    return new GoogleGenAI({ apiKey });
};

export const generateBlogPost = async (topic: string, tone: string = 'professional'): Promise<{ title: string; content: string; excerpt: string } | null> => {
    const ai = getClient();
    if (!process.env.API_KEY) return null;

    try {
        const model = 'gemini-2.5-flash';
        const prompt = `
            Write a blog post for a high-end digital marketing agency "WEBHOUSE MEDIA".
            Topic: ${topic}
            Tone: ${tone}
            
            Return ONLY a JSON object with the following keys:
            - title: Catchy, SEO-optimized title.
            - excerpt: A 2-sentence summary.
            - content: The full blog post body in HTML format (use <p>, <h2>, <ul>, <li> tags). Keep it around 300 words.
        `;

        const response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: {
                responseMimeType: "application/json"
            }
        });

        const text = response.text;
        if (!text) return null;
        
        return JSON.parse(text);

    } catch (error) {
        console.error("Gemini generation error:", error);
        return null;
    }
};

export const generateSEOMeta = async (pageContent: string): Promise<{ title: string; description: string } | null> => {
    const ai = getClient();
    if (!process.env.API_KEY) return null;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Generate an SEO Title (max 60 chars) and Meta Description (max 160 chars) for a digital agency page with this content summary: ${pageContent}. Return JSON with keys: title, description.`,
            config: { responseMimeType: "application/json" }
        });
        return JSON.parse(response.text || '{}');
    } catch (e) {
        console.error(e);
        return null;
    }
}