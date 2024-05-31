import React from "react";

function BodySecondPage() {
  const rectangleStyleFirst = {
    width: "600px",
    height: "170px",
    backgroundColor: "#ffffff",
    margin: "20px",
    borderRadius: "20px",
    padding: "20px", // добавим внутренний отступ для контента
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "40px",
    justifyContent: "center", // Центрирование текста по горизонтали
    textAlign: "center",
  };

  const rectangleStyleSecond = {
    width: "1100px",
    height: "170px",
    backgroundColor: "#ffffff",
    margin: "20px",
    borderRadius: "20px",
    padding: "20px", // добавим внутренний отступ для контента
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "40px",
    textAlign: "center",
  };

  const rectangleStyleThird = {
    width: "1600px",
    height: "170px",
    backgroundColor: "#ffffff",
    margin: "20px",
    borderRadius: "20px",
    padding: "20px", // добавим внутренний отступ для контента
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "40px",
    textAlign: "center",
    
  };

  const pageStyle = {
    backgroundColor: "#CEE7F5", // Укажите нужный цвет фона страницы здесь
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    borderTop: "white solid 2px",
  };

  return (
    <div style={pageStyle}>
      <div style={rectangleStyleFirst}>Бесплатно</div>
      <div style={rectangleStyleSecond}>
        Вся необходимая теория для сдачи ОГЭ и ЕГЭ
      </div>
      <div style={rectangleStyleThird}>
        Возможность изучать математику в любом месте и в любое время
        <br />
        Быстрый поиск информации помогает ускорить выполнение ДЗ
      </div>
    </div>
  );
}

export default BodySecondPage;
