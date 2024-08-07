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
        процесс. Каждому 
        школьнику и родителю хочется добиться поставленных целей и попасть
        в ВУЗ мечты. Многие чувствуют неуверенность в своих силах.
        Кому - то 
        требуется освежить знания или подтянуть некоторые темы, кто - то
        пропустил тему в школе
        и хочет нагнать упущенное. Причины бывают разные, но цель одна
        - понять
       
        математику, научиться решать задачи и успешно сдать ОГЭ и ЕГЭ.{" "}
        <br />
        <br /> И в этом Вам поможет{" "}
        <span style={{ color: "white" }}>All Maths</span> - приложение по
        математике
 для школьников 8 - 11 классов. При составлении программы
        учитывались
       
        интересы современных школьников, идущих в ногу со временем. Уже не
        требуется
       
        посещать курсы очно, тратя много времени на дорогу и подстраивая
        свой график
       
        под других людей. В онлайн формате можно заниматься математикой,
        когда удобно, тратя
         свои ресурсы с умом.
      </p>
    </div>
  );
};

export default TextOnScroll;