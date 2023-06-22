/* eslint-disable import/no-anonymous-default-export */
import { DeveloperFactory } from "@/app/back-end/developer/developer.factory";
import { GithubApiClient } from "@/app/back-end/github-issues/github-issues.client";
import { OpenAIApiClient } from "@/app/back-end/open-ai/open-ai.client";
import { OpenAiResponse } from "@/app/back-end/open-ai/open-ai.response";
import { QuestionBuilder } from "@/app/back-end/question/question.builder";
import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const configuration = new Configuration({
        organization: process.env.OPENAI_API_ORGANIZATION,
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    try {
        const developers = DeveloperFactory.medusaTeam();
        const numberOfIssuesPerDeveloper = 1;
        const gitHubIssues = await GithubApiClient.getGitHubIssues(['api']);
    
        const questionBuilder = new QuestionBuilder(developers, gitHubIssues, numberOfIssuesPerDeveloper);
        const question = questionBuilder.question;
    
        const resultFromOpenAi = await OpenAIApiClient.getResult(question);

        res.status(200).json(JSON.parse(resultFromOpenAi));
    } catch (error) {
        res.status(404).json({ error: (error as Error).message });
    }
};