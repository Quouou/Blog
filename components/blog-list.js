import Link from "next/link";

export default function BlogList({blog}) {
    return(
        <ul className="news-list">
        {blog.map(blogsItem => (
        <li key={blogsItem.id}>
          <Link href={`/blog/${blogsItem.slug}`}>
            <img src={`/images/news/${blogsItem.image}`} alt={blogsItem.title}/>
            <span>{blogsItem.title}</span>
          </Link>
        </li>
      ))}
      </ul>
    )
}