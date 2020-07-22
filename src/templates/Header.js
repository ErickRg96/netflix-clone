const Header = () => {
    const view = 
    `
        <header class="header">
            <div class="header__container">
                <h1 class="header__logo">
                    <a href="/" class="header__logo-link">Netflix</a>
                </h1>
                <nav class="header__nav">
                    <ul class="header__list">
                        <li class="header__item">
                            <a href="#/" class="header__link active">Home</a>
                        </li>
                        <li class="header__item">
                            <a href="#/tv-shows" class="header__link">TV Shows</a>
                        </li>
                        <li class="header__item">
                            <a href="#/movies" class="header__link">Movies</a>
                        </li>
                        <li class="header__item">
                            <a href="#/latest" class="header__link">Recently Added</a>
                        </li>
                        <li class="header__item">
                            <a href="#/my-list" class="header__link">My List</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    `
    return view
}

export default Header