import Image from 'next/image';
import styles from './page.module.css';
import friendsImg from '../assets/Floating_Island.png'

export default function HomePage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
        Follow for insights and tips on balancing<span className={styles.highlight}> Work, Hobbies</span> and <span className={styles.highlight}>Family life</span>
        </h1>
      </header>
        <main className={styles.main}>

        <ul className={styles.perks}>
          <li>
            <p>Discover new friends and connect with like-minded individuals.</p>
            <Image src={friendsImg} alt='friendsImage' />
          </li>
        </ul>
      </main>
    </>
  );
}
