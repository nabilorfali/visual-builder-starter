import { FC } from "react";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import {
  NodeInput,
  RichText as OptiRichText,
} from "@remkoj/optimizely-cms-react/components";

export interface IProps {
  value?: NodeInput | null | undefined;
  tag?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}

const RichText: FC<IProps> = ({ fieldName, value, ...rest }) => {
  if (typeof value === "string") {
    return <div dangerouslySetInnerHTML={{ __html: value }} {...rest} />;
  }

  return (
    <CmsEditable
      as={OptiRichText}
      {...rest}
      cmsFieldName={fieldName}
      //@ts-ignore
      text={value?.json}
    />
  );
};

export default RichText;
