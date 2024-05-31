import React from "react";
import "./BodyFirstPage.css";
import Arrow from "./images/arrow.svg";
import ImageButtonAndroid from "./buttons/ImageButtonAndroid";
import ImageButtonIos from "./buttons/ImageButtonIos";
import Owl from "./images/Owl.svg";
import Ask from "./images/askEllipse.png";

function BodyFirstPage() {
  return (
    <div className="body">
      <div className="rectangle">
        <p className="textStyleFirst">
          <span style={{ color: "#FF932A" }}>All Maths</span> – приложение
          <br /> по математике <br /> для школьников
        </p>
        <p className="textStyleSecond">
          Программа разработана на основе многолетней <br /> успешной подготовки
          школьников к экзаменам. <br /> Наши ученики сдают ЕГЭ на 95+ баллов,
          ОГЭ на отлично.
        </p>
        <button className="button" style={{ flex: 1 }}>
          Репетитор
          <img className="imageStyle" src={Arrow} alt="" />
        </button>
      </div>

      <div className="rectangle larger">
        <p className="textStyleThird">
          Скачай мобильное приложение <br /> и носи математику в кармане!
        </p>
        <p className="textStyleFourth">
          Уже 10000+ школьников учат формулы
          <br />с помощью приложения,
          <br />
          присоединяйся к успеху и ты!
        </p>
        <div className="containerStyle">
          <div className="buttonContainerStyle">
            <ImageButtonAndroid />
          </div>
          <div className="buttonContainerStyle">
            <ImageButtonIos />
          </div>
        </div>
      </div>
      <div>
        <p className="textStyleAsk">
          Учи математику с <br />
          удовольствием!
        </p>
        <img src={Ask} className="imageAskStyle" alt="" />
        <img src={Owl} className="imageOwlStyle" alt="" />
      </div>
    </div>
  );
}

export default BodyFirstPage;
