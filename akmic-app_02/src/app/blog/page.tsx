import Image from 'next/image';
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";


export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="p-6">
      <h1 className="text-4xl text-center sm:text-left font-bold m-10">Blog 一覧</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10">

        {/* ブログの一覧を表示 */}
        {posts.map((post) => (
          <li key={post.slug} className="mt-2 text-center">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image src={`/${post.image}`} alt={post.title} layout="fill" objectFit="cover" objectPosition="top" className="mx-auto"/>
              </div>
            </Link>
            <Link href={`/blog/${post.slug}`} className="text-xl block m-3">
              {/* {post.title} ({post.date}) */}
            <p className="text-xl block ">{post.title}</p>
            <p className="text-xl block ">{post.date}</p>
            </Link>
          </li>
        ))}

      </ul>
    </main>
  );
}
