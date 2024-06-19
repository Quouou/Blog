import { DUMMY_BLOG } from "../../../dummy-blog"
import { notFound } from "next/navigation"
import styles from './page.module.css'

export default function NewsDetailPage({ params }){
    const blogSlug = params.id
    const blogItem = DUMMY_BLOG.find(blogItem => blogItem.slug === blogSlug)

    if(!blogItem){
        notFound()
    }
    return(
        <article className="news-article">
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>{blogItem.title}</h1>     
                <img src={`/images/news/${blogItem.image}`} alt={blogItem.slug} />
            </header> 
            <time dateTime={blogItem.date}>{blogItem.date}</time>
            <p className={styles.paragraph}>{blogItem.content}</p>
            <h1>Any feedback or comments?</h1>
            <textarea placeholder="Comment Here" className={styles.textarea}></textarea>
            <button className={styles.button}>Submit</button>
        </article>
    )
}