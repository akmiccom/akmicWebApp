---
title: "Next.js"
date: "2025-02-23"
description: "これは、markdown のテストです。"
image: images/winter.webp
aaa: "1.2K"
bbb: "6"
---

# Next.js

## Next.js プロジェクトのセットアップ

```cmd
npx create-next-app@latest my-next-app
cd my-next-app
```

## 開発サーバーの起動

```cmd
npm run dev
```

http://localhost:3000 にアクセス

## layout.tsx の編集

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a>
          </nav>
        </div>
        {children}
      </body>
    </html>
  )
}
```

## page.tsx の編集

```tsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

## About Us ページの作成

```cmd
mkdir /app/about
echo > page.tsx
rem エンター2回
```

```tsx
export default function About() {
    return (
      <div>
        <h1>About Us</h1>
        <p>これは自己紹介ページです。</p>
      </div>
    );
  }
```

## プロジェクトフォルダ構成 for me

project-root/
├── src/                 # Next.js のソースコードをまとめる
│   ├── app/             # Next.js のページとルーティング管理
│   ├── components/      # 再利用可能な UI コンポーネント
│   ├── content/         # Markdown の記事を保存
│   ├── lib/             # API やデータ処理のヘルパー関数
│   ├── styles/          # グローバルスタイル
├── public/              # 静的ファイル（画像、favicon など）
│   ├── images/
├── next.config.js       # Next.js の設定ファイル
├── package.json         # npm の設定ファイル
├── jsconfig.json        # 絶対パスエイリアス設定
└── README.md            # プロジェクトの概要

src/
├── app/
│   ├── layout.js         # 🌍 グローバルレイアウト（共通デザイン）
│   ├── page.js           # 🏠 ホームページ
│   ├── blog/             # 📝 ブログのルート
│   │   ├── layout.js     # 🖼️ ブログ専用のレイアウト（ヘッダー・フッター含む）
│   │   ├── page.js       # 📑 ブログ一覧ページ（すべての投稿を表示）
│   │   ├── [slug]/       # 🏷️ 動的ルート（個別記事ページ）
│   │   │   ├── page.js   # ✍️ 記事詳細ページ（Markdown からデータ取得）
├── components/            # 🎨 再利用可能な UI コンポーネント
│   ├── layout/
│   │   ├── Header.js     # 🏗️ ヘッダーコンポーネント
│   │   ├── Footer.js     # 🏗️ フッターコンポーネント
│   ├── blog/
│   │   ├── BlogCard.js   # 📌 記事一覧ページで使うカード
│   │   ├── CommentSection.js # 💬 コメント機能（将来的に追加可能）
├── content/              # 📝 Markdown のブログ記事を保存
│   ├── my-first-post.md  # 🏷️ 記事ファイル（手動追加）
│   ├── second-post.md
├── lib/                   # ⚙️ データ取得・API 連携
│   ├── posts.js          # 📄 Markdown 記事のデータ取得処理
│   ├── db.js             # 🔗 将来的にデータベース連携を追加する場合
├── styles/               # 🎨 スタイル管理（Tailwind CSS 用）
│   ├── globals.css       # 🌎 グローバルスタイル
│   ├── blog.css          # 📝 ブログ専用のスタイル

