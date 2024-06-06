import React, { useEffect, useRef } from "react";
import "./Info.css";
import Cup from "../../assets/Cup.svg";
import InfoScrollAnimation from "./InfoScrollAnimation";


function Info() {

  return (
    <div className="pageSecond">
      <img src={Cup} alt="" />
       <div className="rectangle rectangle-first">
        <div className="rectangle-text-info">1</div> Бесплатно
      </div>
      <div className="rectangle rectangle-second">
        <div className="rectangle-text-info">2</div> Вся необходимая теория для сдачи ОГЭ и ЕГЭ
      </div>
      <div className="rectangle rectangle-third">
        <div className="rectangle-text-info">3</div> 
        Возможность изучать математику в любом месте и в любое время
        <br />
        Быстрый поиск информации помогает ускорить выполнение ДЗ
      </div>
      {/* <InfoScrollAnimation/> */}
    </div>
  );
}

export default Info;