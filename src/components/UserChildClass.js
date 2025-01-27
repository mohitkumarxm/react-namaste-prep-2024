import React from "react";

class UserChildClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      count2: 2,
    };
    console.log("User Child Class Component constructor");
  }
  componentDidMount() {
    console.log("User Child Class Component Did Mount");
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log("User Child Class Component render");
    return (
      <div>
        <div>Class Component</div>
        <div>My name is {name}</div>
        <div>At {location}</div>
        <div>
          {count}
          {count2}
        </div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}

export default UserChildClass;
