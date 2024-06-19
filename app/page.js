import Image from 'next/image';
import classes from './page.module.css';
import friendsImg from '../assets/Floating_Island.png'

export default function HomePage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
        Countless Stories and Adventures Await! told by: <span className={classes.highlight}>Michael</span>
        </h1>
        <p>A dad that leads a balanced life from his professional career to personal interest, hobbies and family responsibilities. </p>
      </header>
        <main className={classes.main}>

        <ul className={classes.perks}>
          <li>
            <p>Find new friends & like-minded people</p>
            <Image src={friendsImg} alt='friendsImage' />
          </li>
        </ul>
      </main>
    </>
  );
}
