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
  const [numberOfIssues, setNumberOfIssues] = useState<number>(1);

  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [developer, setDeveloper] = useState<Developer>({
    name: "",
    level: "junior",
    role: "back-end",
    skills: ""
  });

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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDeveloper((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeNumberOfIssues = (event: React.ChangeEvent<HTMLSelectElement>) => setNumberOfIssues(Number(event.target.value))

  const handleOnClick = () => {
    if (developers.length > 0) {
      setSearch(true);
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2
          style={{
            fontSize: "1.7rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          className={styles.description}>
          Find the issues. Good Luck!
        </h2>
        <div className={styles.center}>
          <label htmlFor="number-of-issues">Number of issues per dev:&nbsp;</label>
          <select id="number-of-issues" name="number-of-issues" defaultValue={1} value={numberOfIssues} onChange={handleChangeNumberOfIssues}>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
          </select>
        </div>
        <hr style={{color: "rgba(1, 65, 255, 0.3)"}}/>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formComponent}>
            <label htmlFor="name">Developer Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={developer.name}
              onChange={handleChange}
            />
          </div>
          
          <div className={styles.formComponent}>
              <label htmlFor="level">Level</label>
              <select id="level" defaultValue="junior" name="level" value={developer.level} onChange={handleChange}>
                <option value="junior"> Junior </option>
                <option value="middle"> Middle </option>
                <option value="senior"> Senior </option>
              </select>
              <br/>
              <label htmlFor="role">Role</label>
              <select id="role" name="role" defaultValue="back-end" value={developer.role} onChange={handleChange}>
                <option value="back-end"> Back-end </option>
                <option value="front-end"> Front-end </option>
                <option value="full-stack"> Full-stack </option>
            </select>
            <br/>
          </div>

          <div className={styles.formComponent}>
            <label htmlFor="skills">Skills:</label>
            <textarea
              id="skills"
              name="skills"
              value={developer.skills}
              required
              onChange={handleChange}
            />
          </div>
          <button disabled={search} type="submit">Add developer</button>
        </form>

        <div className={styles.tablewrapper}>
          <table className={styles.fltable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Level</th>
                <th>Role</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              {developers.map((developer, index) => (
                <tr key={index}>
                  <td>{developer.name}</td>
                  <td>{developer.level}</td>
                  <td>{developer.role}</td>
                  <td>{developer.skills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.center}>
          <Button disabled={developers.length===0||search} variant="contained" size="small" onClick={handleOnClick}>Search issues</Button>
        </div>
        <div className={styles.center}>
          <OpenAiIssuesResult developers={developers} searchFlag={search} numberOfIssues={numberOfIssues} />
        </div>
      </div>
    </section>
  );
};

export default DeveloperForm;
