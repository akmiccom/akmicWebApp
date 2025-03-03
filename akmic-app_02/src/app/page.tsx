import Link from "next/link";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">200</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-200 sm:text-7xl">
          akmicCom.
        </h1>
        <ol className="list-inside list-decimal text-center sm:text-left font-[family-name:var(--font-geist-mono)] mt-6 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
          <li className="mb-2">
            This is our website.{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              <a
                href="https://www.akmicCom.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                https://www.akmicCom.jp
              </a>
            </code>
          </li>
          <li>I hope this will be of help to you.</li>
        </ol>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/blog"
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-gray-100 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Read our Blog
          </Link>
          <a href="#" className="text-sm font-semibold text-gray-500">
            Contact Us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
