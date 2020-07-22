const API_KEY = process.env.API_KEY;

const getRecentlyAdded = async () => {
    const listName = `${type}TopRatedList`
    const cacheList = window.localStorage.getItem(listName)

    if(cacheList) {
        return JSON.parse(cacheList);
    }

    const url = `https://api.themoviedb.org/3/${type}/top_rated?api_key=${API_KEY}`;
    const response = await fetch(url)
    const data = await response.json()

    window.localStorage.setItem(listName, JSON.stringify(data.results))

    return data.results
}

export default getRecentlyAdded