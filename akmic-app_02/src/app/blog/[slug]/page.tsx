import Image from 'next/image';
import { getPostBySlug, getAllPosts } from "@/lib/posts";
// import { MarkdownRenderer } from "@/components/MarkdownRenderer";


export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <main className="p-6 flex flex-col items-center">
      <Image
        src={`/${post.image}`}
        width={600}
        height={300}
        alt={post.title}
      />
      <div className="prose dark:prose-invert m-5 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl"
      dangerouslySetInnerHTML={{ __html: post.contentHtml }} />      
      {/* <MarkdownRenderer contentHtml={post.contentHtml} /> */}
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}