import { Developer } from './developer/developer';
import { DeveloperFactory } from './developer/developer.factory';
import { GithubApiClient } from './github-issues/github-issues.client';
import { OpenAIApiClient } from './open-ai/open-ai.client';
import { OpenAiResponse } from './open-ai/open-ai.response';
import { QuestionBuilder } from './question/question.builder';
import { FileRespository } from './resources/file.repository';


export async function main(topics: string[], numberOfIssuesPerDeveloper: number, developers: Developer[]): Promise<OpenAiResponse[]> {
    try {
        const gitHubIssues = await GithubApiClient.getGitHubIssues();
        // FileRespository.saveGithubIssues(gitHubIssues);
    
        const questionBuilder = new QuestionBuilder(developers, gitHubIssues, numberOfIssuesPerDeveloper);
        const question = questionBuilder.question;
        // FileRespository.saveOpenAiInput(question);
    
        const resultFromOpenAi = await OpenAIApiClient.getResult(question);
        // FileRespository.saveOpenAiOutput(resultFromOpenAi);
    
        return resultFromOpenAi as unknown as OpenAiResponse[];
    } catch (error) {
        console.log(error);

        return [];
    }
}
