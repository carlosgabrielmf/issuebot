import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { OpenAiResponse } from "../back-end/open-ai/open-ai.response";
import { title } from "process";
import { url } from "inspector";

type Issues = {
    title: string;
    url: string;
}

type DevelopersIssues = {
    name: string;
    issues: Issues[]
}

const OpenAiIssuesResult: React.FC = () => {
    const [data, setData] = useState<OpenAiResponse[]>([]);
    const [developerIssues, setDeveloperIssues] = useState<DevelopersIssues[]>([])
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`api/open-ai`);
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
                    console.log(developerNames)

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
                    console.log(developers);
                }
            } catch (error) {
                console.log(error);
            }
        };
 
        fetchData();
    }, []);

    return (
        <div>
            {Array.from(developerIssues).map((developer, index) => (
                <div key={index}>
                    <Typography variant="h5" component="div">
                        {developer.name}
                    </Typography>
                    {Array.from(developer.issues).map((issues, index) => (
                        <Box key={index}>
                            <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {issues.title}
                                </Typography>
                                <Typography variant="body2">{""}</Typography>
                            </CardContent>
                            <CardActions>
                                <Link href={issues.url} target="blank"><Button size="small">Check issue!</Button></Link>
                            </CardActions>
                            </Card>
                        </Box>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default OpenAiIssuesResult;
