import React from "react";
import "./Conclusion.css";
import Footer from "/Users/frontend/AllMaths-site/src/Home/Footer/Footer.js";
import Owl from "/Users/frontend/AllMaths-site/src/assets/Owl.svg";
import googlePlay from "/Users/frontend/AllMaths-site/src/assets/googlePlayButton.svg";
import appStore from "/Users/frontend/AllMaths-site/src/assets/appStoreButton.svg";

const Conclusion = () => {
  const handleButtonClickGooglePlay = () => {
    const url =
      "https://apps.apple.com/ru/app/all-maths-%D0%B2%D1%81%D1%8F-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0/id1553690815";
    window.open(url, "_blank");
  };
  const handleButtonClickAppStore = () => {
    const url =
      "https://apps.apple.com/ru/app/all-maths-%D0%B2%D1%81%D1%8F-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0/id1553690815";
    window.open(url, "_blank");
  };
  return (
    <div className="page">
      <h1 className="h1">
        Зачем мне <span>All Maths</span>?
      </h1>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: "100px"}}>
        <div className="container">
          <p className="p">
            Поступление в университет и подготовка к нему - всегда волнительный
            процесс. Каждому <br />
            школьнику и родителю хочется добиться поставленных целей и попасть
            <br />в ВУЗ мечты. Многие чувствуют неуверенность в своих силах.
            Кому - то <br />
            требуется освежить знания или подтянуть некоторые темы, кто - то
            пропустил тему в школе
            <br />и хочет нагнать упущенное. Причины бывают разные, но цель одна
            - понять
            <br />
            математику, научиться решать задачи и успешно сдать ОГЭ и ЕГЭ.{" "}
            <br />
            <br />И в этом Вам поможет{" "}
            <span style={{ color: "white" }}>All Maths</span> - приложение по
            математике
            <br /> для школьников 8 - 11 классов. При составлении программы
            учитывались
            <br />
            интересы современных школьников, идущих в ногу со временем. Уже не
            требуется
            <br />
            посещать курсы очно, тратя много времени на дорогу и подстраивая
            свой график
            <br />
            под других людей. В онлайн формате можно заниматься математикой,
            когда удобно, тратя
            <br /> свои ресурсы с умом.
          </p>
          <div style={{marginTop: "10px"}}>
            <h2>Выбирай свой путь и достигай успеха!</h2>
            <div>
              <button
                onClick={handleButtonClickGooglePlay}
                style={{
                  // position: "relative",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  height: "78px",
                  marginLeft: "-8px",
                }}
              >
                <img
                  className=""
                  src={googlePlay}
                  alt=""
                  style={{
                    // position: "absolute",
                    // bottom: "-420px",
                    // right: "-700px",
                    height: "78px",
                  }}
                />
              </button>
              <button
                onClick={handleButtonClickAppStore}
                style={{
                  // position: "relative",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  height: "78px",
                }}
              >
                <img
                  className=""
                  src={appStore}
                  alt=""
                  style={{
                    // position: "absolute",
                    // bottom: "-420px",
                    // right: "-700px",
                    height: "78px",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        <img src={Owl} alt="" className="Owl" />
      </div>
      <Footer />
    </div>
  );
};

export default Conclusion;
