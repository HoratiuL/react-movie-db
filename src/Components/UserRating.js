import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";

const Star = props => (
  <span>
    <Icon>{props.selected ? "star_border" : "star"}</Icon>
  </span>
);

export default class UserRating extends Component {
  //   const stars = [...Array(props.numStars)].map((e, i) => i);
  constructor(props) {
    super(props);
    const stars = [...Array(props.numStars)].map((el, i) => {
      return {
        id: i,
        selected: false
      };
    });

    this.state = { stars };
  }

  render() {
    return (
      <div>
        User rating:
        <p>
          {this.state.stars.map((e, i) => (
            <Star key={i} index={i} />
          ))}
        </p>
      </div>
    );
  }
}
