---
title: "Next.js Getting Started"
date: "2025-03-01"
description: "Next.js に関して初心者向けに、インストール、フォルダ構成、レイアウトとページ、イメージとフォント、CSSなどについて解説します。コードブロックも使います。"
image: images/nextJsGettingStarted.webp
aaa: "0"
bbb: "0"
---

# Next.js 入門ガイド

## 1. Next.js のインストール

Next.js を始めるには、Node.js（推奨バージョン: 18 以上）がインストールされていることを確認してください。以下のコマンドで新しい Next.js プロジェクトを作成できます。

```cmd
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

上記の `npm run dev` を実行すると、ローカルサーバーが `http://localhost:3000` で起動します。

## 2. フォルダ構成

Next.js プロジェクトを作成すると、以下のようなフォルダ構成になります。

```txt
my-next-app/
├── pages/        # ルーティング用のページ
│   ├── index.js  # ホームページ
│   ├── about.js  # 他のページ
│   ├── _app.js   # アプリ全体のレイアウト
│   └── _document.js # カスタムHTML
├── public/       # 静的ファイル（画像など）
├── styles/       # CSSファイル
├── components/   # UIコンポーネント
├── next.config.js # 設定ファイル
├── package.json  # 依存関係
└── README.md     # 説明ファイル
```

## 3. レイアウトとページ

### ページの作成

Next.js では `pages/` ディレクトリの中に JavaScript（または TypeScript）ファイルを作成するだけで、そのファイル名がルート URL に対応します。

例として `pages/about.js` を作成します。

```jsx
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>これは About ページです。</p>
    </div>
  );
}
```

### レイアウトの作成

共通レイアウトを適用するために、`components/Layout.js` を作成します。

```jsx
export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>My Next.js Site</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 My Next.js Site</p>
      </footer>
    </div>
  );
}
```

このレイアウトを `_app.js` で適用します。

```jsx
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

## 4. 画像とフォント

### 画像の使用

Next.js では `next/image` を使うと最適化された画像を扱えます。

```jsx
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Site</h1>
      <Image src="/my-image.jpg" width={300} height={200} alt="Sample Image" />
    </div>
  );
}
```

### フォントの使用

Google フォントを簡単に導入できます。

```jsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={inter.className}>
      <h1>Google Font を適用</h1>
    </div>
  );
}
```

## 5. CSS の適用

### グローバル CSS

`styles/globals.css` にスタイルを追加し、`_app.js` で読み込みます。

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
```

### モジュール CSS

コンポーネントごとに CSS を適用するには、CSS モジュールを使用します。

`styles/Home.module.css`

```css
.title {
  color: blue;
  font-size: 24px;
}
```

`pages/index.js`

```jsx
import styles from "../styles/Home.module.css";

export default function Home() {
  return <h1 className={styles.title}>Hello Next.js</h1>;
}
```

## まとめ

Next.js の基本的な使い方として、

1. インストール方法
2. フォルダ構成
3. ページとレイアウトの作成
4. 画像とフォントの適用
5. CSS の適用

を紹介しました。これを基に、さらに Next.js の機能を活用していきましょう！

![nextJsGettingStarted.webp](/images/nextJsGettingStarted.webp)


## プロジェクトフォルダ構成 for me

project-root/
- ├── src/                 # Next.js のソースコードをまとめる
- │   ├── app/             # Next.js のページとルーティング管理
- │   ├── components/      # 再利用可能な UI コンポーネント
- │   ├── content/         # Markdown の記事を保存
- │   ├── lib/             # API やデータ処理のヘルパー関数
- │   ├── styles/          # グローバルスタイル
- ├── public/              # 静的ファイル（画像、favicon など）
- │   ├── images/
- ├── next.config.js       # Next.js の設定ファイル
- ├── package.json         # npm の設定ファイル
- ├── jsconfig.json        # 絶対パスエイリアス設定
- └── README.md            # プロジェクトの概要

src/
- ├── app/
- │   ├── layout.js         # 🌍 グローバルレイアウト（共通デザイン）
- │   ├── page.js           # 🏠 ホームページ
- │   ├── blog/             # 📝 ブログのルート
- │   │   ├── layout.js     # 🖼️ ブログ専用のレイアウト（ヘッダー・フッター含む）
- │   │   ├── page.js       # 📑 ブログ一覧ページ（すべての投稿を表示）
- │   │   ├── [slug]/       # 🏷️ 動的ルート（個別記事ページ）
- │   │   │   ├── page.js   # ✍️ 記事詳細ページ（Markdown からデータ取得）
- ├── components/            # 🎨 再利用可能な UI コンポーネント
- │   ├── layout/
- │   │   ├── Header.js     # 🏗️ ヘッダーコンポーネント
- │   │   ├── Footer.js     # 🏗️ フッターコンポーネント
- │   ├── blog/
- │   │   ├── BlogCard.js   # 📌 記事一覧ページで使うカード
- │   │   ├── CommentSection.js # 💬 コメント機能（将来的に追加可能）
- ├── content/              # 📝 Markdown のブログ記事を保存
- │   ├── my-first-post.md  # 🏷️ 記事ファイル（手動追加）
- │   ├── second-post.md
- ├── lib/                   # ⚙️ データ取得・API 連携
- │   ├── posts.js          # 📄 Markdown 記事のデータ取得処理
- │   ├── db.js             # 🔗 将来的にデータベース連携を追加する場合
- ├── styles/               # 🎨 スタイル管理（Tailwind CSS 用）
- │   ├── globals.css       # 🌎 グローバルスタイル
- │   ├── blog.css          # 📝 ブログ専用のスタイル

