import React, { Component } from 'react';
class ContactCard extends Component {
  render() {
    const { name, surname, gender, region } = this.props;
    return (
      <div>
        <p>
          <span>
            <b>Name:</b>
          </span>{' '}
          {name}
        </p>
        <p>
          <span>
            <b>SurName:</b>
          </span>{' '}
          {surname}
        </p>
        <p>
          <span>
            <b>Gender:</b>
          </span>{' '}
          {gender}
        </p>
        <p>
          <span>
            <b>Region:</b>
          </span>{' '}
          {region}
        </p>
      </div>
    );
  }
}

export default ContactCard;
