import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPageSecond";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromWatchLists from "../components/cardIcons/removeFromWatchLists";
import WriteReview from "../components/cardIcons/writeReview";

const WatchListMoviesPage = () => {
  const {watchLists: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const watchListsMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = watchListsMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const movies = watchListsMovieQueries.map((q) => q.data);
  // const toDo = () => true;

  return (
    <PageTemplate
      title="WatchLists Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromWatchLists movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default WatchListMoviesPage;