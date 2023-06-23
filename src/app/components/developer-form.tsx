"use client";
import React, { FormEvent, useState } from "react";
import styles from "../page.module.css";
import OpenAiIssuesResult from "./open-ai-issues-result";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Divider,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export interface Developer {
  name: string;
  level: string;
  role: string;
  skills: string;
}

const DeveloperForm: React.FC = () => {
  const [search, setSearch] = useState<boolean>(false);

  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [developer, setDeveloper] = useState<Developer>({
    name: "",
    level: "",
    role: "",
    skills: ""
  });

  const role = [
    {
      value: "Select",
      label: "Select",
    },
    {
      value: "Frontend",
      label: "Frontend",
    },
    {
      value: "Backend",
      label: "Backend",
    },
    {
      value: "Full-Stack",
      label: "Full-Stack",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDevelopers([...developers, developer]);
    setDeveloper({
      name: "",
      level: "",
      role: "",
      skills: ""
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDeveloper((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnClick = () => {
    if (developers.length > 0) {
      setSearch(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{ backgroundColor: "white", borderRadius: "5px", width: "90%" }}
      >
        {/* Enabezado */}
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
          }}
          variant="h3"
        >
          Find the issues. Good Luck!
        </Typography>
        <Divider
          sx={{
            height: "0.5rem",
            borderBottom: "2px solid",
            marginBottom: "1rem",
          }}
        />
        {/* Campos de entrada del formulario */}
        <FormControl sx={{ width: "100%", p: 2 }}>
          <TextField
            sx={{ my: "0.5rem" }}
            fullWidth
            required
            name="name"
            label="Developer name"
            variant="filled"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl sx={{ width: "100%", p: 2 }}>
          <InputLabel id="label-level">Level</InputLabel>
          <Select
            fullWidth
            required
            labelId="label-level"
            // label="Level"
            name="level"
            value={formData.level}
          >
            {/* Opciones del selector */}
            <MenuItem value="junior">Junior</MenuItem>
            <MenuItem value="middle">Middle</MenuItem>
            <MenuItem value="senior">Senior</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%", p: 2 }}>
          <InputLabel id="label-role">Role</InputLabel>
          <Select
            fullWidth
            required
            labelId="label-role"
            // label="Role"
            name="role"
            value={formData.role}
          >
            {/* Opciones del selector */}
            <MenuItem value="front-end">Front End</MenuItem>
            <MenuItem value="back-end">Back End</MenuItem>
            <MenuItem value="full-stack">Full-Stack</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%", p: 2 }}>
          <TextField
            sx={{ my: "0.5rem" }}
            fullWidth
            id="standard-multiline-static"
            label="Skills"
            multiline
            rows={4}
            defaultValue="javascript, typescript"
            variant="standard"
          />
          {/* Botón de envío */}
          <Button
            sx={{ my: "0.5rem" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Add developer
          </Button>
        </FormControl>
      </div>
      <TableContainer sx={{ width: "90%" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>x</TableCell>
              <TableCell>x</TableCell>
              <TableCell>x</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
};

export default DeveloperForm;
