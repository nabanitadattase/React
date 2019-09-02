import React, { Component } from 'react';
import { handleJson } from './../utils/handlejson';
import axios from 'axios';
// import Contactcard from '../components/contactCard/contactCard';
import ContactTable from '../components/contactTable/contactTable';
//import
class LifeCycle extends Component {
  state = {
    response: [], // innitialize
    error: '',
  };
  componentDidMount() {
    this.fetchData();
  }
  // 1. Fetch data from endpoints:

  async fetchData() {
    try {
      const apiCall = await axios.get('https://uinames.com/api/?amount=10');
      //2.  extract data
      const response = handleJson(apiCall);
      console.log('Utility used', response);
      //3. Set the state
      this.setState({
        response: response,
      });
      console.log('state is set:', this.state.response);
    } catch (error) {
      console.error(error);
      this.setState({ error: error.message });
    }
  }
  render() {
    const { response } = this.state;
    return (
      <div>
        <center>
          <h1>User Details</h1>
        </center>
        <ContactTable data={response} />
      </div>
    );
  }
}
export default LifeCycle;
