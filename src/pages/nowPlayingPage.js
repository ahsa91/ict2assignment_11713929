import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { getNowPlaying} from '../api/tmdb-api';
// import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';




const NowPlayingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('Now Playing', getNowPlaying)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  // const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Movies Playing Now"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
        // return<PlaylistAddIcon/>
        
      }}
    />
);
};

export default NowPlayingPage;