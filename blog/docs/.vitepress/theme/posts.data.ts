import { createContentLoader } from "vitepress";
import { formatShowDate } from "./utils";
import { Post } from "./type_def";
declare const data: Post[];
export { data };
export default createContentLoader("/*.md", {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .filter(({ frontmatter }) => !frontmatter.hide)
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        hit: 0,
        excerpt,
        cover: frontmatter.cover,
        categories: frontmatter.categories,
        date: formatDate(frontmatter.create_time),
        layout: frontmatter.layout,
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});

function formatDate(create_time: number): Post["date"] {
  const date = new Date(create_time * 1000);
  date.setUTCHours(12);
  return {
    time: create_time,
    formatShowDate: formatShowDate(date),
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
