import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div>
        <div>Class Component</div>
        <div>My name is {name}</div>
        <div>At {location}</div>
      </div>
    );
  }
}

export default UserClass;
