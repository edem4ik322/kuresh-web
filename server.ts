import "dotenv/config";
import express from "express";
import { GoogleGenAI } from "@google/genai";
import type { Content } from "@google/genai";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const sessions = new Map<string, Content[]>();

app.post("/api/chat", async (req, res) => {
  const { message, sessionId } = req.body;

  if (!message || typeof message !== "string") {
    res.status(400).json({ error: "message is required" });
    return;
  }

  const id = sessionId || "default";

  if (!sessions.has(id)) {
    sessions.set(id, []);
  }

  const history = sessions.get(id)!;

  try {
    const chat = ai.chats.create({
      model: "gemini-2.0-flash",
      history: [...history],
      config: {
        systemInstruction: "Ты — помощник спортивной школы № 1 города Симферополь. Отвечай кратко, по делу и на русском языке. Твоя задача — помогать посетителям сайта с вопросами о школе, секциях, тренерах, документах и записи.",
      },
    });

    const response = await chat.sendMessage({ message });
    const text = response.text ?? "Извините, не удалось получить ответ.";

    history.push({ role: "user", parts: [{ text: message }] });
    history.push({ role: "model", parts: [{ text }] });

    if (history.length > 40) {
      history.splice(0, history.length - 40);
    }

    res.json({ reply: text });
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: "Ошибка при получении ответа от Gemini" });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
  app.get("*", (_req, res) => {
    res.sendFile("dist/index.html", { root: "." });
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
