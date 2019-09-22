import React from 'react';
import  {Route, Switch, BrowserRouter} from 'react-router-dom'
import MovieNavBar from './components/MovieNavBar/movienavbar';
import Movie from './components/Movie/movie';
import Favroute from './components/Favroute/Favroute';
import WatchList from './components/Favroute/WatchList';
import "./App.css"
class App extends React.Component {
  render() {
    return (
      
<BrowserRouter>
      <main className="container">
       <MovieNavBar/>
      <div className="contents">
        <Switch>
            <Route path='/movie/' component={Movie} />
            <Route path='/favroute/' component={Favroute} />
            <Route path='/watchlist/' component={WatchList} />
            <Route path="/" exact component={Movie} /> 
        </Switch>
        </div>
      </main>
      </BrowserRouter> 
    );
  }
}

export default App;
