# akmicWebApp

## 参考サイト

https://reffect.co.jp/react/nextjs-markdown-blog#i

## 構築

https://chatgpt.com/c/67b2e3b2-9bd8-8003-ad28-1b4f0b8710ee

akmic の WebApp を、しっかりプログラミングを学びつつ実践できる構成を考えて構成します。

目的に合った技術スタックを選んで、実際に Webアプリ を作りながらスキルを習得していきます。

## 技術スタック
### フロントエンド
#### Next.js (Reactベース)
- SEO 対策がしやすく、静的・動的ページ切り替えが可能
- **TypeScript** と組み合わせて**型安全**な開発ができる
- **SSR** (サーバーサードレンダリング) や **ISR** (インクリメンタル静的再生成) を学べる

#### Tailwind CSS (スタイル設計)
- モダンな CSS フレームワークで、直感的なデザインが可能
- 小規模～中規模なサイトに最適

### バックエンド
#### Next.js API Routes (簡易 API)
- Next.js だけで簡単な API を作成できるため、**バックエンドを別途用意しなくても良い**
#### Node.js + Express (本格的な API 開発)
- REST API の作り方を学べる
- 旅行計画機能などのデータ処理に適している
#### Supabase (Firebase の代替)
- PostgreSQL ベースで、認証・データベースがセットで使える
- SQL を学ばながら開発できる

### データベース
#### PostgreSQL (RDBMS の基礎)
- 実用的なデータ管理の学習に適している
- Supabase と組み合わせてクラウド上で管理可能

### デプロイ
#### Vercel (Next.js  をの相性が抜群)
- フロントエンドのデプロイが簡単
- Github と連携し、プッシュすると自動デプロイ可能
#### Railway.app / Supabase (バックエンド & DB)
- 無料枠があり、手軽にデプロイ可能

## 学習の流れ
### Next.jsの基本を学ぶ
- Reactのコンポーネント設計
- ページ遷移（CSR・SSR・ISR）
- スタイリング（Tailwind CSS）
### 簡単なブログサイトを作る
- Markdownで記事管理
- 旅行情報の発信ページ
### 旅行計画機能を作る
- Supabaseを使ったデータ管理
- ユーザー認証（ログイン・登録）
- ユーザーごとの旅行プランを保存
### APIとデータ処理を強化
- Node.js + ExpressでAPIを作成
- Next.js API Routesとの比較
### デプロイして実運用
- Vercelでフロントエンド公開
- SupabaseでDBをクラウド管理

この構成なら、React・Next.js・Node.js・SQL の基礎を実践しながら習得できそう。

最初はシンプルなブログサイトを作り、徐々に旅行計画機能を加えていくのが良さそうです。
