import view from '../pages/TvShows.html'
import { createTemplate, templateList } from '../utils/templates'
import getDetailsModal from '../utils/getDetailsModal'
import slider from '../utils/slider'
import getTrending from '../utils/getTrending'
import getTopRated from '../utils/getTopRated'


const TvShows = async () => {
    const trending =  await getTrending('tv')
    const topRated =  await getTopRated('tv')

    const mainElement = document.createElement('main')
    mainElement.innerHTML = view
    const heroBackground = mainElement.querySelector('.hero')
    const heroTitle = mainElement.querySelector('.hero__title')
    const heroDescription = mainElement.querySelector('.hero__description')
    const btnMore = mainElement.querySelector('.btn--more')
    const containerTrending = mainElement.querySelector('.section__carousel--trending')
    const containerTopRated = mainElement.querySelector('.section__carousel--topRated')


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

    topRated.forEach(element => {
        const HTMLString = templateList(element)
        const el = createTemplate(HTMLString);
        containerTopRated.append(el)
        getDetailsModal(element, el)
    });

    const carousel_container_trending = mainElement.querySelector('.section__carousel-container--trending')
    const cards_trending = mainElement.querySelector('.card--trending')
    const arrow_left_trending = mainElement.querySelector('.arrow-left--trending')
    const arrow_right_trending = mainElement.querySelector('.arrow-right--trending')

    slider(carousel_container_trending, cards_trending, arrow_left_trending, arrow_right_trending)


    const carousel_container_topRated = mainElement.querySelector('.section__carousel-container--topRated')
    const cards_topRated = mainElement.querySelector('.card--topRated')
    const arrow_left_topRated = mainElement.querySelector('.arrow-left--topRated')
    const arrow_right_topRated = mainElement.querySelector('.arrow-right--topRated')

    slider(carousel_container_topRated, cards_topRated, arrow_left_topRated, arrow_right_topRated)

    return mainElement
}

export default TvShows