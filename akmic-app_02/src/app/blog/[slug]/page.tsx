import Image from 'next/image';
import { getPostBySlug, getAllPosts } from "../../../lib/posts";
// import { MarkdownRenderer } from "@/components/MarkdownRenderer";


export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <main className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-6">
      <Image
        src={`/${post.image}`}
        width={720}
        height={400}
        alt={post.title}
      />
      <section className='prose dark:prose-invert m-5 p-5 w-full max-w-5xl'>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </section>
    </main>
  );
}


export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}