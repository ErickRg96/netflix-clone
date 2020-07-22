import view from '../pages/Home.html'
import { createTemplate, templateList } from '../utils/templates'
import getDetailsModal from '../utils/getDetailsModal'
import slider from '../utils/slider'
import getTrending from '../utils/getTrending'
import getUpcoming from '../utils/getUpcoming'
import getMyList from '../utils/getMyList'

const Home = async () => {
    const trendingAll =  await getTrending('all')
    const upcoming = await getUpcoming()
    const myList = await getMyList()

    const mainElement = document.createElement('main')
    mainElement.innerHTML = view
    const listEmpty = mainElement.querySelector('.list-empty')
    const heroBackground = mainElement.querySelector('.hero')
    const heroTitle = mainElement.querySelector('.hero__title')
    const heroDescription = mainElement.querySelector('.hero__description')
    const btnMore = mainElement.querySelector('.btn--more')
    const containerTrendingAll = mainElement.querySelector('.section__carousel--trendingAll')
    const containerUpcoming = mainElement.querySelector('.section__carousel--upcoming')
    const sectionMyList= mainElement.querySelector('.section--my-list')
    const containerMyList = mainElement.querySelector('.section__carousel--my-list')

    heroBackground.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${trendingAll[0].backdrop_path})`
    if(trendingAll[0].title == null) {
        heroTitle.textContent = trendingAll[0].name
    } else {
        heroTitle.textContent = trendingAll[0].title
    }
    heroDescription.textContent = trendingAll[0].overview
    btnMore.addEventListener('click',getDetailsModal(trendingAll[0], btnMore))

    trendingAll.forEach(element => {
        const HTMLString = templateList(element)
        const el = createTemplate(HTMLString);
        containerTrendingAll.append(el)
        getDetailsModal(element, el)
    });

    upcoming.forEach(element => {
        const HTMLString = templateList(element)
        const el = createTemplate(HTMLString);
        containerUpcoming.append(el)
        getDetailsModal(element, el)
    });

    const carousel_container_trendingAll = mainElement.querySelector('.section__carousel-container--trendingAll')
    const cards_trendingAll = mainElement.querySelectorAll('.card--trendingAll')
    const arrow_left_trendingAll = mainElement.querySelector('.arrow-left--trendingAll')
    const arrow_right_trendingAll = mainElement.querySelector('.arrow-right--trendingAll')

    slider(carousel_container_trendingAll, cards_trendingAll, arrow_left_trendingAll, arrow_right_trendingAll)
    

    const carousel_container_upcoming = mainElement.querySelector('.section__carousel-container--upcoming')
    const cards_upcoming = mainElement.querySelectorAll('.card--upcoming')
    const arrow_left_upcoming = mainElement.querySelector('.arrow-left--upcoming')
    const arrow_right_upcoming = mainElement.querySelector('.arrow-right--upcoming')

    slider(carousel_container_upcoming, cards_upcoming, arrow_left_upcoming, arrow_right_upcoming)

    if(myList !== undefined) {
        myList.forEach(element => {
            const HTMLString = templateList(element)
            const el = createTemplate(HTMLString);
            containerMyList.append(el)
            getDetailsModal(element, el)
        });

        const carousel_container_myList = mainElement.querySelector('.section__carousel-container--my-list')
        const cards_myList = mainElement.querySelectorAll('.card--my-list')
        const arrow_left_myList = mainElement.querySelector('.arrow-left--my-list')
        const arrow_right_myList = mainElement.querySelector('.arrow-right--my-list')

        slider(carousel_container_myList, cards_myList, arrow_left_myList, arrow_right_myList)
    } else {
        sectionMyList.style.display = 'none'
        listEmpty.style.display = 'flex'
    }

    return mainElement
}

export default Home