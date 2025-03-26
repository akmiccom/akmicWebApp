// components/CountryFlags.tsx
import Image from "next/image";

// フランス: 約1億人の観光客を受け入れ、世界全体の観光市場の8%を占めています。 ​
// スペイン: 8,517万人の観光客を迎え、フランスに次ぐ人気観光地です。 ​
// アメリカ合衆国: 6,648万人の観光客が訪れています。 ​
// トルコ: 5,100万人の観光客を受け入れています。 ​
// イタリア: 4,800万人の観光客が訪れています。 ​
// メキシコ: 3,900万人の観光客を迎えています。 ​
// タイ: 3,800万人の観光客が訪れています。 ​
// ドイツ: 3,700万人の観光客を受け入れています。 ​
// イギリス: 3,600万人の観光客が訪れています。 ​
// 日本: 3,500万人の観光客を迎えています。 ​
// オーストリア: 3,100万人の観光客が訪れています。 ​
// ギリシャ: 3,000万人の観光客を受け入れています。 ​
// ロシア: 2,900万人の観光客が訪れています。 ​
// ポルトガル: 2,700万人の観光客を迎えています。 ​
// カナダ: 2,500万人の観光客が訪れています。 ​
// ポーランド: 2,300万人の観光客を受け入れています。 ​
// オランダ: 2,200万人の観光客が訪れています。 ​
// サウジアラビア: 2,100万人の観光客を迎えています。 ​
// マレーシア: 2,000万人の観光客が訪れています。 ​
// 香港: 1,900万人の観光客を受け入れています。 ​

const countries = [
  { name: "フランス", code: "fr" },
  { name: "スペイン", code: "es" },
  { name: "アメリカ", code: "us" },
  { name: "トルコ", code: "tr" },
  { name: "イタリア", code: "it" },
  { name: "メキシコ", code: "mx" },
  { name: "タイ", code: "th" },
  { name: "ドイツ", code: "de" },
  { name: "イギリス", code: "gb" },
  { name: "日本", code: "jp" },
  { name: "オーストリア", code: "at" },
  { name: "ギリシャ", code: "gr" },
  { name: "ロシア", code: "ru" },
  { name: "ポルトガル", code: "pt" },
  { name: "カナダ", code: "ca" },
  { name: "ポーランド", code: "pl" },
  { name: "オランダ", code: "nl" },
  { name: "サウジアラビア", code: "sa" },
  { name: "マレーシア", code: "my" },
  { name: "香港", code: "hk" }
];

const CountryFlags = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">世界の人気観光地ランキング</h2>
      <div className="mt-10 grid grid-cols-5 lg:grid-cols-10 gap-3 text-center">
        {countries.map((country, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={`https://flagcdn.com/w80/${country.code}.png`}
              alt={`${country.name} Flag`}
              width={100}
              height={100}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryFlags;