import Image from "next/image";
import { getPostBySlug, getAllPosts } from "@lib/posts";
import { MarkdownRenderer } from "@components/MarkdownRenderer";

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <main className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-6">
      <Image
        src={post.image ? `/${post.image}` : "/images/default.jpg"}
        width={1000}
        height={1080}
        alt={post.title || "No Image"}
        className="rounded-lg shadow-md"
      />
      <MarkdownRenderer contentHtml={post.contentHtml} />
    </main>
  );
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
