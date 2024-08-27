import { type ComponentProps } from "react";
import Button from "@/components/shared/button";
import NextLink from "next/link";

//@ts-ignore
const Link = ({ href, text = "", ...rest }) => {
  const hrefUrl = href
    ? new URL(href.default ?? "/", href.base ?? "https://example.com")
    : undefined;

  if (!hrefUrl)
    return (
      <div {...rest}>
        <span>{text}</span>
      </div>
    );

  return (
    <NextLink href={hrefUrl} {...rest}>
      {text}
    </NextLink>
  );
};

export default Link;
