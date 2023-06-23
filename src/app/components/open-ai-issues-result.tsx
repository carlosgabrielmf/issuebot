import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';
import { OpenAiResponse } from "../back-end/open-ai/response/open-ai.response";
import { DeveloperFactory } from "../back-end/developer/factory/developer.factory";
import { Developer as DeveloperForm } from "./developer-form";
import { Developer } from "../back-end/developer/type/developer.type";
import { getDeveloperLevelEnumFromString } from "../back-end/developer/enum/developer-level.enum";
import { getDeveloperRoleEnumFromString } from "../back-end/developer/enum/developer-role.enum";

type Issues = {
    title: string;
    url: string;
}

type DevelopersIssues = {
    name: string;
    issues: Issues[]
}

const OpenAiIssuesResult: React.FC<{developers: DeveloperForm[], searchFlag: boolean}> = (props) => {
    const [developerIssues, setDeveloperIssues] = useState<DevelopersIssues[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const developers: Developer[] = props.developers.map((developer) => {
                    return {
                        name: developer.name,
                        level: getDeveloperLevelEnumFromString(developer.level),
                        role: getDeveloperRoleEnumFromString(developer.role),
                        skills: developer.skills.toLowerCase().split(', ') ?? []
                    }
                })

                const data = {
                    number_issues_by_developers: 4,
                    developers: developers
                };

                const response = await fetch(`api/open-ai`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    const jsonData = JSON.parse(await response.json());
                    const formattedResult = jsonData as unknown as OpenAiResponse[];

                    const developers: DevelopersIssues[] = [];
                    const developerNames: string[] = [];
                    
                    formattedResult.forEach((element) => {
                        if (!developerNames.includes(element.developer)) {
                            developerNames.push(element.developer)
                        }
                    })

                    developerNames.forEach((name) => {
                        const issuesByDeveloperName = formattedResult.filter((result) => result.developer === name)
                        
                        const issuesGroupByDeveloper: Issues[] = issuesByDeveloperName.map((element) => {
                            return {
                                title: element.title, url: element.url
                            }
                        });

                        developers.push({name: name, issues: issuesGroupByDeveloper})
                    })

                    setDeveloperIssues(developers);
                }

                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
 
        if (props.searchFlag) {
            fetchData();
        }
    }, [props]);

    let loadingComponent; 
    if (loading) {
        loadingComponent = <Box sx={{ display: 'flex' }}><CircularProgress /></Box>
    }
    return (
        <Box>
            {loadingComponent}
            {Array.from(developerIssues).map((developer, index) => (
                <div key={index}>
                    <Typography variant="h5" component="div" align="center">
                        {developer.name}
                    </Typography>
                    {Array.from(developer.issues).map((issues, index) => (
                        <Box key={index} component="div" sx={{ p: 2 }}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ mb: 1.5 }}>
                                        {issues.title}
                                    </Typography>
                                    <CardActions>
                                        <Typography align="center">
                                            <Link href={issues.url} target="blank"><Button size="small">🧐 Check issue!</Button></Link>
                                        </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </div>
            ))}
        </Box>
    );
};

export default OpenAiIssuesResult;
