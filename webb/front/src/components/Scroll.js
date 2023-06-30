const Scroll = () => {
    window.addEventListener('scroll', () => {
        let scroll = document.getElementsByClassName('scroll')[0]
            if(window.scrollY > window.innerHeight) {
                scroll.classList.add('scroll--visible')
            } else {
                scroll.classList.remove('scroll--visible')
            }
    })
    return (
        <div className="scroll">
            <a href="#header" className="scroll__link">
                <img src="/images/arrow.svg" className="scroll__image"/>
            </a>
        </div>
    )
}

export default Scroll