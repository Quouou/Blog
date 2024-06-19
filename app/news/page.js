import { DUMMY_BLOG } from "../../dummy-blog";
import BlogList from "../../components/blog-list";
import styles from './page.module.css'; 

export default function NewsPage() {
  
  return (
    <div>
      <h1>Blogs</h1>
      <BlogList blog={DUMMY_BLOG} />
    </div>
  );
}