import NextLink from "next/link";
import Button from "./button";
import { FC } from "react";

const Link: FC<any> = ({
  href: link,
  text: linkText = "",
  children,
  ...rest
}) => {
  let hrefUrl;
  const text = typeof linkText === "string" ? linkText : linkText?.text || "";

  if (typeof link === "string") {
    hrefUrl = link;
  } else {
    hrefUrl = link?.url
      ? new URL(link.url.default ?? "/", link.url.base ?? "https://example.com")
      : undefined;
  }

  if (!hrefUrl) return <Button text={text} {...rest} />;

  return (
    <NextLink href={hrefUrl} {...rest}>
      {children ? (Array.isArray(children) ? children : [children]) : text}
    </NextLink>
  );
};

export default Link;
