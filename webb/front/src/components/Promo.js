import Subscribe from './Subscribe'

const Promo = () => {

    const parallaxHandler = (e) => {
        const x = ((e.clientX % e.currentTarget.parentNode.offsetWidth) / e.currentTarget.parentNode.offsetWidth) * 10
        e.currentTarget.animate({
            transform: `translate(${x - 15}%, 0)`
        }, {duration: 2000, fill: 'forwards', timing: 'easeOut'})
    }

    window.onload = () => {
        let items = document.getElementsByClassName('plan__item')
        for(let i = 0; i < items.length; i++) {
            items[i].setAttribute('data-before', i + 1);
        }
    }    

    window.addEventListener('scroll', () => {
        if(document.getElementsByClassName('promo__info').length > 0) {
            let rect = document.getElementsByClassName('promo__info')[0].getClientRects()[0]
            document.documentElement.style.setProperty('--scroll', ((rect.y - rect.height*1.5)) / (window.innerHeight/1.5 - rect.height/2));
        }

            let benefit = document.getElementsByClassName('item');
                for(let i = 0; i < benefit.length; i++) {
                    let x = (benefit[i].getClientRects()[0].y) - window.innerHeight / 1.2
                    if(x < 0) {
                        x = 0
                    }
                    benefit[i].animate({
                        transform: `translate(${x}%, 0)`
                    }, {duration: 1000, fill: 'forwards', timing: 'easeOut'})
                }
        }, false);

    return (
        <div className="promo">
            <div className="promo__text">
                <h1 className="promo__header">
                    Онлайн курсы
                </h1>
                <p className="promo__paragraph">
                    по стилю и имиджу
                </p>
            </div>
            <div className="promo__background">
                <div className="promo__tile">
                    <img className="promo__image" src="./images/promo1.png" onMouseMove={parallaxHandler}></img>
                </div>
                <div className="promo__tile">
                    <img className="promo__image" src="./images/promo2.png" onMouseMove={parallaxHandler}></img>
                </div>
                <div className="promo__tile">
                    <img className="promo__image" src="./images/promo3.png" onMouseMove={parallaxHandler}></img>
                </div>
            </div>
            <div className="promo__info">
                <p className="promo__info-text">
                    Вы научитесь профессионально работать над стилем. Узнаете, как разрабатывать 
                    концепции для fashion-съёмок и создавать яркие образы. Научитесь подбирать 
                    гардероб для частных клиентов. Сможете работать в крупных fashion-проектах 
                    или как персональный стилист.
                </p>
            </div>
            <div className="promo__benefits benefits">
                <div className="benefits__banner">
                    <h2 className="benefits__header">Что даёт профессия Fashion-стилиста?</h2>
                    <div className="benefits__background">
                        <img className="benefits__image" src='./images/benefits.png'></img>
                    </div>
                </div>
                <div className="benefits__wrapper">
                    <ul className="benefits__list">
                        <li className="benefits__benefit benefit item">
                            <img className="benefit__marker" src="./images/marker.svg"></img>
                            <div className="benefit__text">
                                <div className="benefit__heading">У вас будет работа</div>
                                <div className="benefit__paragraph">Fashion-рынок в России трансформируется. Появляется много новых дизайнеров и локальных брендов, но не все знают о них. Стилисты, которые могут найти для клиентов лучшие образы и не выйти из бюджета-сейчас на вес золота.</div>
                            </div>
                        </li>
                        <li className="benefits__benefit benefit item">
                            <img className="benefit__marker" src="./images/marker.svg"></img>
                            <div className="benefit__text">
                                <div className="benefit__heading">Достойный доход</div>
                                <div className="benefit__paragraph">Зарплата начинающего специалиста стартует от 60.000 рублей. Вознаграждение опытного эксперта-от 100.000 и выше. Специалист на фрилансе не ограничен в заработке, все зависит от желания, навыков и опыта.</div>
                            </div>  
                        </li>
                        <li className="benefits__benefit benefit item">
                            <img className="benefit__marker" src="./images/marker.svg"></img>
                            <div className="benefit__text">
                                <div className="benefit__heading">Развитие в разных направлениях</div>
                                <div className="benefit__paragraph">Вы можете работать персональным стилистом и помогать клиентам с разбором гардероба. Или стать стилистом fashion-съемок и участвовать в создании образов для рекламы, блогеров, журналов и фотопроектов.</div>
                            </div>
                        </li>
                        <li className="benefits__benefit benefit item">
                            <img className="benefit__marker" src="./images/marker.svg"></img>
                            <div className="benefit__text">
                                <div className="benefit__heading">Интересные задачи и никакой рутины</div>
                                <div className="benefit__paragraph">Шопинг, съемки, подбор модных образов-все это часть вашей будущей профессии. У вас просто не будет времени скучать! А позитивные эмоции клиентов зарядят положительной энергией.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="promo__plan plan">
                <div className="plan__banner">
                    <h2 className="plan__banner-heading">Как проходит обучение на платформе</h2>
                    <div className="plan__background">
                        <img className="plan__banner-image" src="./images/plan.jpeg"></img>
                    </div>
                </div>
                <ul className="plan__list">
                    <li className="plan__item item">
                        <div className="plan__text">
                            <div className="plan__heading">Смотрите материалы в удобное время</div>
                            <div className="plan__paragraph">Изучаете теорию и практикуетесь на задачах, приближённых к реальным.</div>
                        </div>
                    </li>
                    <li className="plan__item item">
                        <div className="plan__text">
                            <div className="plan__heading">Выполняете практические работы</div>
                            <div className="plan__paragraph">Решаете задачи после каждого модуля и закрепляете знания.</div>
                        </div>
                    </li>
                    <li className="plan__item item">
                        <div className="plan__text">
                            <div className="plan__heading">Работаете с проверяющим экспертом</div>
                            <div className="plan__paragraph">Получаете обратную связь по каждой работе в течение 1–3 рабочих дней.</div>
                        </div>
                    </li>
                    <li className="plan__item item">
                        <div className="plan__text">
                            <div className="plan__heading">Разрабатываете итоговый проект</div>
                            <div className="plan__paragraph">Презентуете проект экспертам, дополняете портфолио и получаете сертификат о прохождении курса.</div>
                        </div>
                    </li>
                </ul>
                <button className="plan__button">Подробнее</button>
            </div>
            <Subscribe></Subscribe>
        </div>
    );
}

export default Promo;