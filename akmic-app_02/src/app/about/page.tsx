// import Image from "next/image";
import HeroSection from "@components/HeroSection";
import OurMission from "@components/OurMission";
import OurStory from "@components/OurStory";
import OurTeam from "@components/OurTeam";

export default function About() {
  return (
    // min-h-screen 最小の高さを画面いっぱいに、縦中央配置に便利
    // flex flex-col 子要素を 縦並びにする flex-row で横並びに(デフォルト)
    // items-center 子要素を水平方向の中央に item-start 上寄せ, item-end 下寄せ, -stretch 高さ最大, -baseline テキストベース揃え
    // justify-center 子要素を垂直方向の中央に -start 左寄せ(デフォ), -end 右寄せ, -between 両端均等, -around 均等外余白, -evenly すべて均等

    // bg-gray-100 背景色を薄いグレーに 50, 100, 200, 500, 900
    // text-blue-100 文字色を青に 50, 100, 200, 500, 900

    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <HeroSection />
      <OurMission />
      <OurStory />
      <OurTeam />
    </div>
      /* <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-4">
        About akmic
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-800 text-center max-w-4xl">
        This is a simple Next.js app with Tailwind CSS.
      </p>

      <div className="mt-6 bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-900">Mako</h2>
        <p className="text-gray-600 mt-2">
          データサイエンティストであり、プログラミングと英語を勉強中です。最近は
          Next.js と Tailwind CSS に興味があります！
        </p>
      </div>

      <button className="m-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Contact Us
      </button>

      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <Image
          className="size-12 shrink-0"
          src="/globe.svg"
          alt="ChitChat Logo"
          width={50}
          height={50}
        />
        <div className="text-xl font-medium text-black dark:text-white">
          ChitChat
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          You have a new message!
        </p>
      </div>

      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <Image
          className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="/images/ana_tokuten_01_1920_1080.webp"
          alt=""
          width={192}
          height={108}
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Erin Lindford</p>
            <p className="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div> */
  );
}

// フォントサイズ
// text-xs	12px	0.75rem
// text-sm	14px	0.875rem
// text-base	16px	1rem
// text-lg	18px	1.125rem
// text-xl	20px	1.25rem
// text-2xl	24px	1.5rem
// text-3xl	30px	1.875rem
// text-4xl	36px	2.25rem
// text-5xl	48px	3rem
// text-6xl	60px	3.75rem
// text-7xl	72px	4.5rem
// text-8xl	96px	6rem
// text-9xl	128px	8rem

// フォントスタイル
// font-thin	100（極細）
// font-extralight	200
// font-light	300
// font-normal	400（通常）
// font-medium	500
// font-semibold	600
// font-bold	700（太字）
// font-extrabold	800
// font-black	900（極太）

// マージン・パディング  方向	説明
// サイズ 0, 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32
// m-4 / p-4	全方向	margin: 16px; / padding: 16px;
// mt-4 / pt-4	上	margin-top: 16px; / padding-top: 16px;
// mb-4 / pb-4	下	margin-bottom: 16px; / padding-bottom: 16px;
// ml-4 / pl-4	左	margin-left: 16px; / padding-left: 16px;
// mr-4 / pr-4	右	margin-right: 16px; / padding-right: 16px;
// mx-auto	中央揃え	margin-left: auto; margin-right: auto;

// max-w- 要素の最大幅（max-width）を設定する
// クラス名	max-width（px）	rem
// max-w-xs	320px	20rem
// max-w-sm	384px	24rem
// max-w-md	448px	28rem
// max-w-lg	512px	32rem
// max-w-xl	576px	36rem
// max-w-2xl	672px	42rem
// max-w-3xl	768px	48rem
// max-w-4xl	896px	56rem
// max-w-5xl	1024px	64rem
// max-w-6xl	1152px	72rem
// max-w-7xl	1280px	80rem
// max-w-full	100%	画面いっぱい
