import React from 'react';
import FavrouteItem from './FavrouteItem';
import './style.css';
import { connect } from 'react-redux'
import { movieSearching } from '../../action/index';

class WatchList extends React.PureComponent {

    constructor(props){
        super(props)
        this.state = {
            movies : [],
            title : ""
        }
    }


    componentDidMount(){
        const p = this.props;
        this.setState({movies:p.movieList.length!=0 ? p.movieList : [], title : p.title});
        this.props.movieSearching(false);
    }


    render() {
        return (
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <div className="favroute">
                   
                   {this.state.movies && this.state.movies.map((item, index)=><FavrouteItem {...item} key={index}/>)} 
                   
                </div>
            </React.Fragment>
        )
    }

}


const mapStateToProps = (state) => {
    return { 
      movieList: state.watchList,
      title : "Watch List"
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      movieSearching: (item) => {
        dispatch(movieSearching(item))
      }
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(WatchList);

