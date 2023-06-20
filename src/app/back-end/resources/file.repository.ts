import fs from 'fs';
import { GithubIssuesResponse } from '../github-issues/github-issues.response';

const GITHUB_ISSUES_FILE = './src/resources/files/github-issues.json';
const OPEN_AI_INPUT = './src/resources/files/open-ai-input.json';
const OPEN_AI_OUTPUT = './src/resources/files/open-ai-output.json';

export class FileRespository {
    public static saveGithubIssues(githubIssues: GithubIssuesResponse[]): void {
        try {
            fs.writeFileSync(GITHUB_ISSUES_FILE, JSON.stringify(githubIssues));
        } catch (error) {
            console.log('Github issues not stored');
        }
    }

    public static saveOpenAiInput(input: string): void {
        try {
            fs.writeFileSync(OPEN_AI_INPUT, input);
        } catch (error) {
            console.log('Github issues not stored');
        }
    }

    public static saveOpenAiOutput(output: string): void {
        try {
            fs.writeFileSync(OPEN_AI_OUTPUT, output);
        } catch (error) {
            console.log('Github issues not stored');
        }
    }
    
    public static printOpenAiOutput(): void {
        console.log(JSON.parse(fs.readFileSync(OPEN_AI_OUTPUT, 'utf8')));
    }
}
