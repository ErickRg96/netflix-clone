import view from '../pages/MyList.html'
import { createTemplate, templateList } from '../utils/templates'
import getDetailsModal from '../utils/getDetailsModal'
import slider from '../utils/slider'
import getMyList from '../utils/getMyList'

const MyList = async () => {
    const myList = await getMyList()

    const mainElement = document.createElement('main')
    mainElement.innerHTML = view
    const listEmpty = mainElement.querySelector('.list-empty')
    const home_container = mainElement.querySelector('.home__container')
    const heroBackground = mainElement.querySelector('.hero')
    const heroTitle = mainElement.querySelector('.hero__title')
    const heroDescription = mainElement.querySelector('.hero__description')
    const btnMore = mainElement.querySelector('.btn--more')
    const containerMyList = mainElement.querySelector('.section__carousel--my-list')

    if(myList !== undefined) {
        heroBackground.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${myList[0].backdrop_path})`
        if(myList[0].title == null) {
            heroTitle.textContent = myList[0].name
        } else {
            heroTitle.textContent = myList[0].title
        }
        heroDescription.textContent = myList[0].overview
        btnMore.addEventListener('click',getDetailsModal(myList[0], btnMore))

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
        heroBackground.style.display = 'none'
        home_container.style.display = 'none'
        listEmpty.style.display = 'flex'
        listEmpty.style.height = '100vh'
    }


    return mainElement
}

export default MyList