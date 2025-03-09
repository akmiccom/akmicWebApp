import Image from "next/image";
import Link from "next/link";
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
      <article className="w-full max-w-5xl bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <p className="text-right text-gray-600 dark:text-gray-300 mb-3">
          🔄 Updated: {post.updated} 📅 Created: {post.created}
        </p>
        <Image
          src={post.image ? `/${post.image}` : "/images/default.jpg"}
          width={960}
          height={540}
          alt={post.title || "No Image"}
          className="rounded-lg shadow-md"
        />
        {/* スマホサイズでは画像の下に目次を配置 */}
        <aside className="w-full lg:hidden mt-6 p-4 bg-gray-900 text-white rounded-lg shadow-md">
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
        {/* Markdown を表示 */}
        <MarkdownRenderer contentHtml={post.contentHtml} />
      </article>
      
      {/* PCサイズ（lg以上）では右側に目次 */}
      <aside className="hidden lg:block sticky top-20 ml-6 p-4 bg-gray-900 text-white rounded-lg shadow-md w-64 xl:w-80">
        <ul>
          {post.toc.map((item) => (
            <li key={item.id} className={`mt-1 ${item.level === 2 ? "ml-4" : ""} ${item.level === 3 ? "ml-8" : ""}`}>
              <a href={`#${item.id}`} className="text-blue-400 hover:underline">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
          <Link href="/blog" className="text-gray-300 hover:underline">Go back Blog List</Link>
      </aside>
    </main>
  );
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}
