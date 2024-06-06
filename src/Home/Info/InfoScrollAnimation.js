import React from "react";
import { useInView } from "react-intersection-observer";
import "./Info.css";

const InfoScrollAnimation = () => {
  const [active, setActive] = React.useState(false);
  const {ref, inView} = useInView({
threshold: 1
  });

  React.useEffect(() => {
if (inView) {
  setActive(true);
}
  },[inView])

  return (
    <div className="pageSecondInfoActive">
      <div className={`rectangleInfo ${active ? 'rectangle-first' : ''}`} ref={ref}>
        <div className="rectangle-text-info">1</div> Бесплатно
      </div>
      <div className={`rectangleInfo ${active ? 'rectangle-second' : ''}`} ref={ref}>
        <div className="rectangle-text-info">2</div> Вся необходимая теория для сдачи ОГЭ и ЕГЭ
      </div>
      <div className={`rectangleInfo ${active ? 'rectangle-third' : ''}`} ref={ref}>
        <div className="rectangle-text-info">3</div> 
        Возможность изучать математику в любом месте и в любое время
        <br />
        Быстрый поиск информации помогает ускорить выполнение ДЗ
      </div>
    </div>
  );
};

export default InfoScrollAnimation;