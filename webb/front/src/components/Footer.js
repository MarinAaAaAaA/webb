const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <h2 className="footer__heading">НАШИ КОНТАКТЫ</h2>
                <p className="footer__text">Свяжитесь с нами по поводу любых вопросов по почте или телефону</p>
                <p className="footer__contacts">Телефон: +8 556 332 12 00 <br/> E-mail: hello@company.com</p>
                <p className="footer__addres">Большая Семеновская 38а, г.Москва</p>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href=""><img className="footer__image" src="/images/vk.svg"></img></a>
                    </li>
                    <li className="footer__link">
                        <a href=""><img className="footer__image" src="/images/twitter.svg"></img></a>
                    </li>
                    <li className="footer__link">
                        <a href=""><img className="footer__image" src="/images/inst.svg"></img></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;