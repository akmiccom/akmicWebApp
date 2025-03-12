export default function HeroSection() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          私たちは、旅の新しい形を創造します
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          旅行が好きな人のために、最適な情報を提供するサイトを運営しています。
        </p>
        <button className="mt-6 px-6 py-3 bg-gray-100 text-gray-900 rounded-lg shadow-md hover:bg-blue-700 transition">
          私たちのストーリーを読む
        </button>
      </div>
    </div>
  );
}