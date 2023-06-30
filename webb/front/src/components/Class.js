const Class = ({time, name, description}) => {
    return (
        <li className="class">
            <p className="class__time">{time}</p>
            <h2 className="class__heading">{name}</h2>
            <ul className="class__list">
                { description.map((desc) => (
                    <li className="class__item">{desc}</li>
                ))}
            </ul>
            <a href="/" className="class__link">Подробнее</a>
        </li>
    )
}

export default Class