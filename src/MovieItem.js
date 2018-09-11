import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./MovieList.css";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const MovieItem = props => {
  const { title, year, plot, deleteMovie, id, imageUrl = "" } = props;
  const Placeholder = () => {
    return (
      <div className="placeholder">
        <span>No image found</span>
      </div>
    );
  };
  return (
    <Card className="movie-item">
      <CardContent>
        {imageUrl.length > 0 ? (
          <CardMedia className="images" component="img" image={imageUrl} />
        ) : (
          <Placeholder />
        )}
        <Typography variant="headline" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">{year}</Typography>
        <Typography component="p">{plot}</Typography>
      </CardContent>
      <CardActions className="trash">
        <Button onClick={() => deleteMovie(id)}>
          <Icon>delete</Icon> Delete movie
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;

//pe fiecare card un CardAction cu delete ...
