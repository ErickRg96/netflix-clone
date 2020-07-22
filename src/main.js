import './styles/main.scss'

import router  from './router/index.routes'
import './utils/changeHeader'

window.addEventListener('load', () => {
    router(window.location.hash)
})

window.addEventListener('hashchange', () => {
    router(window.location.hash)
})