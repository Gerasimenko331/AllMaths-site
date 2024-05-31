import React from "react";
import BackgroundPicture from "./images/BackgroundPicture.png";
import Arrow from "./images/arrow.svg";
import ImageButtonAndroid from "./buttons/ImageButtonAndroid";
import ImageButtonIos from "./buttons/ImageButtonIos";
import Owl from "./images/Owl.svg";
import Ask from "./images/askEllipse.png";

function BodyFirstPage() {
  const bodyStyle = {
    backgroundImage: `url(${BackgroundPicture})`, // Используйте кавычки для значения url()
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#096B92",
  };

  const rectangleStyle = {
    width: "1048px",
    height: "530px",
    backgroundColor: "#ffffff",
    margin: "20px",
    borderRadius: "20px",
    padding: "20px", // добавим внутренний отступ для контента
    flexDirection: "column",
    alignItems: "center",
    border: "#CEE7F5 solid 3px",
  };

  const buttonStyle = {
    width: "375px",
    height: "74px",
    backgroundColor: "#FF932A",
    borderRadius: "50px",
    paddingLeft: "65px",
    paddingRight: "65px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Устанавливаем равное расстояние между элементами
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "30px",
    textAlign: "center",
    color: "#FFFFFF",
    border: "none",
    marginLeft: "auto", // Прижимаем кнопку к правому краю
    marginRight: "20px",
    marginTop: "68px",
  };

  const textStyleFirst = {
    fontFamily: "Bitter",
    fontWeight: "bold",
    fontSize: "52px",
    textAlign: "center",
    margin: "20px 0",
  };

  const textStyleSecond = {
    fontFamily: "Nunito",
    fontWeight: "regular",
    fontSize: "30px",
    textAlign: "center",
    margin: "50px",
  };

  const textStyleThird = {
    fontFamily: "Bitter",
    fontWeight: "bold",
    fontSize: "30px",
    textAlign: "center",
    margin: "20px 0",
    color: "#FF932A",
    marginTop: "40px",
  };

  const textStyleFourth = {
    fontFamily: "Nunito",
    fontWeight: "regular",
    fontSize: "30px",
    textAlign: "center",
    margin: "20px",
    marginTop: "40px",
  };

  const imageStyle = {
    width: "40px",
    height: "40px",
  };

  const textStyleButton = {
    flex: "1", // Растянуть текст на всё доступное пространство
  };

  const containerStyle = {
    marginTop: "60px",
    display: "flex",
    justifyContent: "center", // Центрирование по горизонтали
    alignItems: "center", // Центрирование по вертикали
  };

  const buttonContainerStyle = {
    margin: "20px", // Увеличение расстояния между кнопками
  };

  const imageOwlStyle = {
    position: "absolute",
    bottom: "-89px",
    right: "0",
    height: "180px",
  };

  const imageAskStyle = {
    position: "absolute",
    bottom: "-10px",
    right: "164px",
    height: "100px",
  };

  const textStyleAsk = {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "23px",
    textAlign: "center",
    color: "#FFFFFF",
    position: "absolute",
    bottom: "-10px",
    right: "210px",
    zIndex: 1,
  };

  return (
    <div className="body" style={bodyStyle}>
      <div style={rectangleStyle}>
        <p style={textStyleFirst}>
          <span style={{ color: "#FF932A" }}>All Maths</span> – приложение{" "}
          <br /> по математике <br /> для школьников
        </p>
        <p style={textStyleSecond}>
          Программа разработана на основе многолетней <br /> успешной подготовки
          школьников к экзаменам. <br /> Наши ученики сдают ЕГЭ на 95+ баллов,
          ОГЭ на отлично.
        </p>
        <button style={{ ...buttonStyle, ...textStyleButton }}>
          Репетитор
          <img style={imageStyle} src={Arrow} alt="" />
        </button>
      </div>

      <div style={{ ...rectangleStyle, width: "692px" }}>
        <p style={textStyleThird}>
          Скачай мобильное приложение <br /> и носи математику в кармане!
        </p>
        <p style={textStyleFourth}>
          Уже 10000+ школьников учат формулы
          <br />с помощью приложения,
          <br />
          присоединяйся к успеху и ты!
        </p>
        <div style={containerStyle}>
          <div style={buttonContainerStyle}>
            <ImageButtonAndroid />
          </div>
          <div style={buttonContainerStyle}>
            <ImageButtonIos />
          </div>
        </div>
      </div>
      <div>
        <p style={textStyleAsk}>Учи математику с <br />удовольствием!</p>
        <img src={Ask} style={imageAskStyle} alt="" />
        <img src={Owl} style={imageOwlStyle} alt="" />
      </div>
    </div>
  );
}

export default BodyFirstPage;
