import { DUMMY_BLOG } from "../../dummy-blog";
import BlogList from "../../components/blog-list";
import styles from './page.module.css'; 
import Link from "next/link";

export default function NewsPage() {
  
  return (
    <div>
      <p className={styles.p}> <Link href='/' className={styles.a}> HOME </Link>/ BLOGS</p>
      <h1 className={styles.p}>Blogs</h1>
      <BlogList blog={DUMMY_BLOG} />
    </div>
  );
}