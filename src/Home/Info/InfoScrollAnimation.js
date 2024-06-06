import React, { useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import './Info.css';

const InfoScrollAnimation = () => {
    const handleIntersection = (inView, entry) => {
        if (inView) {
            entry.target.classList.add('active');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            console.log('Current Y Position: ' + currentScrollY);
            if (currentScrollY===1000) {
                console.log('start animation')
            }
        };

        // Добавление обработчика события прокрутки при монтировании компонента
        window.addEventListener('scroll', handleScroll);

        // Отписка от обработчика при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Пустой массив зависимостей означает, что эффект будет запускаться только один раз при монтировании


    return (
        <div>
            <InView as="div" onChange={handleIntersection}>
                <div className="rectangle rectangle-first">
                    <div className="rectangle-text-info">1</div> Бесплатно
                </div>
            </InView>
            <InView as="div" onChange={handleIntersection}>
                <div className="rectangle rectangle-second">
                    <div className="rectangle-text-info">2</div> Вся необходимая теория для сдачи ОГЭ и ЕГЭ
                </div>
            </InView>
            <InView as="div" onChange={handleIntersection}>
                <div className="rectangle rectangle-third">
                    <div className="rectangle-text-info">3</div>
                    Возможность изучать математику в любом месте и в любое время
                    <br />
                    Быстрый поиск информации помогает ускорить выполнение ДЗ
                </div>
            </InView>
        </div>
    );
};

export default InfoScrollAnimation;