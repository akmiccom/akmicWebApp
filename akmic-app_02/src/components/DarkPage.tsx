import Image from "next/image"
import Link from "next/link"

export default function DarkPage() {
    return (
        <div className="min-h-screen justify-items-center bg-white dark:bg-gray-800 rounded-lg py-8 ring ring-gray-900/5">
            <h1 className="text-4xl">DARK MODE SAMPLE</h1>
            <Image
                src="/images/summer.webp"
                alt="Image タグです"
                width={300}
                height={200}
                className="rounded-lg shadow-xl m-6"
            />
            <p className="bg-blue-900 px-5 py-2 m-3 rounded-lg text-center border-3 border-indigo-600">
                上の画像は imageタグを使っています
            </p>

            <h1 className="bg-slate-500 rounded-lg text-[32px] p-3 my-3">
                HTMLのサンプル h1 タグです
            </h1>
            <p>これはサンプルの p タグです</p>
            <Link href="/">Home に移動する の linkタグ です。</Link>

            <ul>
                <li>リスト項目 1 li タグです</li>
                <li>リスト項目 2 li タグです</li>
            </ul>

            <div>
                <p>table タグと tr タグを使っています。</p>
                <table>
                    <thead>
                        <tr>
                            <th>名前 thタグです。</th>
                            <th>年齢 thタグです。</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>田中 tdタグです。</td>
                            <td>25歳 tdタグです。</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <p>これはdivを使った p タグです。</p>
                <span>これは span タグで強調されたテキストです。</span>
            </div>

            <section>
                <h2>セクションタイトル h2 タグを使っています。</h2>
                <p>セクションの内容 p タグを使っています。</p>
            </section>

            <article>
                <h2>セクションタイトル h2 タグを使っています。</h2>
                <p>セクションの内容 p タグを使っています。</p>
            </article>

            <h2>コードブロックの書き方</h2>

            <pre>
                <code>
                    <p>&lt;!DOCTYPE html&gt;</p>
                    <p>&lt;html lang="ja"&gt;</p>
                    <p>&lt;head&gt;</p>
                    <p> &lt;meta charset="UTF-8"&gt;</p>
                    <p> &lt;title&gt;HTML サンプル&lt;/title&gt;</p>
                    <p>&lt;/head&gt;</p>
                    <p>&lt;body&gt;</p>
                    <p> &lt;h1&gt;こんにちは HTML&lt;/h1&gt;</p>
                    <p> &lt;p&gt;これは HTML のサンプルページです。&lt;/p&gt;</p>
                    <p>&lt;/body&gt;</p>
                    <p>&lt;/html&gt;</p>
                </code>
            </pre>
        </div>
    )
}
