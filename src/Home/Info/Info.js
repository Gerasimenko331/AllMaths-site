import "./Info.css";
import Cup from "../../assets/Cup.svg";
import InfoScrollAnimation from "./InfoScrollAnimation";


function Info() {

  return (
    <div className="pageSecond">
      <img src={Cup} alt="" />
      <div><InfoScrollAnimation /></div>
    </div>
  );
}

export default Info;