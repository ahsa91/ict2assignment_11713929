import React from "react";
import MovieListSecond from "../components/movieListSecond";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToWatchListsIcon from "../components/cardIcons/addToWatchLists";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/MovieListSecond",
  component: MovieListSecond,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const movies = [
    { ...SampleMovie, id: 1 },
    { ...SampleMovie, id: 2 },
    { ...SampleMovie, id: 3 },
    { ...SampleMovie, id: 4 },
    { ...SampleMovie, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <MovieListSecond
        movies={movies}
        action={(movie) => <AddToWatchListsIcon movie={movie} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
