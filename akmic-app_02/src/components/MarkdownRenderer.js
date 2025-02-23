// Markdown 内の <img> を Next.js の <Image> に変換
export function MarkdownRenderer({ contentHtml }) {
  return (
    <div
      className="prose mt-4"
      dangerouslySetInnerHTML={{
        __html: contentHtml.replace(/<img src="([^"]+)" alt="([^"]+)" \/>/g, `<Image src="$1" alt="$2" width="600" height="400" layout="responsive" />`
        ),
      }}
    />
  );
}
