import HeroBanner from "./HeroBanner";
import MainNavigation from "./MainNavigation";
import DifferentorPanel from "./DifferentorPanel";
import BackgroundDifferentiatorPanel from "./BackgroundDifferentiatorPanel";
import IntroOneColumn from "./IntroOneColumn";
import ReverseDifferentorPanel from "./ReverseDifferentorPanel";

const kajooComponentDictionary = [
  {
    type: "Component/Element/HeroBannerElement",
    component: HeroBanner,
  },
  {
    type: "Component/Element/MainNavigationElement",
    component: MainNavigation,
  },
  {
    type: "Component/Element/DifferentorPanelElement",
    component: DifferentorPanel,
  },
  {
    type: "Component/Element/BackgroundDifferentiatorPanelElement",
    component: BackgroundDifferentiatorPanel,
  },
  {
    type: "Component/Element/IntroOneColumnElement",
    component: IntroOneColumn,
  },
  {
    type: "Component/Element/ReverseDifferentorPanelElement",
    component: ReverseDifferentorPanel,
  },
];

export default kajooComponentDictionary;
