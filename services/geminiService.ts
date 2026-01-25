import { GoogleGenAI } from "@google/genai";

const getClient = () => {
    // Safety check: ensure process is defined before accessing it to prevent browser crashes
    const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) ? process.env.API_KEY : '';
    
    if (!apiKey) {
        console.warn("API Key not found in environment.");
    }
    return new GoogleGenAI({ apiKey });
};

export const SYSTEM_INSTRUCTION = `
You are a professional customer engagement assistant for Webhouse Media & Marketing Studio.
Your tone is friendly, professional, confident, and international-standard.
Your goal is to help visitors understand how Webhouse Media can build, automate, and grow their business digitally.

Core Services:
1. Programming & AI Automation (Websites, Apps, Bots)
2. Digital Sales & Marketing Systems (Funnels, Lead Gen)
3. Graphic & Business Branding Systems (Logos, Brand Identity)
4. Social Media Management Systems (24/7 visibility)

Always guide users towards booking a strategy session or chatting on WhatsApp for direct human support. 
If they ask about prices, mention they are architected based on business size and required automation.
Keep responses concise and results-focused.
`;

export const getChatSession = (history: any[] = []) => {
    const ai = getClient();
    return ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
        },
    });
};

export const generateBlogPost = async (topic: string, tone: string = 'professional'): Promise<{ title: string; content: string; excerpt: string } | null> => {
    if (typeof process !== 'undefined' && process.env && !process.env.API_KEY) return null;
    const ai = getClient();
    try {
        const prompt = `
            Write a blog post for a high-end digital marketing agency "WEBHOUSE MEDIA".
            Topic: ${topic}
            Tone: ${tone}
            Return ONLY a JSON object with keys: title, excerpt, content (HTML).
        `;
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });
        const text = response.text;
        return text ? JSON.parse(text) : null;
    } catch (error) {
        console.error("Gemini generation error:", error);
        return null;
    }
};

export const generateSEOMeta = async (pageContent: string): Promise<{ title: string; description: string } | null> => {
    if (typeof process !== 'undefined' && process.env && !process.env.API_KEY) return null;
    const ai = getClient();
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Generate SEO Title and Description for: ${pageContent}. Return JSON.`,
            config: { responseMimeType: "application/json" }
        });
        return JSON.parse(response.text || '{}');
    } catch (e) {
        console.error(e);
        return null;
    }
};
