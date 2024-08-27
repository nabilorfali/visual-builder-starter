import NextLink from "next/link";
import Button from "./button";

//@ts-ignore
const Link = ({ href, text = "", ...rest }) => {
  const hrefUrl = href
    ? new URL(href.default ?? "/", href.base ?? "https://example.com")
    : undefined;

  if (!hrefUrl) return <Button text={text} {...rest} />;

  return (
    <NextLink href={hrefUrl} {...rest}>
      {text}
    </NextLink>
  );
};

export default Link;
