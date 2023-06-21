"use client";
import React from "react"
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { OpenAiResponse } from "../back-end/open-ai/open-ai.response"

const OpenAiIssuesResult: React.FC<OpenAiResponse[]> = (result: OpenAiResponse[]) => {
    return (
        <div>
            <Typography variant="h5" component="div">
                Developer
            </Typography>
            <Box>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Titulo issue
                        </Typography>
                        <Typography variant="body2">
                            Lorem ipsum...
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Issue URL</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}

export default OpenAiIssuesResult