import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import UserRating from "./UserRating";

class RatingContainer extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <Typography>Imdb rating : {rating}</Typography>
        <UserRating numStars={5} />
      </div>
    );
  }
}

export default RatingContainer;
