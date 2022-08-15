import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WatchListIcon from "@material-ui/icons/TheatersSharp";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
// import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";


const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});


export default function MovieCardSecond({ movie, action }) {
  const classes = useStyles();
  const { watchLists} = useContext(MoviesContext);// addToFavorites was removed from first curly braces

  if (watchLists.find((id) => id === movie.id)) {
    movie.watchList = true;
  } else {
    movie.watchList = false
  }

  // const handleAddToFavorite = (e) => {
  //   e.preventDefault();
  //   addToFavorites(movie);
  // };

  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      avatar={
        movie.watchList ? (
          <Avatar className={classes.avatar}>
            <WatchListIcon />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p">
          {movie.title}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}></Link>
        {/* <IconButton aria-label="add to favorites" onClick={handleAddToFavorite}>
        <FavoriteIcon color="primary" fontSize="large" />
        </IconButton> */}
        <Button variant="outlined" size="medium" color="primary">
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>        </Button>
      </CardActions>
    </Card>
  );
}