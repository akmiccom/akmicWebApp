---
category: "Web開発"
title: "Tailwind CSSの基本と使い方"
date: "2025-03-02"
description: "Tailwind CSSの基本的な概念と使い方について解説します。ユーティリティファーストのアプローチを採用したこのCSSフレームワークが、どのように開発を効率化するのかを学びましょう。"
image: images/tailwindcss-intro.webp
---

# Tailwind CSSの基本と使い方

Tailwind CSSは、ユーティリティファーストのアプローチを採用したCSSフレームワークです。これにより、クラス名を利用して直接HTMLにスタイルを適用でき、CSSの記述量を削減できます。本記事では、Tailwind CSSの基本的な概念と使い方について解説します。

## Tailwind CSSとは？

Tailwind CSSは、あらかじめ定義されたユーティリティクラスを活用して、迅速にスタイルを適用できるCSSフレームワークです。

### 特徴

- **ユーティリティファースト**：CSSのクラスを細かく分割し、スタイルを直接HTMLに記述できる。
- **開発スピードの向上**：CSSファイルを個別に作成する手間が省ける。
- **カスタマイズ可能**：`tailwind.config.js` を利用して独自のデザインシステムを構築可能。

### インストール方法

Tailwind CSSは、以下の方法でインストールできます。

#### CDNを利用する

```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.0.0/dist/tailwind.min.css" rel="stylesheet">
```

#### npmを利用する

```sh
npm install -D tailwindcss
npx tailwindcss init
```

## よく使われるTailwind CSSのスタイル

### レイアウト (Layout)
```html
<div class="container mx-auto p-4">
  <p>レスポンシブなコンテナ</p>
</div>
```

### フレックスボックス & グリッド (Flexbox & Grid)
```html
<div class="flex justify-between items-center">
  <p>Flexboxを活用</p>
</div>

<div class="grid grid-cols-3 gap-4">
  <div class="bg-gray-200 p-4">1</div>
  <div class="bg-gray-300 p-4">2</div>
  <div class="bg-gray-400 p-4">3</div>
</div>
```

### スペーシング (Spacing)
```html
<div class="p-6 m-4 bg-gray-100">
  <p>適切なパディングとマージン</p>
</div>
```

### サイズ (Sizing)
```html
<div class="w-1/2 h-32 bg-blue-500">
  <p>幅1/2、高さ32</p>
</div>
```

### タイポグラフィ (Typography)
```html
<p class="text-lg font-bold text-gray-700">大きくて太いテキスト</p>
<p class="text-sm italic text-gray-500">小さな斜体のテキスト</p>
```

### 背景 (Backgrounds)
```html
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
  <p>グラデーション背景</p>
</div>
```

### ボーダー (Borders)
```html
<div class="border border-gray-400 rounded-lg p-4">
  <p>ボーダー付きボックス</p>
</div>
```

### エフェクト (Effects)
```html
<div class="shadow-lg hover:shadow-xl transition duration-300 p-4">
  <p>影とホバーエフェクト</p>
</div>
```

### フィルター (Filters)
```html
<img class="grayscale hover:grayscale-0 transition duration-300" src="image.jpg" alt="画像">
```

### テーブル (Tables)
```html
<table class="table-auto border-collapse border border-gray-400 w-full">
  <thead>
    <tr>
      <th class="border border-gray-300 px-4 py-2">ヘッダー1</th>
      <th class="border border-gray-300 px-4 py-2">ヘッダー2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-4 py-2">データ1</td>
      <td class="border border-gray-300 px-4 py-2">データ2</td>
    </tr>
  </tbody>
</table>
```

## まとめ

Tailwind CSSは、開発スピードを向上させる優れたCSSフレームワークです。ユーティリティファーストのアプローチを活用することで、シンプルかつ効率的にスタイリングができます。カスタマイズ性も高く、プロジェクトに適したデザインを構築できます。

![Tailwind CSSの基本と使い方](/images/tailwindcss-intro.webp)
