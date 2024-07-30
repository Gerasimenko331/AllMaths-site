import React from "react";
import "./Greeting.css";
import Arrow from "src/assets/arrow.svg";
import ImageButtonAndroid from "src/Home/Greeting/buttons/Android.js";
import ImageButtonIos from "src/Home/Greeting/buttons/Ios.js";
import Owl from "src/assets/Owl.svg";
import AskFull from "src/assets/Ask.svg";

function BodyGreetingPage() {

  const handleButtonClick = () => {
    const chatUrl = "https://t.me/Nastushenka";
    window.open(chatUrl, "_blank");
  };

  return (
    <div className="body">
      <div className="rectangle1">
        <p className="textStyleFirst">
          <span style={{ color: "#FF932A" }}>All Maths</span> – приложение
           по математике для школьников
        </p>
        <p className="textStyleSecond">
          Программа разработана на основе многолетней  успешной подготовки
          школьников к экзаменам.  Наши ученики сдают ЕГЭ на 95+ баллов,
          ОГЭ на отлично.
        </p>
        <button className="button" style={{ flex: 1, cursor: 'pointer' }} onClick={handleButtonClick}>
          Репетитор
          <img className="imageStyle" src={Arrow} alt="" />
        </button>
      </div>

      <div className="rectangle2">
        <p className="textStyleThird">
          Скачай мобильное приложение  и носи математику в кармане!
        </p>
        <p className="textStyleFourth">
          Уже 10000+ школьников учат формулы
          с помощью приложения,
          
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
        <img src={AskFull} className="imageAskStyle" alt="" />
        <img src={Owl} className="imageOwlStyle" alt="" />
      </div>
    </div>
  );
}

export default BodyGreetingPage;
