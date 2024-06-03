import React from "react";
import './BodyInfoPage.css';
import Cup from '../../assets/Cup.svg';

function BodyInfoPage() {

  return (
    <div className="pageSecond">
      <img src={Cup} alt="" />
      <div className="rectangle-first">Бесплатно</div>
      <div className="rectangle-second">
        Вся необходимая теория для сдачи ОГЭ и ЕГЭ
      </div>
      <div className="rectangle-third">
        Возможность изучать математику в любом месте и в любое время
        <br />
        Быстрый поиск информации помогает ускорить выполнение ДЗ
      </div>
    </div>
  );
}

export default BodyInfoPage;
