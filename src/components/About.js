import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    this.state = {};
    console.log("About Component Constructor");
  }
  componentDidMount() {
    console.log("About Component Did Mount");
  }
  render() {
    console.log("About Component Render");
    return (
      <div>
        <h1>About Page</h1>
        <User name={"Mohit Kumar"} location={"Noida"} />
        <UserClass name={"First Class Component"} location={"Noida"} />
        <UserClass name={"Second Class Component"} location={"Noida"} />
      </div>
    );
  }
}

export default About;
