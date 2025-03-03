---
category: "Web開発"
title: "初心者向けHTML入門：Webページを作る第一歩"
date: "2025-03-02"
description: "HTML（HyperText Markup Language）は、Web ページを作成するためのマークアップ言語です。文章の構造を定義し、見出しや段落、画像、リンクなどを表示できます。"
image: images/GettingStartHtml.webp
---

# 初心者向けHTML入門：Webページを作る第一歩

## HTML とは？

HTML（HyperText Markup Language）は、Web ページを作成するためのマークアップ言語です。文章の構造を定義し、見出しや段落、画像、リンクなどを表示できます。HTML は、CSS や JavaScript と組み合わせることで、よりリッチな Web サイトを作成することが可能です。


## HTML の基本構造

HTML の基本的な構造は以下のようになります。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML 入門</title>
</head>
<body>
    <h1>HTML の基本</h1>
    <p>これは HTML の基本構造です。</p>
</body>
</html>
```

### **解説**
- `<!DOCTYPE html>`：HTML5 の宣言。
- `<html lang="ja">`：ページの言語を日本語に指定。
- `<head>` 内にはメタ情報（`meta charset` など）を記述。
- `<body>` 内にコンテンツ（見出し・段落）を記述。

## よく使う HTML タグ

### 見出しタグ

見出しを作成するには、`<h1>` から `<h6>` までのタグを使用します。

```html
<h1>見出し 1</h1>
<h2>見出し 2</h2>
<h3>見出し 3</h3>
```

### 段落タグ

文章を段落ごとに分けるには `<p>` タグを使用します。

```html
<p>これは段落です。</p>
<p>次の段落です。</p>
```

### リンクタグ

他のページへのリンクを作成するには `<a>` タグを使用します。

```html
<a href="https://example.com">Example サイトへ</a>
```

### 画像タグ

画像を表示するには `<img>` タグを使用します。

```html
<img src="image.jpg" alt="サンプル画像" />
```

### リストタグ

リストを作成するには、順序付きリスト `<ol>` と、順序なしリスト `<ul>` を使用します。

```html
<ul>
  <li>項目 1</li>
  <li>項目 2</li>
  <li>項目 3</li>
</ul>

<ol>
  <li>ステップ 1</li>
  <li>ステップ 2</li>
  <li>ステップ 3</li>
</ol>
```

### `<table>` タグ

表を作成するには `<table>` タグを使用します。

```html
<table border="1">
  <tr>
    <th>名前</th>
    <th>年齢</th>
  </tr>
  <tr>
    <td>田中</td>
    <td>25</td>
  </tr>
  <tr>
    <td>鈴木</td>
    <td>30</td>
  </tr>
</table>
```

### `section` タグ

`section` タグは、関連するコンテンツをグループ化するために使用します。主にページ内の大きなセクション（章やテーマごとの区切り）を作るのに適しています。

```html
<section>
  <h2>ニュースセクション</h2>
  <p>このセクションにはニュース記事が含まれます。</p>
</section>
```

### `article` タグ

`article` タグは、独立したコンテンツ（記事、ブログ投稿、レビューなど）を示します。それ自体で意味を持ち、単体で成立するコンテンツに適しています。

```html
<article>
  <h2>今日のニュース</h2>
  <p>これは独立したニュース記事です。</p>
</article>
```

`section` と `article` の組み合わせは、一般的に `section` の中に `article` を配置することで、構造を整理できます。

```html
<section>
  <h2>ニュースセクション</h2>
  <article>
    <h3>ニュース記事 1</h3>
    <p>これは最初のニュース記事です。</p>
  </article>
  <article>
    <h3>ニュース記事 2</h3>
    <p>これは 2 番目のニュース記事です。</p>
  </article>
</section>
```

このように `section` は関連するコンテンツをまとめる役割を持ち、`article` はそれぞれ独立したコンテンツを表します。適切に使い分けることで、HTML の構造をよりわかりやすくできます。

## `<code>` タグの使い方

`<code>` タグは、コードスニペットを表示するために使用されます。主にプログラムのコードやコマンドを表すのに使われます。

### インラインコード

```html
<p>この文章の中で <code>console.log("Hello World");</code> を実行します。</p>
```

### ブロックコード

```html
<pre>
    <code>
    function sayHello() {
        console.log("Hello, world!");
    }
    </code>
</pre>
```

このように、`<code>` タグを `pre` タグで囲むことで、整形されたコードブロックを表示できます。

## HTML のコメント

HTML 内でコメントを書くには `<!-- コメント -->` を使用します。

```html
<!-- これはコメントです -->
<p>コメントは表示されません。</p>
```

## すべてのタグを使ったサンプル

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML サンプル</title>
  </head>

  <body>
    <h1>HTML のサンプルページ</h1>
    <p>これはサンプルの段落です。</p>
    <a href="https://example.com">Example サイトへ</a>
    <img src="image.jpg" alt="サンプル画像" />

    <ul>
      <li>リスト項目 1</li>
      <li>リスト項目 2</li>
    </ul>

    <table border="1">
      <tr>
        <th>名前</th>
        <th>年齢</th>
      </tr>
      <tr>
        <td>田中</td>
        <td>25</td>
      </tr>
    </table>

    <div style="background-color: lightgray; padding: 10px;">
      <p>これは div 内の段落です。</p>
      <span style="color: red;">強調されたテキスト</span>
    </div>

    <section>
      <h2>ニュースセクション</h2>
      <article>
        <h3>ニュース記事 1</h3>
        <p>これは最初のニュース記事です。</p>
      </article>
      <article>
        <h3>ニュース記事 2</h3>
        <p>これは 2 番目のニュース記事です。</p>
      </article>
    </section>

    <p>
      この文章の中で <code>console.log("Hello World");</code> を実行します。
    </p>

    <pre>
      <code>
        function sayHello() {
            console.log("Hello, world!");
        }
      </code>
    </pre>
  </body>
</html>
```

## まとめ

HTML の基本的な使い方を紹介しました。

- HTML の基本構造
- 重要なタグの使い方（見出し、段落、リンク、画像、リストなど）
- `section` と `article` の適切な使い分け
- コードを表示する `<code>` タグの使用法
- コメントの書き方

これらを学ぶことで、Web ページの作成を始めることができます。

![web_dev_milestone](/images/GettingStartHtml.webp)
