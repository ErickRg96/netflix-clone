const slider = (carousel_container, cards, arrow_left, arrow_right) => {
    arrow_right.addEventListener('click', () => {
        carousel_container.scrollLeft += carousel_container.offsetWidth
    })

    arrow_left.addEventListener('click', () => {
        carousel_container.scrollLeft -= carousel_container.offsetWidth
    })
}

export default slider