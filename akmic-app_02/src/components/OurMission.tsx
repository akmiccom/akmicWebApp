const missions = [
  {
    misson: "持続可能な旅",
    detail: "環境に配慮した旅行プランを提案します。",
  },
  {
    misson: "便利な情報提供",
    detail: "信頼できる旅行情報を、誰でも簡単にアクセス可能に。",
  },
  {
    misson: "ユーザーファースト",
    detail: "旅好きなあなたのために、最高の体験を。",
  },
];


export default function OurMission() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {missions.map((mission, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {mission.misson}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {mission.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}