import React from "react";
import "./BodyGreetingPage.css";
import Arrow from "./images/arrow.svg";
import ImageButtonAndroid from "./buttons/ImageButtonAndroid";
import ImageButtonIos from "./buttons/ImageButtonIos";
import Owl from "/Users/frontend/AllMaths-site/src/assets/Owl.svg";
import Ask from "./images/askEllipse.png";

function BodyGreetingPage() {

  const handleButtonClick = () => {
    const chatUrl = "https://t.me/Nastushenka"; // Замените на ссылку на ваш чат в Телеграм
    window.open(chatUrl, "_blank");
  };

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
        <button className="button" style={{ flex: 1, cursor: 'pointer' }} onClick={handleButtonClick}>
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

export default BodyGreetingPage;
