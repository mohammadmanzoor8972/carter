import * as React from 'react'
import { GetMoviesByKeyWord, GetMovieDetils } from '../../services/movies';
import './style.css';
import MovieItem from '../MovieItem/MovieItem';
  
import { connect } from 'react-redux'
import { movieSearching, getMovies, getMoviesFailure, getMoviesSuccess, addToWatchList, addToFavrouteList } from '../../action/index';

class Movie extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={
            keyword:'',
            results:[],
            watchlist :[],
            favroute: []
        }
    }
    componentDidMount(){
        const {gettMoviesList, movieSearching} = this.props;
       // gettMoviesList("")
        movieSearching(true);
       
    }

    addToFavroute=(item)=>{
      const {addToFavrouteList} = this.props;
      addToFavrouteList(item);
        
    }


    addToWatchList=(item)=>{
      const {addToWatchList} = this.props;
      addToWatchList(item);
    }

    componentWillReceiveProps(p,v){
        debugger;
        this.setState({results:p.movieList.movies.length!=0 ? p.movieList.movies.results : []});
    }

    render(){
     
        return(
            <div className="movie">
                <h1>Movie List</h1>
                <div className="container">
                {this.state.results.length>0 && this.state.results.map((resp,index)=>
                <MovieItem key={index} item={resp}  
                addFavrote={this.addToFavroute} 
                addToWatch={this.addToWatchList}
               />)}

{this.state.results.length==0 && <p>No data</p>}
                </div>
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    //debugger;
    return { 
      movieList: state.moviesList,
      ...state
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      gettMoviesList: (keyword) => {
        dispatch(getMovies(keyword)).then((response) => {
              !response.error ? dispatch(getMoviesSuccess(response.payload.data)) : dispatch(getMoviesFailure(response.payload.data));
            });
      },
      addToWatchList: (item) => {
        dispatch(addToWatchList(item))
      },
      addToFavrouteList: (item) => {
        dispatch(addToFavrouteList(item))
      },
      movieSearching: (item) => {
        dispatch(movieSearching(item))
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Movie);
