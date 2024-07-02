import React from "react";
import vk from "/Users/frontend/AllMaths-site/src/assets/vk.svg";
import mail from "/Users/frontend/AllMaths-site/src/assets/mail.svg";
import phone from "/Users/frontend/AllMaths-site/src/assets/phone.svg";
import line from "/Users/frontend/AllMaths-site/src/assets/lineFooter.svg";

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
    <div style={{ display: "flex", justifyContent: "space-between", width: "94%" }}>
      <img
        className="LineFooter"
        src={line}
        alt=""
        style={{
          // position: "relative",
          // bottom: "-442px",
          // left: "-770px",
          height: "48px",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", width: "240px" }}>
        <button
          onClick={handleButtonClickPHONE}
          style={{
            // position: "relative",
            border: "none",
            background: "none",
            cursor: "pointer",
            height: "48px",
          }}
        >
          <img
            className="VKicon"
            src={phone}
            alt="VK Button"
            style={{
              // position: "absolute",
              // bottom: "-420px",
              // right: "-700px",
              height: "48px",
            }}
          />
        </button>
        <button
          onClick={handleButtonClickVK}
          style={{
            // position: "relative",
            border: "none",
            background: "none",
            cursor: "pointer",
            height: "48px",
          }}
        >
          <img
            className="VKicon"
            src={vk}
            alt="VK Button"
            style={{
              // position: "absolute",
              // bottom: "-420px",
              // right: "-740px",
              height: "48px",
            }}
          />
        </button>
        <button
          onClick={handleButtonClickMAIL}
          style={{
            // position: "relative",
            border: "none",
            background: "none",
            cursor: "pointer",
            height: "48px",
          }}
        >
          <img
            className="VKicon"
            src={mail}
            alt="VK Button"
            style={{
              height: "48px",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default Footer;
