export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-blue-600 mb-4">About akmic</h1>
            <p className='text-lg md:text-xl lg:text-2xl text-gray-800 text-center max-w-4xl'>
                This is a simple Next.js app with Tailwind CSS.
            </p>
            <div className="mt-6 bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
                <h2 className="text-2xl font-semibold text-gray-900">Mako</h2>
                <p className="text-gray-600 mt-2">
                    データサイエンティストであり、プログラミングと英語を勉強中です。最近は Next.js と Tailwind CSS に興味があります！
                </p>
            </div>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Contact Us
            </button>
        </div>
    );
}
