import { useState } from "react";
import axios from 'axios';
import { baseURL } from "./../services/course.service";


const Subscribe = () => {
    const [email, setEmail] = useState()
    
    let handleSubmit = async (e) => {
        e.preventDefault();

        axios.post(`${baseURL}/mailingList/`, {
            email: email,
        }).then(response => {
            console.log(response)
        }).catch((e => {
            console.error(e)
        })) 
        setEmail('')
    }

    return (
        <div className="subscribe">
            <form className="subscribe__form" onSubmit={handleSubmit}>
                <h2 className="subscribe__heading">Подпишитесь на рассылку для получения наших новостей и скидок!</h2>
                <p className="subscribe__text">Всем, кто оставит заявку на курс, дарим большую подборку крутых российских брендов. С ней вы узнаете новые имена из мира Fashion и обязательно найдёте одежду, обувь и аксессуары по душе.</p>
                <div className="subscribe__inputs">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="subscribe__input" type="email" name="email" placeholder="Ваш E-mail"/>
                    <input className="subscribe__button" type="submit" value="Подписаться"/>
                </div>
            </form>
        </div>
    );
}

export default Subscribe;