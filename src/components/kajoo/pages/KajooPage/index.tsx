
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";

const KajooPage = (props) => {
    return (
    <div className="outer-padding">
        <div className="mx-auto container">
        <div className="py-[32pt]">
            <CmsContentArea
            items={props.data.MainContent}
            fieldName="MainContent"
            className="w-full mt-[32pt]"
            />
        </div>
        </div>
    </div>
    );
};

export default KajooPage;
            