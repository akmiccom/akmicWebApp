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
  toc: string;
  contentHtml: string;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post: Post = await getPostBySlug(params.slug);

  return (
    <main className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-6">
      {/* 日付の表示 */}
      <ol className="">
        <li>Created: {post.created}</li>
        <li>Updated: {post.updated}</li>
      </ol>
      {/* 画像を表示 */}
      <Image
        src={post.image ? `/${post.image}` : "/images/default.jpg"}
        width={1920 / 2}
        height={1080 / 2}
        alt={post.title || "No Image"}
        className="rounded-lg shadow-md"
      />
      {/* 目次を表示 */}
      <aside className="bg-gray-800 text-white p-4 m-3 rounded-lg w-auto float-right">
        {/* <h2 className="text-lg font-bold">目次</h2> */}
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
      {/* md を表示 */}
      <MarkdownRenderer contentHtml={post.contentHtml} />
    </main>
  );
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
