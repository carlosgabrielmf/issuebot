"use client";
import React, { FormEvent, useState } from "react";
import styles from "../page.module.css";

interface FormData {
  name: string;
  level: string;
  role: string;
  skills: string;
  issues: string;
}

const DeveloperForm: React.FC = () => {
  const [developers, setDevelopers] = useState<FormData[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    level: "",
    role: "",
    skills: "",
    issues: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDevelopers([...developers, formData]);
    setFormData({
      name: "",
      level: "",
      role: "",
      skills: "",
      issues: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="level">Level:</label>
          <input
            type="text"
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
          />

          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />

          <label htmlFor="skills">Skills:</label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />

          <label htmlFor="issues">Issues per Developer:</label>
          <input
            type="number"
            id="issues"
            name="issues"
            value={formData.issues}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>

        <div className={styles.tablewrapper}>
          <table className={styles.fltable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Level</th>
                <th>Role</th>
                <th>Skills</th>
                <th>Issues</th>
              </tr>
            </thead>
            <tbody>
              {developers.map((developer, index) => (
                <tr key={index}>
                  <td>{developer.name}</td>
                  <td>{developer.level}</td>
                  <td>{developer.role}</td>
                  <td>{developer.skills}</td>
                  <td>{developer.issues}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DeveloperForm;