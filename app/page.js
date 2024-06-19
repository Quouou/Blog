import Image from 'next/image';
import styles from './page.module.css';
import friendsImg from '../assets/Floating_Island.png'

export default function HomePage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
        Follow for tips and experiences on a balanced life of <span className={styles.highlight}> Work, Play</span> and <span className={styles.highlight}>Family</span>
        </h1>
      </header>
        <main className={styles.main}>

        <ul className={styles.perks}>
          <li>
            <p>Find new friends & like-minded people</p>
            <Image src={friendsImg} alt='friendsImage' />
          </li>
        </ul>
      </main>
    </>
  );
}
