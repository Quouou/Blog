'use client'

import Image from 'next/image';
import logoImg from '../assets/Gold_logo.png';
import Link from 'next/link';
import style from '../components/main-header.module.css';

export default function MainHeader() {
  return (
    <> 
        <header id="main-header">
          <div id="logo"> <br/>
          <Link href="/">
              <Image src={logoImg} alt="logo" /> 
             
          </Link>

          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>   
              <li>
                <Link href="/news">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>
    </>
  );
}