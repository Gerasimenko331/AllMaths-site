import React from "react";
import "./Conclusion.css";
import Footer from "/Users/frontend/AllMaths-site/src/Home/Footer/Footer.js";
import Owl from "/Users/frontend/AllMaths-site/src/assets/Owl.svg";
import googlePlay from "/Users/frontend/AllMaths-site/src/assets/googlePlayButton.svg";
import appStore from "/Users/frontend/AllMaths-site/src/assets/appStoreButton.svg";
import TextOnScroll from './TextOnScroll'

const Conclusion = () => {
  const handleButtonClickGooglePlay = () => {
    const url =
      "https://play.google.com/store/apps/details?id=com.allmaths";
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
      <div className="flex-container">
        <div className="container">
          
          <TextOnScroll/>
          <div className="margin-top-10">
            <h2>Выбирай свой путь и достигай успеха!</h2>
            <div className="buttons">
              <button
                onClick={handleButtonClickGooglePlay}
                className="button-conclusion"
              >
                <img
                  className="height-77"
                  src={googlePlay}
                  alt=""
                />
              </button>
              <button
                onClick={handleButtonClickAppStore}
                className="button-conclusion"
              >
                <img
                  src={appStore}
                  alt=""
                  className="height-77"
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
