"use client";

import React from "react";

//
export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mg Kyaw Min",
      date: new Date(),
    };
  }

  render() {
    return (
      <div>
        <h1>State in Class Component</h1>
        <div>{this.state.name}</div>
        <div>{this.state.date.toString()}</div>
      </div>
    );
  }
}
