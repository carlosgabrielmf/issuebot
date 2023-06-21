import Image from "next/image";
import styles from "./page.module.css";
import { DeveloperFactory } from "./back-end/developer/developer.factory";

const test = () => {};

export default async function Home() {
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
      <div>

      </div>
    </main>
  );
}
