import * as React from "react";
import demo from "../data/userData";
import {List} from "./List";

export class ListHeading extends React.Component {
  render() {
    return (
      <div className='list-heading'>
        <h1><List id={3}/></h1>
        {demo.list[0].description && <div>{demo.list[0].description}</div>}
      </div>
    );
  }
}