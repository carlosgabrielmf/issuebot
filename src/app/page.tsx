import Image from 'next/image'
import styles from './page.module.css'
import { main } from './back-end/app'
import { DeveloperFactory } from './back-end/developer/developer.factory';

const test = () => {

}

export default async function Home() {
  const medusaTeam =  DeveloperFactory.medusaTeam();    
  // const data = await main(['api'], 1, medusaTeam);

  // console.log(data);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>
    </main>
  )
}
