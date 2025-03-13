// components/CountryFlags.tsx
import Image from "next/image";

const countries = [
  { name: "韓国（ソウル）", code: "kr" },
  { name: "ハワイ", code: "us" },
  { name: "台湾", code: "tw" },
  { name: "ベトナム", code: "vn" },
  { name: "タイ", code: "th" },
  { name: "フランス", code: "fr" },
  { name: "香港", code: "hk" },
  { name: "オーストラリア", code: "au" },
  { name: "グアム", code: "gu" },
];

const CountryFlags = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">訪れた(い)国々</h2>
      <div className="mt-10 grid grid-cols-5 lg:grid-cols-10 gap-3 text-center">
        {countries.map((country, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={`https://flagcdn.com/w80/${country.code}.png`}
              alt={`${country.name} Flag`}
              width={80}
              height={60}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryFlags;