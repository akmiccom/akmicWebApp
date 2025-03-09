import React from "react";
import Image from "next/image";
import parse, { domToReact } from "html-react-parser";

// `MarkdownRenderer` の型定義
// interface MarkdownRendererProps {
//   contentHtml: string;
// }

// Markdown 内の `<img>` を Next.js の `<Image>` に変換
export function MarkdownRenderer({ contentHtml }: { contentHtml: string }) {
  const transformedHtml = contentHtml.replace(
    /<img src="([^"]+)" alt="([^"]+)" \/>/g,
    (_, src, alt) =>
      `<span class="next-image"><img data-src="${src}" alt="${alt}" /></span>`
  );

  return (
    <section className="prose dark:prose-invert m-5 p-5 w-full max-w-5xl">
      {parse(transformedHtml, {
        replace: (domNode) => {
          if (domNode.type === "tag" && domNode.name === "img") {
            const { src, alt } = domNode.attribs;
            return (
              <span className="flex justify-center">
                <Image
                  src={src}
                  alt={alt}
                  width={576}
                  height={324}
                  // layout="responsive"
                  className="rounded-lg shadow-md"
                  layout="intrinsic"
                />
              </span>
            );
          }
          // ✅ `h1`, `h2`, `h3` に `id` を付与して目次と連携
          if (
            domNode.type === "tag" &&
            ["h1", "h2", "h3"].includes(domNode.name)
          ) {
            const id =
              domNode.children[0]?.data?.toLowerCase().replace(/\s+/g, "-") ||
              "";
            return React.createElement(
              domNode.name,
              { id, className: "scroll-mt-20" },
              domToReact(domNode.children)
            );
          }
           // ✅ リンク (`<a>`) を別タブ (`target="_blank"`) で開くように修正
           if (domNode.type === "tag" && domNode.name === "a") {
            const { href } = domNode.attribs;
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {domToReact(domNode.children)}
              </a>
            );
          }
        },
      })}
    </section>
  );
}
