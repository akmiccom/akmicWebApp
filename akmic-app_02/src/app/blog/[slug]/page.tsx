import Image from "next/image";
import { getPostBySlug, getAllPosts } from "@lib/posts";
import { MarkdownRenderer } from "@components/MarkdownRenderer";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

interface Post {
  image?: string;
  title?: string;
  created: string;
  updated: string;
  toc: { id: string; text: string; level: number }[];
  contentHtml: string;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post: Post = await getPostBySlug(params.slug);

  return (
<main className="flex flex-row justify-center items-start bg-gray-100 dark:bg-gray-900 p-6">
      {/* 記事のコンテンツ */}
      <article className="w-full max-w-5xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* 日付の表示 */}
        <ol className="text-gray-600 dark:text-gray-300 mb-3">
          <li>📅 Created: {post.created}</li>
          <li>🔄 Updated: {post.updated}</li>
        </ol>
        {/* 画像を表示 */}
        <Image
          src={post.image ? `/${post.image}` : "/images/default.jpg"}
          width={1920 / 2}
          height={1080 / 2}
          alt={post.title || "No Image"}
          className="rounded-lg shadow-md"
        />
        {/* Markdown を表示 */}
        <MarkdownRenderer contentHtml={post.contentHtml} />
      </article>

      {/* 目次を右側に固定 */}
      <aside className="w-64 sticky top-20 ml-6 p-4 bg-gray-800 text-white rounded-lg shadow-md hidden lg:block">
        <h2 className="text-lg font-bold">目次</h2>
        <ul>
          {post.toc.map((item) => (
            <li key={item.id} className={`mt-1 ${item.level === 2 ? "ml-4" : ""} ${item.level === 3 ? "ml-8" : ""}`}>
              <a href={`#${item.id}`} className="text-blue-400 hover:underline">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
