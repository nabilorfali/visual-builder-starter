import { FC, ComponentType, ReactNode } from "react";
import { toObject } from "../toObject";
import { LinkDataFragment, ReferenceDataFragment } from "@/gql/graphql";

export interface IProps {
  bgImage?: LinkDataFragment | ReferenceDataFragment | null;
  tag?: keyof JSX.IntrinsicElements | ComponentType;
  [key: string]: any;
  children: ReactNode | ReactNode[];
}

const Container: FC<IProps> = ({
  bgImage,
  style = {},
  tag = "div",
  children,
  ...rest
}) => {
  const link = linkDataToUrl(getLinkData(bgImage));
  const imgSrc = link?.href;
  const styleObject = toObject(style);
  const containerStyle = {
    ...styleObject,
    ...(imgSrc ? { backgroundImage: `url(${imgSrc})` } : {}),
  };

  const Tag: keyof JSX.IntrinsicElements = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag {...rest} style={containerStyle}>
      {Array.isArray(children) ? children : [children]}
    </Tag>
  );
};

export default Container;

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
