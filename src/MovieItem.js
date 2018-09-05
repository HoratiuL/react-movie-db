import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./MovieList.css";

const MovieItem = props => {
  const { title, year, description, deleteMovie } = props;
  return (
    <Card className="movie-item">
      <CardContent>
        <Typography variant="headline" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">{year}</Typography>
        <Typography component="p">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieItem;
