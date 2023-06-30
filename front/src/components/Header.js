import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import Centrifuge from 'centrifuge';

const Header = () => {
    
// const Header = () => {
//     useEffect(() => {
//         const centrifuge = new Centrifuge('ws://localhost:8001/connection/websocket', {});

//         centrifuge.on('connecting', function (ctx) {
//           console.log(`connecting: ${ctx.code}, ${ctx.reason}`);
//         }).on('connected', function (ctx) {
//           console.log(`connected over ${ctx.transport}`);
//         }).on('disconnected', function (ctx) {
//           console.log(`disconnected: ${ctx.code}, ${ctx.reason}`);
//         }).connect();

//         const sub = centrifuge.newSubscription('channel');

//         sub.on('publication', function (ctx) {
//           document.getElementById('container').innerHTML = ctx.data.value;
//           document.title = ctx.data.value;
//         }).on('subscribing', function (ctx) {
//           console.log(`subscribing: ${ctx.code}, ${ctx.reason}`);
//         }).on('subscribed', function (ctx) {
//           console.log('subscribed', ctx);
//         }).on('unsubscribed', function (ctx) {
//           console.log(`unsubscribed: ${ctx.code}, ${ctx.reason}`);
//         }).subscribe();
//       }, []);
    return (
        <div className="header" id="header">
            <div className="header__wrapper">
                <div className="header__navigation">
                    <ul className="header__links">
                        <li className="header__item"><Link exact to={"/"} className="header__link" id="cent">Главная</Link></li>
                        <li className="header__item"><Link exact to={"/courses/"} className="header__link">Тарифы</Link></li>
                        <li className="header__item"><Link exact to={"/classes"} className="header__link">Мастер-классы</Link></li>
                        <li className="header__item"><Link exact to={"/programms"} className="header__link">Программы</Link></li>
                        <li className="header__item"><a href="" className="header__link">Вопросы-ответы</a></li>
                    </ul>
                </div>
                <div className="header__right">
                    <form className="header__search">
                        <button className="header__search-button"><img src='/images/glass.svg' alt="Glass icon" className="header__search-icon"/></button>
                        <input className="header__search-input" id='search' placeholder="Поиск" type="text"/>
                        <label className="header__label" for='search'>Поиск</label>
                    </form>
                    <div className="header__login">
                        <button className="header__login-button"><img src="/images/login.svg" alt="Login icon" className="header__login-icon"/></button>
                        <a className="header__login-link">Молчанова, Сергеева</a>
                        <button className="header__login-button"><img src='/images/logout.svg' alt="Login icon" className="header__login-icon"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
// }
export default Header;

