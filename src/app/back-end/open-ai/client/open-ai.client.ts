"use client"
import { Configuration, OpenAIApi } from 'openai';

export class OpenAIApiClient {
    static async getResult(question: string): Promise<string> {
        const configuration = new Configuration({
            organization: process.env.OPENAI_API_ORGANIZATION,
            apiKey: process.env.OPENAI_API_KEY,
        }); 
    
        const openai = new OpenAIApi(configuration);
        const chatCompletion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{role: 'user', content: question}],
          });
        
        return JSON.stringify(chatCompletion.data.choices[0].message?.content ?? '');
    }
}
