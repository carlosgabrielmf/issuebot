import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { OpenAiResponse } from "../back-end/open-ai/open-ai.response";

const OpenAiIssuesResult: React.FC = () => {
    const [data, setData] = useState<OpenAiResponse[]>([]);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/open-ai");
                if (response.ok) {
                    const jsonData = JSON.parse(await response.json());
                    setData(jsonData as unknown as OpenAiResponse[]);
                    console.log(jsonData);
                }
            } catch (error) {
                console.log(error);
            }
        };
 
        fetchData();
    }, []);

    return (
        <div>
            {Array.from(data).map((result, index) => (
                <div key={index}>
                    <Typography variant="h5" component="div">
                        {result.developer}
                    </Typography>
                    <Box>
                        <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {result.title}
                            </Typography>
                            <Typography variant="body2">{""}</Typography>
                        </CardContent>
                        <CardActions>
                            <Link href={result.url} target="blank"><Button size="small">Check issue!</Button></Link>
                        </CardActions>
                        </Card>
                    </Box>
                </div>
            ))}
        </div>
    );
};

export default OpenAiIssuesResult;
