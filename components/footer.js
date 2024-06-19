import Image from 'next/image';
import styles from '../components/footer.module.css';
import  facebookLogo from '../assets/social_facebook_fb_.png'
import instagramLogo from '../assets/instagram_black_logo_icon_.png'
import mailLogo from '../assets/1490129331-rounded07_.png'
import tiktokLogo from '../assets/tiktok_logo_icon.png'
import Link from 'next/link';

    

export default function Footer(){
    return (
        <footer className={styles.footer}>
        <div className={styles.image}>
               <Link href='' ><Image src={facebookLogo} alt="fbLogo" width={40} /> </Link>
               <Link href=''><Image src={instagramLogo} alt="instagramLogo" width={40} className={styles.indivImage} /></Link>
               <Link href=''><Image src={mailLogo} alt="mailLogo" width={40}  className={styles.indivImage}/> </Link>
               <Link href=''><Image src={tiktokLogo} alt="tiktokLogo" width={40}  className={styles.indivImage}/> </Link>
        </div>
        <div className={styles.paragraph}>
            <p>© 2024 Through The Blog </p>
        </div>
        </footer>
    )
}