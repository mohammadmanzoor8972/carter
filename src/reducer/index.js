import { constants } from "../constant";
import { combineReducers } from 'redux';

export const INITIAL_STATE = {
    moviesList: {movies: [], error:null, loading: false},
    favrouteMovies: [],
    watchList: [],
    favrouteCount: 0,
    wacthListCount: 0,
    moviesCount: 0,
    isMovieSerch : true
};

function MoviesReducer(state = INITIAL_STATE, action) {
    debugger;
    let error;
    switch (action.type) {
        case constants.SEARCH_MOVIE:
            return {
                ...state,
                moviesList: {movies:[], error: null, loading: true} 
            }
        case constants.SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                moviesList: {movies:action.payload, error: null, loading: false}
            }
        case constants.SEARCH_MOVIE_FAILED:
            return {
                ...state,
                moviesList: {movies: [], error:null, loading: false}
            }
        case constants.ADD_WATCH_LIST:
            const data = state.watchList.filter(item=>item.id!=action.payload.id);
        return {
            ...state,
            watchList: [...data,action.payload],
            wacthListCount :  [...data,action.payload].length

        } 
        case constants.ADD_FAVROUTE_MOVIE:
                const datas = state.favrouteMovies.filter(item=>item.id!=action.payload.id);
        return {
            ...state,
            favrouteMovies: [...datas,action.payload],
            favrouteCount : [...datas,action.payload].length
        }
        case constants.IS_MOVIE_SEARCHING:
            return {
                ...state,
                isMovieSerch: action.payload
            }
        default :
        return state;
    }
}



export default MoviesReducer;
