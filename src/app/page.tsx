"use client"
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import DeveloperForm from "./components/developer-form";

const Page: React.FC = () => {
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
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <div className="header-image">
            <Image
              style={{marginTop: "-1rem"}}
              src="/assets/5.png"
              alt="Bot Saying Hello"
              width={300}
              height={300}
            />
          </div>
          <h3>How does this work?</h3>
          <ul className={styles.description}>
            <li>
              First, get ready for the best experience of finding an issue, fast
              and easy.
            </li>
            <li>
              Second, wait and leave the work to the IA. Pour yourself a coffee.
            </li>
            <li>
              Third, fill out the form, wait for the results and have fun.
            </li>
          </ul>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Image src="/assets/3.png" alt="Bot Finding" width={350} height={350} />
        <DeveloperForm />
      </div>
    </main>
  );
};

export default Page;
