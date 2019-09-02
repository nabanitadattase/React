import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
class DynamicList extends React.Component {
  state = {
    list: [
      {
        id: 1,
        description: 'Get out of bed',
        deadline: '2017-09-11',
        done: true,
      },
      {
        id: 2,
        description: 'Brush teeth',
        deadline: '2017-09-10',
        done: false,
      },
      {
        id: 3,
        description: 'Eat breakfast',
        deadline: '2017-09-09',
        done: false,
      },
    ],
  };
  handleInput = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    const { value, buttonName, person } = this.state;
    return (
      <div>
        <h1>Dynamic List</h1>
        <ul>
          {this.state.list.map(item => (
            <li key={item.id}>
              <strong>description: </strong>
              {item.description}
              <br />
              <strong>Deadline: </strong>
              {item.deadline}
              <br />
              <strong>Status:</strong>
              {' ' + item.done}
            </li>
          ))}
        </ul>
        <Input onchange={this.handleInput} value={value} />
      </div>
    );
  }
}

export default DynamicList;
