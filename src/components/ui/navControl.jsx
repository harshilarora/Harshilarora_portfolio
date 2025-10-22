import { useNavigate, useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";

const navigate = useNavigate();
const location = useLocation();

const handleScrollTo = (sectionId) => {
  if (location.pathname !== "/") {
    navigate("/", { replace: false });
    setTimeout(() => {
      scroller.scrollTo(sectionId, { smooth: true, offset: -80, duration: 500 });
    }, 100); // wait for page to render
  } else {
    scroller.scrollTo(sectionId, { smooth: true, offset: -80, duration: 500 });
  }
};
