import React, { Component } from 'react';
import ContactCard from '../contactCard/contactCard';
import './contacttable.css';

class ContactTable extends Component {
  state = {};
  render() {
    const { data } = this.props;
    console.log('data from parent', data);
    return (
      <ul className="contactCard">
        {data.map((d, index) => (
          <li key={index}>
            <ContactCard name={d.name} surname={d.surname} gender={d.gender} region={d.region} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactTable;
