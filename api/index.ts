
import express from 'express';
import helmet from 'helmet';
import Groq from "groq-sdk";
import dotenv from "dotenv";
import logRequest from '../server/services/logging';

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet())

// app.use(express.static('dist'));

app.get('/api/flashcards', async (req, res) => {
  const notes = req.query.notes as string;
  if (!notes) return res.status(400).json({ error: 'Notes parameter is required' });

  const prompt = `Generate 5 flashcards based on the following notes: \n\n
      ${notes}
      Format the flashcards as a JSON array with "question" and "answer" fields. Just return the JSON array, without any additional text or explanation.      
    `

  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "openai/gpt-oss-20b",
    })
    const result = response.choices[0].message.content || '[]';
    const startedIndex = result.indexOf('[');
    const endedIndex = result.lastIndexOf(']') + 1;
    const jsonString = result.substring(startedIndex, endedIndex);
    const flashcards = JSON.parse(jsonString);
    console.log('Generated flashcards:', flashcards);
    logRequest('/api/flashcards', { notes }, flashcards);
    return res.json({ flashcards });
  } catch (error) {
    console.error('Error parsing flashcards:', error);
    logRequest('/api/flashcards', { notes }, { error: 'Failed to parse flashcards' });
    return res.status(500).json({ error: 'Failed to parse flashcards' });
  }
});

app.get('/api/summarize', async (req, res) => {
  const notes = req.query.notes as string;

  if (!notes) return res.status(400).json({ error: 'Notes parameter is required' });

  const prompt = `Summarize the following text into 3-5 bullet points: \n\n
      ${notes}
    `
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "openai/gpt-oss-20b",
    });

    const result = response.choices[0].message.content;
    logRequest('/api/summarize', { notes }, { summary: result });
    return res.json({ summary: result });


  } catch (error) {
    console.error('Error generating content:', error);
    logRequest('/api/summarize', { notes }, { error: 'Failed to generate content' });
    return res.status(500).json({ error: 'Failed to generate content' });
  }
});

export default app
