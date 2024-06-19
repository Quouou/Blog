'use client'

import Image from 'next/image';
import logoImg from '../assets/Gold_logo.png';
import Link from 'next/link';
import style from '../components/main-header.module.css';

export default function MainHeader() {
  return (
    <> 
        <header id="main-header">
        <nav>
            <ul> 
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </nav>
          <div id="logo"> <br/>
          <Link href="/">
              <Image src={logoImg} alt="logo" width={150} /> 
          </Link>
          </div>
          <nav>
            <ul> 
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>
    </>
  );
}