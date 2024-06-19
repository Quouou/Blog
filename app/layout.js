import MainHeader from '../components/main-header';
import styles from '../app/globals.css';
import Footer from '../components/footer';
export const metadata = {
  title: 'The Lifeline Blog',
  description: 'Follow along for experiences, tips, and insights on balancing business and family life, staying active in sports, and making informed choices for a healthier lifestyle.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <div id='page' >
        <MainHeader /> 
        {children}
      </div>
      
      </body>
    </html>
  )
}
