import _ from "lodash";
import { ChatGPTAPI } from "chatgpt";
import extractor from "unfluff";
import {
  extract,
} from "@extractus/article-extractor";

const api = new ChatGPTAPI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

export default async function handler(req, res) {
  const { url } = req.query
  const response = await extract(url);
  const content = response.content;
  const html = content
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/(\r\t|\t|\r)/gm, "");
  const text = extractor(html);
  if (!_.get(text, 'text')) {
    res.status(404).json({ text: 'No text found' })
  }
  const chat = await api.sendMessage(
    text.text,
    {
      promptPrefix: `I want you to act like a news article summarizer. I will input text from a news article and your job is to convert it into an useful summary of a few sentences. Do not repeat sentences and make sure all sentences are clear and complete:\n\n`,
    }
  );
  res.status(200).json({ data: { value: chat.text }});
}
