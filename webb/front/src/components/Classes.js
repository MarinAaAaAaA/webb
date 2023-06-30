import axios from 'axios';
import React, { useState, useEffect, useRef } from "react";
import { baseURL } from "./../services/course.service";
import Class from './Class';


const Classes = () => {
    const [name, setName] = useState()

    let handleSubmit = async (e) => {
        e.preventDefault();

        axios.post(`${baseURL}/members/`, {
            name: name,
        }).then(response => {
            console.log(response)
        }).catch((e => {
            console.log(e)
        }))
        setName('')
    }

    const handleEnvelopeClick = () => {
        const envelope = document.querySelector(".envelope")
        const envelopeTop = document.querySelector(".envelope__top")
        const paper = document.querySelector(".paper")
        envelopeTop.classList.toggle('envelope__top_close')
        paper.classList.toggle('paper_close')
    }

    const parallaxHandler = (e) => {
        const x = ((e.clientX % e.currentTarget.parentNode.offsetWidth) / e.currentTarget.parentNode.offsetWidth) * 10
        e.currentTarget.animate({
            transform: `translate(${x - 15}%, 0)`
        }, { duration: 2000, fill: 'forwards', timing: 'easeOut' })
    }

    let [classes, setClasses] = useState([]);
    const countRef = useRef(0);
    useEffect(() => {
        getClasses();
    }, [countRef])
    const getClasses = async () => {
        axios.get(`${baseURL}/shedule/`).then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                response.data[i].description = response.data[i].description.split('.')
                response.data[i].description.splice(response.data[i].description.length - 1)
            }
            setClasses(response.data);
        }).catch((e) => {
            console.error(e);
        })
        
    };
    

    return (
        <div className='courses'>
            <div className='courses__promo'>
                <h1 className='courses__heading'>Мастер классы</h1>
                <div className='courses__image-wrapper'>
                    <img className='courses__image' src='/images/classes-bg.png' onMouseMove={parallaxHandler} />
                </div>
            </div>
            <div className='courses__wrapper'>
                <h2 className='courses__subheading'>О чём поговорим</h2>
                <ul className='classes__list'>
                    {classes && classes.map((curentClass, id) => (
                        <Class {...curentClass}></Class>
                    ))}
                </ul>
            </div>
            <div className="class__background">
                <div className="class__tile">
                    <img className="promo__image" src="./images/class1.png" onMouseMove={parallaxHandler}></img>
                </div>
                <div className="class__tile">
                    <img className="promo__image" src="./images/class2.png" onMouseMove={parallaxHandler}></img>
                </div>
                <div className="class__tile">
                    <img className="promo__image" src="./images/class3.png" onMouseMove={parallaxHandler}></img>
                </div>
            </div>
            <div className='class__info-wrapper'>
                <div className='info__wrapper'>
                    <h2 className='class__info-heading'>Где пройдёт конференция</h2>
                    <p className='class__info-time'>22 августа / 2022</p>
                    <p className='class__info-text'>
                        Конференция пройдет в зале С23 на 2 этаже бизнес корпуса ГЭС-2.
                        На территории есть бесплатная парковка на 2000 мест. Мы советуем приехать 
                        заранее, чтобы успеть пройти регистрацию
                    </p>
                </div>
            </div>
            <div className='class__form-wrapper'>
                <form className='class__form' onSubmit={handleSubmit}>
                    <p className='class__form-heading'>Регистрация на мастер-классы</p>
                    <p className='class__form-text'>22 августа, Понедельник | 8:00 –15:30</p>
                    <div class="sect">
                        <div className = "envelope" onClick={handleEnvelopeClick}>
                            <div className = "envelope__top">
                                <img src = "http://up-skills.ru/test/envelope-top.svg" alt></img>
                            </div>
                            <div className ="paper">
                                Подарок
                            </div>
                            <div className ="envelope__body">
                                <img src="http://up-skills.ru/test/envelope.svg" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className='class__form-inputs'>
                        <input value={name} onChange={(e) => setName(e.target.value)} className='class__form-input' placeholder='Ваше имя:'></input>
                        <button className='class__form-button'>Записаться</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default Classes;