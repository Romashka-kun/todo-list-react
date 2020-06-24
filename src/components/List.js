import React from "react";
import demo from "../data/userData";

export class List extends React.Component {
  render() {
    return (
      <span>
        {demo.list[0].name}
      </span>
    );
  }
}