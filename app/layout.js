import MainHeader from '../components/main-header';
import styles from '../app/globals.css';
export const metadata = {
  title: 'The Bussiness Dad',
  description: 'A blog about the life of Michael and his adventures',
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
