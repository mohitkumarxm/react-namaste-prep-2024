import React from "react";

const User = (props) => {
  const { name, location } = props;
  console.log("User functional component.");
  return (
    <div>
      <div>Functional Component</div>
      <div>My name is {name}</div>
      <div>At {location}</div>
    </div>
  );
};

export default User;
