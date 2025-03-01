import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm"; // 画像・リンクのサポート


const contentDir = "src/content";
const postsDirectory = path.join(process.cwd(), contentDir);

console.log(postsDirectory)

// 🔹 Markdown の最初の `#` をタイトルとして取得する関数
function extractTitle(markdown) {
  const lines = markdown.split("\n");
  for (const line of lines) {
    if (line.startsWith("# ")) {
      return line.replace("# ", "").trim();
    }
  }
  return "Untitled"; // デフォルトのタイトル
}

// 🔹 Markdown の最初の数行を説明文として取得する関数
function extractDescription(markdown, length = 150) {
  const text = remark().use(strip).processSync(markdown).toString();
  return text.length > length ? text.slice(0, length) + "..." : text;
}

// すべての Markdown 記事を取得する
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      return fs.statSync(fullPath).isFile();
    })
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      
      // 🔹 `title` がフロントマターになければ、Markdown の `#` から取得
      // const title = data.title || extractTitle(content);
      // console.log("title", title);

      // 🔹 `description` を本文の最初の部分から取得
      // const description = extractDescription(content);

      return {
        slug: fileName.replace(/\.md$/, ''),
        // title,
        // description,
        ...data,
      };
    });
}

// 指定した Markdown 記事を取得して HTML に変換
export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).use(remarkGfm).process(content);
  const contentHtml = processedContent.toString();

  // console.log("contentHtml", contentHtml);

  return {
    slug,
    contentHtml,
    ...data,
  };
}
