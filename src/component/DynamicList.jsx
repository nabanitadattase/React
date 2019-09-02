import React, { Component } from 'react';
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

  render() {
    let classes = 'main ';
    classes += this.state.list.done === true ? `<b>X</b>` : '';
    return (
      // <div className={classes}></div>
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
        {/* {this.conditionalRender()} */}
      </div>
    );
  }
}

export default DynamicList;
