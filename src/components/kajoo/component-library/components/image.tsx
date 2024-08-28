import { type ComponentProps, type FunctionComponent } from "react";
import {
  type LinkDataFragment,
  type ReferenceDataFragment,
} from "@/gql/graphql";
import Image from "next/image";

type CmsImageProps = Readonly<
  {
    src?: LinkDataFragment | ReferenceDataFragment | null;
    fallbackSrc?: string;
  } & Omit<ComponentProps<typeof Image>, "src">
>;

/**
 * Wrapper for the Next.JS Image component that allows the usage of either the
 * LinkData fragment or ReferenceData fragment to define the image URL
 *
 * @param       param0      The image properties
 * @returns     JSX Image component
 */
export const CmsImage: FunctionComponent<CmsImageProps> = ({
  src,
  fallbackSrc,
  alt,
  ...props
}) => {
  const link = linkDataToUrl(getLinkData(src));
  const imgSrc = link?.href ?? fallbackSrc;

  return (
    <Image
      src={imgSrc || "https://app.kajoo.ai/icons/default-imag.svg"}
      alt={alt}
      {...props}
      {...(!imgSrc ? { style: { backgroundColor: "#d9d9d9" } } : {})}
    />
  );
};

function getLinkData(
  input?: LinkDataFragment | ReferenceDataFragment | null
): LinkDataFragment | undefined {
  if (!input) return undefined;
  if ((input as ReferenceDataFragment).url)
    return (input as ReferenceDataFragment).url ?? undefined;
  return (input as LinkDataFragment) ?? undefined;
}

function linkDataToUrl(
  item: LinkDataFragment | null | undefined
): URL | undefined {
  try {
    return new URL(item?.default ?? "/", item?.base ?? undefined);
  } catch {
    return undefined;
  }
}

export default CmsImage;
