import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./SearchBar.css";
import Icon from "@material-ui/core/Icon";

export default function SearchResult(props) {
  const { movie, addMovie } = props;
  return (
    <Card>
      <CardContent>
        <Typography>
          {movie.title} ({movie.year})
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => addMovie(movie)}>
          <Icon>add</Icon> Add movie
        </Button>
      </CardActions>
    </Card>
  );
}
