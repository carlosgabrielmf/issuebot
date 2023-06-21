'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { DeveloperFactory } from "./back-end/developer/developer.factory";
import { useState, FormEvent, createContext} from 'react';


interface FormData {
  name: string;
  level: string;
  role: string;
  skills: string;
  issues: string;
}
const test = () => {};

export default async function Home() {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    level: '',
    role: '',
    skills: '',
    issues: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  
  const medusaTeam = DeveloperFactory.medusaTeam();
  // const data = await main(['api'], 1, medusaTeam);

  // console.log(data);

  return (
    <main className={styles.main}>
      {/* this is the header */}
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <h1>Hello, there.</h1>
          <h2>
            Welcome to IssueBot, a tool to find your most reliable collaboration
            on a big project.
          </h2>
        </div>
        <div className="header-image">
          <Image
            src="/assets/4.png"
            alt="Bot Saying Hello"
            width={500}
            height={500}
          />
        </div>
      </div>
      {/* the form is here */}
      <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
        <input type="text" placeholder="Level" value={formData.level} onChange={(e) => setFormData({ ...formData, level: e.target.value })}/>
        <input type="text" placeholder="Role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}/>
        <input type="text" placeholder="Skills" value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value })}/>
        <input type="text"placeholder="Issues" value={formData.issues} onChange={(e) => setFormData({ ...formData, issues: e.target.value })}/>
        <button type="submit">Submit</button>
      </form>

      {/* Display the table with the form data */}
      <table className={styles.table}>
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
          <tr>
            <td>{formData.name}</td>
            <td>{formData.level}</td>
            <td>{formData.role}</td>
            <td>{formData.skills}</td>
            <td>{formData.issues}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </main>
  );
}
