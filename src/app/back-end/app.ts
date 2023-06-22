import { Developer } from './developer/type/developer.type';
import { DeveloperFactory } from './developer/factory/developer.factory';
import { GithubApiClient } from './github-issues/client/github-issues.client';
import { OpenAIApiClient } from './open-ai/client/open-ai.client';
import { OpenAiResponse } from './open-ai/response/open-ai.response';
import { QuestionBuilder } from './question/question.builder';


export async function main(topics: string[], numberOfIssuesPerDeveloper: number, developers: Developer[]): Promise<OpenAiResponse[]> {
    try {
        const gitHubIssues = await GithubApiClient.getGitHubIssues();
    
        const questionBuilder = new QuestionBuilder(developers, gitHubIssues, numberOfIssuesPerDeveloper);
        const question = questionBuilder.question;
    
        const resultFromOpenAi = await OpenAIApiClient.getResult(question);
    
        return resultFromOpenAi as unknown as OpenAiResponse[];
    } catch (error) {
        console.log(error);

        return [];
    }
}
