import { NextApiRequest, NextApiResponse } from "next";

let articles: { title: string; content: string }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const newArticle = { title, content };
    articles.push(newArticle);
    return res.status(201).json(newArticle);
  } else if (req.method === "GET") {
    return res.status(200).json(articles);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}