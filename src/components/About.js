import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <User name={"Mohit Kumar"} location={"Noida"} />
      <UserClass name={"Mohit Kumar"} location={"Noida"} />
    </div>
  );
};

export default About;
