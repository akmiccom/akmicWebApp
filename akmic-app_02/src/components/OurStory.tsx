const stories = [
  {
    title: "2020 - 海外旅行ブログのスタート",
    content: "コロナ禍の中、より良い旅行情報を提供するためにサイトを立ち上げました。",
  },
  {
    title: "2022 - ユーザー数1万人突破",
    content: "たくさんの旅行好きな方に利用していただきました。",
  },
  {
    title: "2024 - 世界中の旅人と繋がる",
    content: "世界中の旅行者と情報を共有するコミュニティを開始しました。",
  },
]

export default function OurStory() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        私たちのストーリー
      </h2>
      <div className="mt-10 space-y-8 border-l-4 border-blue-600 pl-6">
        {stories.map((story, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {story.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {story.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}