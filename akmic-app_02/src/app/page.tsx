import Link from "next/link";


export default function Home() {
  return (
    <div className="text-gray-100 bg-gray-900 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="title-font text-6xl font-medium text-white mb-3">akmicCom.</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            This is our website. {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            <a href="https://www.akmicCom.jp" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              https://www.akmicCom.jp
            </a>
            </code>
          </li>
          <li>I hope this will be of help to you.</li>
        </ol>
        <Link
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="/blog"
        >
          Read our Blog
        </Link>
      </div>
    </div>
  );
}
