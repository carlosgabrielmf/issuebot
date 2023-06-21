import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <>
      <header>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <h1 className={styles.headingText}>Hello, there.</h1>
            <h2>
              Welcome to IssueBot, a tool to find your most reliable collaboration
              on a big project.
            </h2>
          </div>
          <div className="header-image">
            <Image
              className={styles.botImage}
              src="/assets/4.png"
              alt="Bot Saying Hello"
              width={500}
              height={500}
            />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {/* this is the header */}
        {/* the form is here */}
        <div>

        </div>
      </main>
    </>
  );
}
