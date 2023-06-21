"use client";
import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { OpenAiResponse } from "../back-end/open-ai/open-ai.response";

const OpenAiIssuesResult: React.FC<{results: OpenAiResponse[]}> = (props) => {
  return (
    <div>
      {Array.from(props.results).map((result, index) => (
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
