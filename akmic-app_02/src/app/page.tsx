import Link from "next/link";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">200</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          akmicCom.
        </h1>
        <ol className="list-inside list-decimal text-center sm:text-left font-[family-name:var(--font-geist-mono)] mt-6 text-lg font-medium text-pretty sm:text-xl/8">
          <li className="mb-2">
          私たちは、旅の新しい形を創造します{" "}
            {/* <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              <Link
                href="https://www.akmicCom.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                https://www.akmicCom.jp
              </Link>
            </code> */}
          </li>
          <li>そして私たちは、新しい旅の楽しみを提案します</li>
        </ol>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/blog"
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Read our Blog
          </Link>
          <a href="#" className="text-sm font-semibold">
            Contact Us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
