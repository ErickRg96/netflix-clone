const getPopularMovies = async () => {
    const listName = `popularMoviesList`
    const cacheList = window.localStorage.getItem(listName)

    if(cacheList) {
        return JSON.parse(cacheList);
    }

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=b89fc45c2067cbd33560270639722eae&language=en-US&sort_by=popularity.desc`;
    const response = await fetch(url)
    const data = await response.json()

    window.localStorage.setItem(listName, JSON.stringify(data.results))
    
    return data.results
}

export default getPopularMovies