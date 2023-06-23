"use client";
import React, { FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import styles from "../page.module.css";
import OpenAiIssuesResult from "./open-ai-issues-result";

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
        <hr style={{color: "rgba(1, 65, 255, 0.3)"}}/>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Developer Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={developer.name}
            onChange={handleChange}
          />

          <label htmlFor="level">Level:</label>
          <input
            type="text"
            id="level"
            name="level"
            value={developer.level}
            onChange={handleChange}
          />

          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={developer.role}
            onChange={handleChange}
          />

          <label htmlFor="skills">Skills:</label>
          <textarea
            id="skills"
            name="skills"
            value={developer.skills}
            onChange={handleChange}
          />
          <button type="submit">Add developer</button>
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
          <Button disabled={developers.length===0} variant="contained" size="small" onClick={handleOnClick}>Search issues</Button>
        </div>
        <div className={styles.center}>
          <OpenAiIssuesResult developers={developers} searchFlag={search} />
        </div>
      </div>
    </section>
  );
};

export default DeveloperForm;
