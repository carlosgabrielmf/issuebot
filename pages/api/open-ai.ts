/* eslint-disable import/no-anonymous-default-export */
import { Developer } from "@/app/back-end/developer/type/developer.type";
import { GithubApiClient } from "@/app/back-end/github-issues/client/github-issues.client";
import { OpenAIApiClient } from "@/app/back-end/open-ai/client/open-ai.client";
import { QuestionBuilder } from "@/app/back-end/question/question.builder";
import { NextApiRequest, NextApiResponse } from "next";

type OpenAiRequest = {
    number_issues_by_developers: number,
    developers: Developer[]
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.status(405).json({ error: "Method Not Allowed" });
    }
    
    try {
        const request = req.body as OpenAiRequest;

        const gitHubIssues = await GithubApiClient.getGitHubIssues();
    
        const questionBuilder = new QuestionBuilder(request.developers, gitHubIssues, request.number_issues_by_developers);
        const question = questionBuilder.question;
    
        const resultFromOpenAi = await OpenAIApiClient.getResult(question);

        if (resultFromOpenAi.includes('a language model AI')) {
            res.status(404).json({ error: "Open AI call failed" });
        }

        const json = JSON.parse(resultFromOpenAi);
        res.status(200).json(json);
    } catch (error) {
        res.status(404).json({ error: (error as Error).message });
    }
};