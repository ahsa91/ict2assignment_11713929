import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import TopRatedPage from "./pages/topRatedPage";
import WatchListMoviesPage from "./pages/watchListMoviesPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from './pages/UpcomingMoviesPage';
import MoviesContextProvider from "./contexts/moviesContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import AddMovieReviewPage from './pages/addMovieReviewPage'
import Login from './pages/login';
import { UserContextProvider } from "./contexts/userContext";
// import "./index.css";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
              
              <Route exact path="/movies/login" component={Login} />

              <Route exact path="/movies/watchlist" component={WatchListMoviesPage} />
              <Route exact path="/movies/nowplaying" component={NowPlayingPage} />
              <Route exact path="/movies/toprated" component={TopRatedPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route exact path="/" component={HomePage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Redirect from="*" to="/" />
            </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);