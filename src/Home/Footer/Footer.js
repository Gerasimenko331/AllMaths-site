import React from "react";
import vk from "/Users/frontend/AllMaths-site/src/assets/vk.svg";
import mail from "/Users/frontend/AllMaths-site/src/assets/mail.svg";
import phone from "/Users/frontend/AllMaths-site/src/assets/phone.svg";
import line from "/Users/frontend/AllMaths-site/src/assets/lineFooter.svg";
import "./Footer.css";

function Footer() {
  const handleButtonClickVK = () => {
    const url = "https://vk.com/all_maths";
    window.open(url, "_blank");
  };

  const handleButtonClickPHONE = () => {
    const url = "https://t.me/Nastushenka";
    window.open(url, "_blank");
  };

  const handleButtonClickMAIL = () => {
    const email = "aegerasimenko@yandex.ru";
    const subject = "Вопрос по сайту";
    const body = "Здравствуйте!";

    window.open(
      `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    );
  };

  return (
    <div className="footer-container">
      <img className="LineFooter" src={line} alt="" />
      <div className="flex-footer-container">
        <button onClick={handleButtonClickPHONE} className="button-icon">
          <img className="VKicon" src={phone} alt="VK Button" />
        </button>
        <button onClick={handleButtonClickVK} className="button-icon">
          <img className="VKicon" src={vk} alt="VK Button" />
        </button>
        <button onClick={handleButtonClickMAIL} className="button-icon">
          <img className="VKicon" src={mail} alt="VK Button" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
