import Image from "next/image";

const teamMembers = [
  {
    name: "Mako",
    role: "データサイエンティスト & 旅行プランナー",
    image: "/images/A_Japanese_young_woman_jun.webp",
    commnt: "Hello!",
    },
    {
    name: "John Doe",
    role: "Webデベロッパー & UIデザイナー",
    image: "/images/A_Japanese_young_woman_mar.webp",
    commnt: "こんにちは！",
    },
    {
    name: "Jane Smith",
    role: "マーケティングスペシャリスト",
    image: "/images/A_Japanese_mysterious_woman_oct.webp",
    commnt: "アニョハセヨ",
    },
    {
    name: "Aoba",
    role: "マーケティングスペシャリスト",
    image: "/images/A_Japanese_woman_may.webp",
    commnt: "アニョハセヨ",
    },
];

export default function OurTeam() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        私たちのチーム
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <Image src={member.image} alt={member.name} width={300} height={100}
             className="mx-auto rounded-full shadow-lg"/>
            {/* <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full" /> */}
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              {member.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-100">{member.role}</p>
            <p className="text-gray-600 dark:text-gray-300">{member.commnt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
