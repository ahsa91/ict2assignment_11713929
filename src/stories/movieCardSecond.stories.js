import React from "react";
import MovieCardSecond from "../components/movieCardSecond";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToWatchListsIcon from "../components/cardIcons/addToWatchLists";
import WatchListIcon from "@material-ui/icons/TheatersSharp";


export default {
  title: "Home Page/MovieCardSecond",
  component: MovieCardSecond,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <MovieCardSecond
      movie={SampleMovie}
      action={(movie) => <AddToWatchListsIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <MovieCardSecond
      movie={sampleNoPoster}
      action={(movie) => <AddToWatchListsIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Exceptional.storyName = "exception";
