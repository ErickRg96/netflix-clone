const getUpcoming = async () => {
    const listName = `upcomingList`
    const cacheList = window.localStorage.getItem(listName)
    
    if(cacheList) {
        return JSON.parse(cacheList);
    }

    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=b89fc45c2067cbd33560270639722eae`;
    const response = await fetch(url)
    const data = await response.json()

    window.localStorage.setItem(listName, JSON.stringify(data.results))

    return data.results
}

export default getUpcoming