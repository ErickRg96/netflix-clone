const genres = [
    { "id": 28, "name": "Action" },
    { "id": 12, "name": "Adventure" },
    { "id": 16, "name": "Animation" },
    { "id": 35, "name": "Comedy" },
    { "id": 80, "name": "Crime" },
    { "id": 99, "name": "Documentary" },
    { "id": 18, "name": "Drama" },
    { "id": 10751, "name": "Family" },
    { "id": 14, "name": "Fantasy" },
    { "id": 36, "name": "History" },
    { "id": 27, "name": "Horror" },
    { "id": 10402, "name": "Music" },
    { "id": 9648, "name": "Mystery" },
    { "id": 10749, "name": "Romance" },
    { "id": 878, "name": "Science Fiction" },
    { "id": 10770, "name": "TV Movie" },
    { "id": 53, "name": "Thriller" },
    { "id": 10752, "name": "War" },
    { "id": 37, "name": "Western" }
]

const getMoviesByGenre = async (genre_name) => {
    const listName = `${genre_name}MoviesList`
    const cacheList = window.localStorage.getItem(listName)

    if(cacheList) {
        return JSON.parse(cacheList);
    }

    const id_genre = genres.find(genre => genre.name === genre_name).id
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=b89fc45c2067cbd33560270639722eae&with_genres=${id_genre}&sort_by=popularity.desc`;
    const response = await fetch(url)
    const data = await response.json()

    window.localStorage.setItem(listName, JSON.stringify(data.results))

    return data.results
}

export default getMoviesByGenre