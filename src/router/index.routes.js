import Header from '../templates/Header'

import { pages } from '../controllers/index'

const header = document.getElementById('header-root')
let main = document.getElementById('main-root')

const router = async (route) => {
    header.innerHTML = await Header();
    main.innerHTML = '';

    switch(route) {
        case '#/':
            return main.appendChild(await pages.home())

        case '':
            return main.appendChild(await pages.home())

        case '#/tv-shows':
            return main.appendChild(await pages.tvShows());

        case "#/movies":
            return main.appendChild(await pages.movies());

        case '#/latest':
            return main.appendChild(await pages.recentlyAdded());

        case '#/my-list':
            return main.appendChild(await pages.myList());

        default:
            return main.appendChild(await pages.home())
    }
}

export default router