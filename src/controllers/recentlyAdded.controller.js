import view from '../pages/RecentlyAdded.html'
import { createTemplate, templateList } from '../utils/templates'
import getDetailsModal from '../utils/getDetailsModal'
import slider from '../utils/slider'
import getTopRated from '../utils/getTopRated'

const RecentlyAdded = async () => {
    const recentMovies = await getTopRated('movie')
    const recentTv = await getTopRated('tv')

    const mainElement = document.createElement('main')
    mainElement.innerHTML = view
    const heroBackground = mainElement.querySelector('.hero')
    const heroTitle = mainElement.querySelector('.hero__title')
    const heroDescription = mainElement.querySelector('.hero__description')
    const btnMore = mainElement.querySelector('.btn--more')
    const containerRecentMovies = mainElement.querySelector('.section__carousel--recentMovies')
    const containerRecentTv = mainElement.querySelector('.section__carousel--recentTv')

    heroBackground.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${recentMovies[0].backdrop_path})`
    if(recentMovies[0].title == null) {
        heroTitle.textContent = recentMovies[0].name
    } else {
        heroTitle.textContent = recentMovies[0].title
    }
    heroDescription.textContent = recentMovies[0].overview
    btnMore.addEventListener('click',getDetailsModal(recentMovies[0], btnMore))

    recentMovies.forEach(element => {
        const HTMLString = templateList(element)
        const el = createTemplate(HTMLString);
        containerRecentMovies.append(el)
        getDetailsModal(element, el)
    });

    recentTv.forEach(element => {
        const HTMLString = templateList(element)
        const el = createTemplate(HTMLString);
        containerRecentTv.append(el)
        getDetailsModal(element, el)
    });

    const carousel_container_recentMovies = mainElement.querySelector('.section__carousel-container--recentMovies')
    const cards_recentMovies = mainElement.querySelectorAll('.card--recentMovies')
    const arrow_left_recentMovies = mainElement.querySelector('.arrow-left--recentMovies')
    const arrow_right_recentMovies = mainElement.querySelector('.arrow-right--recentMovies')

    slider(carousel_container_recentMovies, cards_recentMovies, arrow_left_recentMovies, arrow_right_recentMovies)


    const carousel_container_recentTv = mainElement.querySelector('.section__carousel-container--recentTv')
    const cards_recentTv = mainElement.querySelectorAll('.card--recentTv')
    const arrow_left_recentTv = mainElement.querySelector('.arrow-left--recentTv')
    const arrow_right_recentTv = mainElement.querySelector('.arrow-right--recentTv')

    slider(carousel_container_recentTv, cards_recentTv, arrow_left_recentTv, arrow_right_recentTv)

    return mainElement
}

export default RecentlyAdded