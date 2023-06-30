
const Course = ({name, description, price, image}) => {
    return (
        <li className="courses__course course">
            <h2 className="course__heading">{name}</h2>
            <img src={image} className="course__image"/>
            <ul className="course__list">
                { description.map((desc) => (
                    <li className="course__item">{desc}</li>
                ))}
            </ul>
            <div className="course__bottom-content">
                <p className="course__price">{price} руб.</p>
                <button className="course__button">Записаться на курс</button>
            </div>
        </li>
    )
}

export default Course