import React, { Component } from 'react';

class List1 extends React.Component {
  state = {
    description: 'Brush teeth',
    deadline: 'Thu Sep 14 2017',
  };
  render() {
    return (
      <div>
        <ul>
          <li>{this.state.description + ', ' + this.state.deadline}</li>
        </ul>
      </div>
    );
  }
}

export default List1;
