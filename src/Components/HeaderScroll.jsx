import { GoDotFill } from "react-icons/go";
import "./HeaderScroll.scss";

function HeaderScroll({ first, second, third, fourth }) {
  return (
    <div className="scroll ">
      <GoDotFill
        className={`icon ${first ? "current" : "" ? "current" : ""}`}
        size={15}
      ></GoDotFill>
      <GoDotFill
        className={`icon ${second ? "current" : ""}`}
        size={15}
      ></GoDotFill>
      <GoDotFill
        className={`icon ${third ? "current" : ""}`}
        size={15}
      ></GoDotFill>
      <GoDotFill
        className={`icon ${fourth ? "current" : ""}`}
        size={15}
      ></GoDotFill>
    </div>
  );
}

export default HeaderScroll;
