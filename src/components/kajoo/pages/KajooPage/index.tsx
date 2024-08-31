
/* eslint-disable */
// @ts-nocheck
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";

const KajooPage = (props) => {
    return (
    <div
      className="relative block m-0 box-border text-[1rem] text-[#656567] text-left bg-white w-full z-0"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
        <CmsContentArea
        items={props.data.MainContent}
        fieldName="MainContent"
        className="w-full"
        />
    </div>
    );
};

export default KajooPage;
            