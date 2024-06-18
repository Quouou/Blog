import { DUMMY_NEWS } from "../../../dummy-news"
import { notFound } from "next/navigation"
import styles from './page.module.css'

export default function NewsDetailPage({ params }){
    const newsSLug = params.id
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSLug)

    if(!newsItem){
        notFound()
    }
    return(
        <article className="news-article">
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>{newsItem.title}</h1>     
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.slug} />
            </header> 
            <p className={styles.paragraph}>{newsItem.content}</p>
        </article>
    )
}