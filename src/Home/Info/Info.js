import "./Info.css";
import Cup from "../../assets/Cup.svg";
import InfoScrollAnimation from "./InfoScrollAnimation";
import Owl from "src/assets/Owl.svg";
import AskFull from "src/assets/Ask.svg";


function Info() {

  return (
    <div className="pageSecond">
      <img src={Cup} alt="" />
      <div><InfoScrollAnimation /></div>
      <div>
        {/* <p className="textStyleAsk1">
          Учи математику с <br />
          удовольствием!
        </p> */}
        <img src={AskFull} className="imageAskStyle1" alt="" />
        <img src={Owl} className="imageOwlStyle1" alt="" />
      </div>
    </div>
  );
}

export default Info;