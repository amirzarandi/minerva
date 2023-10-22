import openai from '@/app/utils/openai';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "What is 2+2",
    max_tokens: 30,
  });
  const responseText = completion.choices[0].text; 
  
  res.status(200).json({responseText});
}