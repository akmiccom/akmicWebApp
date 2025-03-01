import React from "react";
import Image from "next/image";
import parse from "html-react-parser";

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
        },
      })}
    </section>
  );
}
