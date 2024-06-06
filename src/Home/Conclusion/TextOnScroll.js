import React from 'react';
import './Conclusion.css'; // Предполагается что тут хранятся стили для вашего компонента
import { useInView } from 'react-intersection-observer';

const TextOnScroll = () => {
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
    <div>
      <p className={`text ${active ? 'active' : ''}`} ref={ref}>
        Поступление в университет и подготовка к нему - всегда волнительный
        процесс. Каждому <br />
        школьнику и родителю хочется добиться поставленных целей и попасть
        <br /> в ВУЗ мечты. Многие чувствуют неуверенность в своих силах.
        Кому - то <br />
        требуется освежить знания или подтянуть некоторые темы, кто - то
        пропустил тему в школе
        <br /> и хочет нагнать упущенное. Причины бывают разные, но цель одна
        - понять
        <br />
        математику, научиться решать задачи и успешно сдать ОГЭ и ЕГЭ.{" "}
        <br />
        <br /> И в этом Вам поможет{" "}
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
    </div>
  );
};

export default TextOnScroll;