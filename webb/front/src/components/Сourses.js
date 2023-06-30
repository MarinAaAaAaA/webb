import axios from 'axios';
import React, { useState, useEffect, useRef } from "react";
import { baseURL } from "./../services/course.service";
import Course from './Course';

const Сourses = () => {
    const parallaxHandler = (e) => {
        const x = ((e.clientX % e.currentTarget.parentNode.offsetWidth) / e.currentTarget.parentNode.offsetWidth) * 10
        e.currentTarget.animate({
            transform: `translate(${x - 15}%, 0)`
        }, { duration: 2000, fill: 'forwards', timing: 'easeOut' })
    }

    let [courses, setCourses] = useState([]);
    const countRef = useRef(0);
    useEffect(() => {
        getCourses();
    }, [countRef])
    const getCourses = async () => {
        axios.get(`${baseURL}/course/`).then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                response.data[i].description = response.data[i].description.split('.')
                response.data[i].description.splice(response.data[i].description.length - 1)
            }
            
            setCourses(response.data);
        }).catch((e) => {
            console.error(e);
        })
    };

    return (
        <div className='courses'>
            <div className='courses__promo'>
                <h1 className='courses__heading'>Тарифы</h1>
                <div className='courses__image-wrapper'>
                    <img className='courses__image' src='/images/courses-background.png' onMouseMove={parallaxHandler} />
                </div>
            </div>
            <div className='courses__wrapper'>
                <h2 className='courses__subheading'>Выберите удобный формат обучения</h2>
                <ul className='courses__list'>
                    {courses && courses.map((course, id) => (
                        <Course {...course}></Course>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Сourses;