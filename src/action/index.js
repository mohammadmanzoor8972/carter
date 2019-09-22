
import { constants } from '../constant';
import axios from 'axios';
const API_KEY = "be73063f631eb8cd3e7810fca5b5f2db"
const ROOT_URL = "https://api.themoviedb.org/3/"


export function getMovies(keyword) {
    const API_SEARCH = ROOT_URL+"search/movie?api_key=be73063f631eb8cd3e7810fca5b5f2db&query="+keyword
    const request = axios({
      method: 'get',
      url: API_SEARCH,
      headers: []
    });
  
    return {
      type: constants.SEARCH_MOVIE,
      payload: request
    };
  }

  export function getMoviesSuccess(movies){
      return {
          type:constants.SEARCH_MOVIE_SUCCESS,
          payload: movies
      }
  }

  export function getMoviesFailure(error) {
    return {
      type: constants.getMoviesFailure,
      payload: error
    };
  }

  export function addToWatchList(movies){
    return {
        type:constants.ADD_WATCH_LIST,
        payload: movies
    }
}


export function addToFavrouteList(movies){
  return {
      type:constants.ADD_FAVROUTE_MOVIE,
      payload: movies
  }
}

export function movieSearching(flag){
  return {
      type:constants.IS_MOVIE_SEARCHING,
      payload : flag
  }
}
  
  