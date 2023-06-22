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
        const numberOfIssuesPerDeveloper = 4;
        const gitHubIssues = await GithubApiClient.getGitHubIssues();
    
        const questionBuilder = new QuestionBuilder(developers, gitHubIssues, numberOfIssuesPerDeveloper);
        const question = questionBuilder.question;
    
        const resultFromOpenAi = await OpenAIApiClient.getResult(question);
        res.status(200).json(JSON.parse(resultFromOpenAi));

        // res.status(200).json(JSON.stringify([
        //     {
        //         "developer": "Carlos",
        //         "title": "[Snowflake] Add Regex to Schemas - Failed Schemas",
        //         "url": "https://github.com/PipedreamHQ/pipedream/issues/6994"
        //     },
        //     {
        //         "developer": "Carlos",
        //         "title": "Avatar CSS class verification",
        //         "url": "https://github.com/themesberg/flowbite-react/issues/824"
        //     },
        //     {
        //         "developer": "Ana",
        //         "title": "Keynote speaker Bio Page",
        //         "url": "https://github.com/pythonindia/inpycon2023/issues/91"
        //     },
        //     {
        //         "developer": "Ana",
        //         "title": "Implement Unit Tests for flowbite-react component styles verification",
        //         "url": "https://github.com/themesberg/flowbite-react/issues/821"
        //     },
        //     {
        //         "developer": "Sandra",
        //         "title": "Adding github actions for pipline",
        //         "url": "https://github.com/rawasaditya/SocioPedia/issues/3"
        //     },
        //     {
        //         "developer": "Sandra",
        //         "title": "Before release, check all licenses",
        //         "url": "https://github.com/DeutscheModelUnitedNations/munify/issues/31"
        //     },
        //     {
        //         "developer": "Salva",
        //         "title": "Remove @aws-sdk/client-secrets-manager dependency from backend",
        //         "url": "https://github.com/Infisical/infisical/issues/678"
        //     },
        //     {
        //         "developer": "Salva",
        //         "title": "Publish \"Changing Release-Channels\" blog ",
        //         "url": "https://github.com/meshery/meshery.io/issues/1207"
        //     }
        // ]));
    } catch (error) {
        res.status(404).json({ error: (error as Error).message });
    }
};