import Home from './home.controller'
import TvShows from './tvShows.controller'
import Movies from './movies.controller'
import RecentlyAdded from './recentlyAdded.controller'
import MyList from './myList.controller'

const pages = {
    home: Home,
    tvShows: TvShows,
    movies: Movies,
    recentlyAdded: RecentlyAdded,
    myList: MyList
};

export { pages }