import React, { Component } from 'react';

class List2 extends React.Component {
  state = {
    description: 'Eat breakfast',
    deadline: 'Fri Sep 15 2017',
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

export default List2;
