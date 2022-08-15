import React from "react";
import PageTemplate from "../components/templateMovieListPageSecond";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import WatchListIcon from "@material-ui/icons/TheatersSharp";
import { getTopRated } from '../api/tmdb-api';
// import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';




const TopRatedPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('top rated', getTopRated)

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
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return <WatchListIcon movie={movie} />
        // return<PlaylistAddIcon/>
        
      }}
    />
);
};

export default TopRatedPage;