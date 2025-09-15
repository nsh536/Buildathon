const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
    });
    res.json({ text: completion.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
