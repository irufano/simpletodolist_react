import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    );
  }
}

export default List;
