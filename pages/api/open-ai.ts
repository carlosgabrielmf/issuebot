/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // const configuration = new Configuration({
    //     organization: process.env.OPENAI_API_ORGANIZATION,
    //     apiKey: process.env.OPENAI_API_KEY,
    // });

    // const openai = new OpenAIApi(configuration);
    // try {
    //     const response = await openai.createChatCompletion({
    //         model: 'gpt-3.5-turbo',
    //         messages: [{role: 'user', content: 'como estás?'}],
    //     });

    //     res.status(200).json([{developer: 'salva', title: 'hey', url: 'https://google.es'}]);
    // } catch (error) {
    //     res.status(404).json({ error: (error as Error).message });
    // }
    res.status(200).json([{developer_name: 'salva', title: 'hey', url: 'aa'}]);
};