import React from "react";
import vk from "/Users/frontend/AllMaths-site/src/assets/vk.svg";
import mail from "/Users/frontend/AllMaths-site/src/assets/mail.svg";
import phone from "/Users/frontend/AllMaths-site/src/assets/phone.svg";

function Footer() {
  const handleButtonClickVK = () => {
    const url =
      "https://vk.com/all_maths";
    window.open(url, "_blank");
  };

  // const handleButtonClickMAIL = () => {
  //   const url =
  //     "https://apps.apple.com/ru/app/all-maths-%D0%B2%D1%81%D1%8F-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82И Styling ка/id1553690815";
  //   window.open(url, "_blank");
  // };

  const handleButtonClickPHONE = () => {
    const url =
      "https://t.me/Nastushenka";
    window.open(url, "_blank");
  };

  const handleButtonClickMAIL = () => {
    const email = 'aegerasimenko@yandex.ru';
    const subject = 'Вопрос по сайту';
    const body = 'Здравствуйте!';

    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
};

  return (
    <div>
      <button
        onClick={handleButtonClickPHONE}
        style={{
          position: "relative",
          border: "none",
          background: "none",
          cursor: "pointer",
          width: "50px",
          height: "50px",
        }}
      >
        <img
          className="VKicon"
          src={phone}
          alt="VK Button"
          style={{
            position: "absolute",
            bottom: "-420px",
            right: "-700px",
            width: "50px",
            height: "50px",
          }}
        />
      </button>
      <button
        onClick={handleButtonClickVK}
        style={{
          position: "relative",
          border: "none",
          background: "none",
          cursor: "pointer",
          width: "50px",
          height: "50px",
        }}
      >
        <img
          className="VKicon"
          src={vk}
          alt="VK Button"
          style={{
            position: "absolute",
            bottom: "-420px",
            right: "-740px",
            width: "50px",
            height: "50px",
          }}
        />
      </button>
      <button
        onClick={handleButtonClickMAIL}
        style={{
          position: "relative",
          border: "none",
          background: "none",
          cursor: "pointer",
          width: "50px",
          height: "50px",
        }}
      >
        <img
          className="VKicon"
          src={mail}
          alt="VK Button"
          style={{
            position: "absolute",
            bottom: "-420px",
            right: "-780px",
            width: "50px",
            height: "50px",
          }}
        />
      </button>
    </div>
  );
}

export default Footer;
