import React, { useEffect, useRef } from "react";
import "./BodyInfoPage.css";
import Cup from "../../assets/Cup.svg";

// function isElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top &gt;= 0 &amp;&amp;
//     rect.left &gt;= 0 &amp;&amp;
//     rect.bottom &lt;= (window.innerHeight || document.documentElement.clientHeight) &amp;&amp;
//     rect.right &lt;= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }
 
// function animateScrollingElements() {
//   const elements = document.querySelectorAll('.element-to-animate');
//   elements.forEach((element) =&gt; {
//     if (isElementInViewport(element)) {
//       element.classList.add('animated');
//     }
//   });
// }
 
// document.addEventListener('DOMContentLoaded', animateScrollingElements);
// window.addEventListener('scroll', animateScrollingElements);

function BodyInfoPage() {
  const firstRectangleRef = useRef(null);

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (firstRectangleRef.current && isInViewport(firstRectangleRef.current)) {
        firstRectangleRef.current.classList.add('animate');
        document.removeEventListener('scroll', handleScroll); // Убираем обработчик после первой анимации
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="pageSecond">
      <img src={Cup} alt="" className="cupImage" />
      <div ref={firstRectangleRef} className="rectangle rectangle-first">
        <div className="rectangle-text-info">1</div> Бесплатно
      </div>
      <div className="rectangle rectangle-second">
        <div className="rectangle-text-info">2</div> Вся необходимая теория для сдачи ОГЭ и ЕГЭ
      </div>
      <div className="rectangle rectangle-third">
        <div className="rectangle-text-info">3</div> 
        Возможность изучать математику в любом месте и в любое время
        <br />
        Быстрый поиск информации помогает ускорить выполнение ДЗ
      </div>
    </div>
  );
}

export default BodyInfoPage;