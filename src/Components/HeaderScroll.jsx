import { GoDotFill } from "react-icons/go";
import "./HeaderScroll.scss";

function HeaderScroll() {
  return (
    <div className="scroll ">
      <GoDotFill className=" icon current" size={15}></GoDotFill>
      <GoDotFill className="icon" size={15}></GoDotFill>
      <GoDotFill className="icon" size={15}></GoDotFill>
      <GoDotFill className="icon" size={15}></GoDotFill>
    </div>
  );
}

export default HeaderScroll;
