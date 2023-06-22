import fetch from 'node-fetch';
import { GithubIssuesResponse } from './github-issues.response';
import { FileRespository } from '../resources/file.repository';

interface GitHubIssueResponseRow {
    items: [
        {
            html_url: string,
            title: string,
            body: string | null
        }
    ]
}

export class GithubApiClient {    
    static async getGitHubIssues(topics: string[]): Promise<GithubIssuesResponse[]> {
        const page = 1;
        const maxNumberOfIssues = 30;
        const query = `language%3AJavaScript+language%3ATypeScript+label%3A"good+first+issue"+label%3A"help+wanted"+state%3Aopen+${topics.join('+')}`;
    
        const gitHubUrl = `https://api.github.com/search/issues?q=${query}&per_page=${maxNumberOfIssues}&page=${page}&s=updated&o=desc&state=open`;
        console.log('Calling GitHub...', gitHubUrl);
    
        const response = await fetch(gitHubUrl);
        const data = (await response.json()) as GitHubIssueResponseRow;
    
        const gitHubIssues = data.items.map((issue) => new GithubIssuesResponse(issue.html_url, issue.title, issue.body?.substring(0, 200) ?? ''));
        
        return gitHubIssues;
    }
}
