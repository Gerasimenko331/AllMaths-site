import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Info.css";

const InfoScrollAnimation = () => {
//   const { ref: firstRef, inView: firstInView } = useInView({ threshold: 0.5 });
//   const { ref: secondRef, inView: secondInView } = useInView({ threshold: 0.5 });
//   const { ref: thirdRef, inView: thirdInView } = useInView({ threshold: 0.5 });

const [isIntersecting, setIsIntersecting] = useState(false);

  return (
    <div className="pageSecondInfo">
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
    </div>
  );
};

export default InfoScrollAnimation;