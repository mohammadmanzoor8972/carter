import * as React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Favorite, WatchLater, MovieFilter, ViewModule} from '@material-ui/icons';
import MoreIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getMovies, getMoviesFailure, getMoviesSuccess } from '../../action/index';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

 function MovieNavBar({textChange, favCount, watchCount=0, moviesCount=0, gettMoviesList=0, isMovieSerch}) {
  const match = window.location.pathname;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }


  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Carter Movies Finder
          </Typography>
         {isMovieSerch && <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search movies"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              fullWidth
              onChange={(ev)=>{
                gettMoviesList(ev.target.value)
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
        
          <Link to="/movie" style={{color:'white'}}>
            <Tooltip title="Movie List">
            <IconButton aria-label="show 4 new WatchLater" color="inherit">
              <Badge badgeContent={moviesCount} color="secondary">
                <MovieFilter />
              </Badge>
            </IconButton>
            </Tooltip>
            </Link>

          <Link to="/favroute" style={{color:'white'}}>
          <Tooltip title="Favroutie Movies">
            <IconButton aria-label="show 4 new WatchLater" color="inherit">
              <Badge badgeContent={favCount} color="secondary">
                <Favorite />
              </Badge>
            </IconButton>
            </Tooltip>
            </Link>
            <Link to="/watchlist" style={{color:'white'}}>
            <Tooltip title="Watch Later">
            <IconButton aria-label="show 17 new WatchLater" color="inherit">
              <Badge badgeContent={watchCount} color="secondary">
                <WatchLater />
              </Badge>
            </IconButton>
            </Tooltip>
            </Link>
          
          </div>
      
        </Toolbar>
      </AppBar>
    </div>
  );

}


const mapStateToProps = (state) => {
  //debugger;
  return { 
    movieList: state.moviesList,
    favCount: state.favrouteCount,
    watchCount: state.wacthListCount,
    moviesCount: state.movieList ? state.movieList.length : 0,
    isMovieSerch : state.isMovieSerch
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    gettMoviesList: (keyword) => {
      if(keyword.length==0){
        dispatch(getMoviesSuccess([]))
        return;
      }
      dispatch(getMovies(keyword)).then((response) => {
            !response.error ? dispatch(getMoviesSuccess(response.payload.data)) : dispatch(getMoviesFailure(response.payload.data));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieNavBar);

