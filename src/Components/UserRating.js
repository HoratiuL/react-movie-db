import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

const Star = props => (
  <span
    onClick={props.onClick}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
  >
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

  onMouseEnter(ev, el) {}
  onMouseLeave(ev, el) {}

  render() {
    return (
      <div>
        User rating:
        <p>
          {this.state.stars.map((e, i) => (
            <Star
              key={i}
              index={i}
              onMouseEnter={() => console.log("mouse enter")}
              onMouseLeave={() => console.log("mouse leave")}
              onClick={e => console.log(e.id)}
            />
          ))}
        </p>
      </div>
    );
  }
}
