import React, { Component } from 'react';
import List1 from './List1';
import List2 from './List2';
import DynamicList from './DynamicList';
class List extends React.Component {
  state = {
    description: 'Get out of bed',
    deadline: 'Wed Sep 13 2017',
  };
  render() {
    return (
      <div>
        <h1>Static List</h1>
        <ul>
          <li>{this.state.description + ', ' + this.state.deadline}</li>
        </ul>
        <List1 />
        <List2 />
        <DynamicList />
      </div>
    );
  }
}
export default List;
