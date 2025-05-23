import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@lib/posts";

interface Post {
  slug: string;
  image?: string;
  title: string;
  category?: string;
  description?: string;
  views?: number;
  comments?: number;
  created: string;
  updated: string;
}

export default function BlogListPage() {
  const posts: Post[] = getAllPosts();

  return (
    <section className="min-h-screen text-gray-400 bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center">
          <ul className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {posts.map((post) => (
              <li key={post.slug} className="p-4">
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`/${post.image}`}
                      alt={post.title}
                      width={720}
                      height={400}
                    />
                  </Link>
                  <div className="p-6">
                    <h2 className="flex justify-between text-xs title-font font-medium text-gray-500 mb-1">
                      <div>{post.category || "Uncategorized"}</div>
                      <div>Update {post.updated}</div>
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3 line-clamp-1">
                      {post.title}
                    </h1>
                    <p className="leading-relaxed mb-3 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center flex-wrap">
                      <Link href={`/blog/${post.slug}`} className="text-indigo-400 inline-flex items-center lg:mb-0">
                        Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                      <span className="text-gray-00 mr-3 inline-flex items-center lg:ml-auto ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        {post.views ?? 0}
                      </span>
                      <span className="text-gray-00 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        {post.comments ?? 0}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
