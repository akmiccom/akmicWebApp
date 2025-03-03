import Link from "next/link"

export default function Example() {
    return (
        <main className="grid min-h-screen place-items-center text-gray-100 bg-gray-900 body-font px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-300 sm:text-7xl">
              Page not found
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-gray-100 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
              <a href="#" className="text-sm font-semibold text-gray-500">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>

    )
  }
  