import React, { useState, useEffect, useRef } from "react";
import Course from './Course';

const Programms = () => {
    const parallaxHandler = (e) => {
        const x = ((e.clientX % e.currentTarget.parentNode.offsetWidth) / e.currentTarget.parentNode.offsetWidth) * 10
        e.currentTarget.animate({
            transform: `translate(${x - 15}%, 0)`
        }, { duration: 2000, fill: 'forwards', timing: 'easeOut' })
    }

    return (
        <div>
            <div className='courses__promo'>
                <h1 className='courses__heading'>Программа<br/> курсов</h1>
                <div className='courses__image-wrapper'>
                    <img className='courses__image' src='/images/programm-bg.png' onMouseMove={parallaxHandler} />
                </div>
            </div>
            <div className='programms__wrapper'>
                <div className='programms__programm programm'>
                    <h2 className='programm__heading'>Сам себе стилист</h2>
                    <img src='/images/flowers.png' className='programm__image'/>
                    <h3 className='programm__subheading'>Программа курса</h3>
                    <ul className='programm__list'>
                        <li className='programm__item'>Вводный модуль. Знакомство со школой, правила на курсе. Цели</li>
                        <li className='programm__item'>Стиль - это больше, чем просто одежда</li>
                        <li className='programm__item'>Типажи</li>
                        <li className='programm__item'>Базовый гардероб</li>
                        <li className='programm__item'>Теория цвета</li>
                        <li className='programm__item'>Типы фигур, коррекция</li>
                        <li className='programm__item'>Масштаб в гардеробе</li>
                        <li className='programm__item'>Стилистические приёмы</li>
                        <li className='programm__item'>Разбор гардероба для себя</li>
                    </ul>
                    <h3 className='programm__subheading'>Бонусные уроки</h3>
                    <ul className='programm__list'>
                        <li className='programm__item'>Бонусный урок "Аксессуары"</li>
                        <li className='programm__item'>Бонусный урок "Тренды/Антитренды"</li>
                        <li className='programm__item'>Бонусный урок "Самостоятельный шопинг"</li>
                        <li className='programm__item'>Бонусный урок "Этикет"</li>
                        <li className='programm__item'>Бонусный урок "Макияж"</li>
                        <li className='programm__item'>Бонусный урок "Как не заболет шопоголизмом"</li>
                    </ul>
                    <h3 className='programm__subheading'>Результат</h3>
                    <ul className='programm__list'>
                        <li className='programm__item'>Обратная связь и проверка домашних заданий от кураторов курса</li>
                        <li className='programm__item'>Закрытый зум с куратором в начале и в конце курса</li>
                        <li className='programm__item'>Ежедневные отчеты и проверки от стилистов курса</li>
                        <li className='programm__item'>Чат участников и кураторов</li>
                        <li className='programm__item'>Уроки выходят 2-3 раза в неделю</li>
                        <li className='programm__item'>Длительность курса - 4 недели</li>
                        <li className='programm__item'>Доступ к курсу 2 месяца</li>
                    </ul>
                </div>
                <div className='programms__programm programm'>
                    <h2 className='programm__heading'>Профессия персональный стилист</h2>
                    <img src='/images/cam.png' className='programm__image'/>
                    <h3 className='programm__subheading'>Программа курса</h3>
                    <ul className='programm__list'>
                        <li className='programm__item'>Вводный модуль. Знакомство со школой, правила на курсе. Цели</li>
                        <li className='programm__item'>Кто такой стилист. Самые популярные направления в профессии. Стиль - это больше чем просто одежда</li>
                        <li className='programm__item'>Типажи</li>
                        <li className='programm__item'>Базовый гардероб</li>
                        <li className='programm__item'>Теория цвета</li>
                        <li className='programm__item'>Типы фигур, коррекция</li>
                        <li className='programm__item'>Масштаб в гардеробе</li>
                        <li className='programm__item'>Масштаб в гардеробе</li>
                        <li className='programm__item'>Стилистические приёмы</li>
                        <li className='programm__item'>Тонкости прои выборе одежды</li>
                        <li className='programm__item'>Психологиеские типы клиентов</li>
                        <li className='programm__item'>Первая встреча с клиентом</li>
                        <li className='programm__item'>Аксессуары</li>
                        <li className='programm__item'>Шопинг сопровождение</li>
                        <li className='programm__item'>Сотрудничество с магазинами</li>
                        <li className='programm__item'>Выступления и другие мероприятия</li>
                        <li className='programm__item'>Съемки и фотосессии</li>
                    </ul>
                    <h3 className='programm__subheading'>Бонусные уроки</h3>
                    <ul className='programm__list'>
                        <li className='programm__item'>Бонусный урок "Аксессуары"</li>
                        <li className='programm__item'>Бонусный урок "Тренды/Антитренды"</li>
                        <li className='programm__item'>Бонусный урок "Самостоятельный шопинг"</li>
                        <li className='programm__item'>Бонусный урок "Этикет"</li>
                        <li className='programm__item'>Бонусный урок "Макияж"</li>
                        <li className='programm__item'>Бонусный урок "Как не заболет шопоголизмом"</li>
                        <li className='programm__item'>Бонусный урок «Психологические страхи в работе» (от приглашенного спикера)</li>
                        <li className='programm__item'>Бонусный урок «Этикет» (от приглашенного спикера)</li>
                        <li className='programm__item'>Бонусный урок «Макияж» (от приглашенного спикера)</li>
                        <li className='programm__item'>Бонусный урок «Продвижение соц сетей» (от приглашенного спикера)</li>
                    </ul>
                    <h3 className='programm__subheading'>Результат</h3>
                    <ul className='programm__list'>
                        <li className='programm__item'>Итоговая и практическая работа</li>
                        <li className='programm__item'>Обратная связь и проверка домашних заданий от кураторов курса</li>
                        <li className='programm__item'>4 закрытые онлайн встречи с куратором</li>
                        <li className='programm__item'>Чат с участниками и куратором</li>
                        <li className='programm__item'>Уроки выходят 2-3 раза в неделю</li>
                        <li className='programm__item'>Длительность курса - 6 недель</li>
                        <li className='programm__item'>Доступ к курсу 3 месяца</li>
                    </ul>
                </div>
                <div className='programms__programm programm'>
                    <h2 className='programm__heading'>Сам себе стилист</h2>
                    <img src='/images/flowers.png' className='programm__image'/>
                    <h3 className='programm__subheading'>Программа курса</h3>
                    <ul className='programm__list'>
                        <li className='programm__item'>Вводный модуль. Знакомство со школой, правила на курсе. Цели</li>
                        <li className='programm__item'>Стиль - это больше, чем просто одежда</li>
                        <li className='programm__item'>Типажи</li>
                        <li className='programm__item'>Базовый гардероб</li>
                        <li className='programm__item'>Теория цвета</li>
                        <li className='programm__item'>Типы фигур, коррекция</li>
                        <li className='programm__item'>Масштаб в гардеробе</li>
                        <li className='programm__item'>Стилистические приёмы</li>
                        <li className='programm__item'>Разбор гардероба для себя</li>
                    </ul>
                    <h3 className='programm__subheading'>Бонусные уроки</h3>
                    <ul className='programm__list'>
                        <li className='programm__item'>Бонусный урок "Аксессуары"</li>
                        <li className='programm__item'>Бонусный урок "Тренды/Антитренды"</li>
                        <li className='programm__item'>Бонусный урок "Самостоятельный шопинг"</li>
                        <li className='programm__item'>Бонусный урок "Этикет"</li>
                        <li className='programm__item'>Бонусный урок "Макияж"</li>
                        <li className='programm__item'>Бонусный урок "Как не заболет шопоголизмом"</li>
                    </ul>
                    <h3 className='programm__subheading'>Результат</h3>
                    <ul className='programm__list'>
                        <li className='programm__item'>Обратная связь и проверка домашних заданий от кураторов курса</li>
                        <li className='programm__item'>Закрытый зум с куратором в начале и в конце курса</li>
                        <li className='programm__item'>Ежедневные отчеты и проверки от стилистов курса</li>
                        <li className='programm__item'>Чат участников и кураторов</li>
                        <li className='programm__item'>Уроки выходят 2-3 раза в неделю</li>
                        <li className='programm__item'>Длительность курса - 4 недели</li>
                        <li className='programm__item'>Доступ к курсу 2 месяца</li>
                    </ul>
                </div>
                <div className='programms__programm programm'>
                    <h2 className='programm__heading'>Профессия персональный стилист</h2>
                    <img src='/images/cam.png' className='programm__image'/>
                    <h3 className='programm__subheading'>Программа курса</h3>
                    <ul className='programm__list'>
                        <li className='programm__item'>Вводный модуль. Знакомство со школой, правила на курсе. Цели</li>
                        <li className='programm__item'>Кто такой стилист. Самые популярные направления в профессии. Стиль - это больше чем просто одежда</li>
                        <li className='programm__item'>Типажи</li>
                        <li className='programm__item'>Базовый гардероб</li>
                        <li className='programm__item'>Теория цвета</li>
                        <li className='programm__item'>Типы фигур, коррекция</li>
                        <li className='programm__item'>Масштаб в гардеробе</li>
                        <li className='programm__item'>Масштаб в гардеробе</li>
                        <li className='programm__item'>Стилистические приёмы</li>
                        <li className='programm__item'>Тонкости прои выборе одежды</li>
                        <li className='programm__item'>Психологиеские типы клиентов</li>
                        <li className='programm__item'>Первая встреча с клиентом</li>
                        <li className='programm__item'>Аксессуары</li>
                        <li className='programm__item'>Шопинг сопровождение</li>
                        <li className='programm__item'>Сотрудничество с магазинами</li>
                        <li className='programm__item'>Выступления и другие мероприятия</li>
                        <li className='programm__item'>Съемки и фотосессии</li>
                    </ul>
                    <h3 className='programm__subheading'>Бонусные уроки</h3>
                    <ul className='programm__list'>
                        <li className='programm__item'>Бонусный урок "Аксессуары"</li>
                        <li className='programm__item'>Бонусный урок "Тренды/Антитренды"</li>
                        <li className='programm__item'>Бонусный урок "Самостоятельный шопинг"</li>
                        <li className='programm__item'>Бонусный урок "Этикет"</li>
                        <li className='programm__item'>Бонусный урок "Макияж"</li>
                        <li className='programm__item'>Бонусный урок "Как не заболет шопоголизмом"</li>
                        <li className='programm__item'>Бонусный урок «Психологические страхи в работе» (от приглашенного спикера)</li>
                        <li className='programm__item'>Бонусный урок «Этикет» (от приглашенного спикера)</li>
                        <li className='programm__item'>Бонусный урок «Макияж» (от приглашенного спикера)</li>
                        <li className='programm__item'>Бонусный урок «Продвижение соц сетей» (от приглашенного спикера)</li>
                    </ul>
                    <h3 className='programm__subheading'>Результат</h3>
                    <ul className='programm__list'>
                        <li className='programm__item'>Итоговая и практическая работа</li>
                        <li className='programm__item'>Обратная связь и проверка домашних заданий от кураторов курса</li>
                        <li className='programm__item'>4 закрытые онлайн встречи с куратором</li>
                        <li className='programm__item'>Чат с участниками и куратором</li>
                        <li className='programm__item'>Уроки выходят 2-3 раза в неделю</li>
                        <li className='programm__item'>Длительность курса - 6 недель</li>
                        <li className='programm__item'>Доступ к курсу 3 месяца</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Programms;