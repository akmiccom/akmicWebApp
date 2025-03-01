import Link from "next/link";


export default function Header() {
  return (
    <header className="text-gray-100 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      {/* <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0"> */}
      <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">akmicCom</span>
      </Link>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <ul className="flex">
          <li><Link href="/" className="mr-5 hover:text-white">Home</Link></li>
          <li><Link href="/about" className="mr-5 hover:text-white">About</Link></li>
          <li><Link href="/blog" className="mr-5 hover:text-white">Blog</Link></li>
          <li><Link href="/tailblocks" className="mr-5 hover:text-white">Tailblocks</Link></li>
          <li><Link href="/contact" className="mr-5 hover:text-white">Contact</Link></li>
        </ul>
      </nav>
      <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
  );
}
