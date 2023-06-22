import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { OpenAiResponse } from "../back-end/open-ai/open-ai.response";
import { DeveloperFactory } from "../back-end/developer/developer.factory";
import { main } from "../back-end/app";
import { Configuration, OpenAIApi } from "openai";

const OpenAiIssuesResult: React.FC = async () => {
    const [data, setData] = useState<OpenAiResponse[]>([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/open-ai`)
        .then((data) => {
            if (data.ok) {
                data.json().then((data) => {
                    setData(data as OpenAiResponse[]);
                    console.log(data)
                })
            }
        })
        .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            {Array.from(data).map((result, index) => (
                <div key={index}>
                <Typography variant="h5" component="div">
                    {result.developer_name}
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
                        <Button size="small">{result.url}</Button>
                    </CardActions>
                    </Card>
                </Box>
                </div>
            ))}
        </div>
    );
};

export default OpenAiIssuesResult;
