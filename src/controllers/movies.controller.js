import view from  '../pages/Movies.html'
import { createTemplate, templateList } from '../utils/templates'
import getDetailsModal from '../utils/getDetailsModal'
import slider from '../utils/slider'
import getTrending from '../utils/getTrending'
import getPopularMovies from '../utils/getPopularMovies'
import getTopRated from '../utils/getTopRated'
import getMoviesByGenre from '../utils/getMoviesByGenre'

const Movies = async () => {
    const trending = await getTrending('movie')
    const popular = await getPopularMovies()
    const topRated = await getTopRated('movie')
    const moviesAction = await getMoviesByGenre('Action')
    const moviesScifi = await getMoviesByGenre('Science Fiction')

    const mainElement = document.createElement('main')
    mainElement.innerHTML = view
    const heroBackground = mainElement.querySelector('.hero')
    const heroTitle = mainElement.querySelector('.hero__title')
    const heroDescription = mainElement.querySelector('.hero__description')
    const btnMore = mainElement.querySelector('.btn--more')
    const containerTrending = mainElement.querySelector('.section__carousel--trending')
    const containerPopular = mainElement.querySelector('.section__carousel--popular')
    const containerTopRated = mainElement.querySelector('.section__carousel--topRated')
    const containerAction = mainElement.querySelector('.section__carousel--action')
    const containerScifi = mainElement.querySelector('.section__carousel--scifi')

    heroBackground.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${trending[0].backdrop_path})`
    if(trending[0].title == null) {
        heroTitle.textContent = trending[0].name
    } else {
        heroTitle.textContent = trending[0].title
    }
    heroDescription.textContent = trending[0].overview
    btnMore.addEventListener('click',getDetailsModal(trending[0], btnMore))

    trending.forEach(element => {
        const HTMLString = templateList(element)
        const el = createTemplate(HTMLString);
        containerTrending.append(el)
        getDetailsModal(element, el)
    });

    popular.forEach(element => {
        const HTMLString = templateList(element)
        const el = createTemplate(HTMLString);
        containerPopular.append(el)
        getDetailsModal(element, el)
    });

    topRated.forEach(element => {
        const HTMLString = templateList(element)
        const el = createTemplate(HTMLString);
        containerTopRated.append(el)
        getDetailsModal(element, el)
    });

    moviesAction.forEach(element => {
        const HTMLString = templateList(element)
        const el = createTemplate(HTMLString);
        containerAction.append(el)
        getDetailsModal(element, el)
    });

    moviesScifi.forEach(element => {
        const HTMLString = templateList(element)
        const el = createTemplate(HTMLString);
        containerScifi.append(el)
        getDetailsModal(element, el)
    });

    const carousel_container_trending = mainElement.querySelector('.section__carousel-container--trending')
    const cards_trending = mainElement.querySelectorAll('.card--trending')
    const arrow_left_trending = mainElement.querySelector('.arrow-left--trending')
    const arrow_right_trending = mainElement.querySelector('.arrow-right--trending')

    slider(carousel_container_trending, cards_trending, arrow_left_trending, arrow_right_trending)


    const carousel_container_popular = mainElement.querySelector('.section__carousel-container--popular')
    const cards_popular = mainElement.querySelectorAll('.card--popular')
    const arrow_left_popular = mainElement.querySelector('.arrow-left--popular')
    const arrow_right_popular = mainElement.querySelector('.arrow-right--popular')

    slider(carousel_container_popular, cards_popular, arrow_left_popular, arrow_right_popular)


    const carousel_container_topRated = mainElement.querySelector('.section__carousel-container--topRated')
    const cards_topRated = mainElement.querySelectorAll('.card--topRated')
    const arrow_left_topRated = mainElement.querySelector('.arrow-left--topRated')
    const arrow_right_topRated = mainElement.querySelector('.arrow-right--topRated')

    slider(carousel_container_topRated, cards_topRated, arrow_left_topRated, arrow_right_topRated)


    const carousel_container_action = mainElement.querySelector('.section__carousel-container--action')
    const cards_action = mainElement.querySelectorAll('.card--action')
    const arrow_left_action = mainElement.querySelector('.arrow-left--action')
    const arrow_right_action = mainElement.querySelector('.arrow-right--action')

    slider(carousel_container_action, cards_action, arrow_left_action, arrow_right_action)


    const carousel_container_scifi = mainElement.querySelector('.section__carousel-container--scifi')
    const cards_scifi = mainElement.querySelectorAll('.card--scifi')
    const arrow_left_scifi = mainElement.querySelector('.arrow-left--scifi')
    const arrow_right_scifi = mainElement.querySelector('.arrow-right--scifi')

    slider(carousel_container_scifi, cards_scifi, arrow_left_scifi, arrow_right_scifi)

    return mainElement
}

export default Movies