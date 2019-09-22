

const API_KEY = "be73063f631eb8cd3e7810fca5b5f2db"
const URL = "https://api.themoviedb.org/3/"

export const GetMoviesByKeyWord = (keyword) => {
    const API_SEARCH = URL+"search/movie?api_key=be73063f631eb8cd3e7810fca5b5f2db&query="
    return fetch(API_SEARCH + keyword)
        .then(response => response.json());
}

export const GetMovieDetils = (movieId) => {
    const API_DETAIL = URL + 'movie/' + movieId + '?api_key=' + this.API_KEY;

    return fetch(API_KEY)
        .then(response => response.json());
}
