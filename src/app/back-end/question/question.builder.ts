import { Developer } from '../developer/type/developer.type';
import { GithubIssuesResponse } from '../github-issues/response/github-issues.response';

export class QuestionBuilder {
    private _question: string;

    constructor(developers: Developer[], githubIssues: GithubIssuesResponse[], numberOfIssuesPerDeveloper: number) {
        this._question = this.build(developers, githubIssues, numberOfIssuesPerDeveloper);
    }

    private build(developers: Developer[], githubIssues: GithubIssuesResponse[], numberOfIssuesPerDeveloper: number): string {
        const profiles = `Having the following developer ${developers.length} profiles: ${JSON.stringify(developers).toString()}. `;
        const statement = 'Create only a JSON object as an output with elements which keys are: "developer", "title" and "url" ';
        const conditions = [
            `match and assign only ${String(numberOfIssuesPerDeveloper)} GitHub issues for each developer`,
            'every developer should have a different issue assigned',
            'return only a JSON array grouping by developers objects'
        ];
        const conditionStatement = `and following conditions: "${conditions.join(', ')}" from the following GitHub issues JSON: `;
    
        return `${profiles} ${statement} ${conditionStatement} ${JSON.stringify(githubIssues)}`;
    }

    get question(): string {
        return this._question;
    }
}
