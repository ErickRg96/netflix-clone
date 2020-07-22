export const createTemplate = (HTMLString) => {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString
    return html.body.children[0]
}

export const templateList = (element) => {
    if (window.matchMedia('screen and (max-width: 768px)').matches) {
        return (`
            <img src="https://image.tmdb.org/t/p/w342${element.poster_path}" alt="${element.title}" class="card card--my-list" id="card card--my-list" data-id="${element.id}" loading="lazy">
        `)
    } else {
        return (`
            <img src="https://image.tmdb.org/t/p/w342${element.backdrop_path}" alt="${element.title}" class="card card--my-list" id="card card--my-list" data-id="${element.id}" loading="lazy">
        `)
    }
}