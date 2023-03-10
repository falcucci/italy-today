import _ from "lodash";
import { ChatGPTAPI } from "chatgpt";
import extractor from "unfluff";
import { extract } from "@extractus/article-extractor";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { promiseHandler, prefix } from "../../utils";

const api = new ChatGPTAPI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

export default async function handler(req, res) {
  const { url } = req.query;
  const [err, response] = await promiseHandler(extract(url));
  if (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: getReasonPhrase(StatusCodes.BAD_REQUEST),
      message: err.message,
    });
  }
  const content = response.content;
  const html = content
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(/(\r\t|\t|\r)/gm, "");

  const text = extractor(html);
  const { text: article } = text;
  if (!article) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: getReasonPhrase(StatusCodes.BAD_REQUEST),
      message: "No article found",
    });
  }
  const [error, result] = await promiseHandler(
    api.sendMessage(article, {
      promptPrefix: prefix,
    })
  );
  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: getReasonPhrase(StatusCodes.BAD_REQUEST),
      message: error.message,
    });
  }
  const { text: summary } = result;
  return res.status(StatusCodes.OK).json({ summary });
}
