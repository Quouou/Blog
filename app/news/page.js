import { DUMMY_NEWS } from "../../dummy-news";
import NewsList from "../../components/news-list";
import styles from './page.module.css'; 

export default function NewsPage() {
  return (
    <div id="news">
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}