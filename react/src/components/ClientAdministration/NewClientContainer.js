import React from 'react';
import NewClientComponent from './NewClientComponent';
import axios from 'axios';
import { withRouter } from 'react-router';


class NewClientContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      dateOfBirth: '',
      phoneNumber: '',
      type:'',
      };
  }

  handleChangeOfName = (event) => {
    this.setState({ name: event.target.value });
  }

  handleChangeOfSurname = (event) => {
    this.setState({ surname: event.target.value });
  }

  handleChangeOfDateOfBirth = (event) => {
    this.setState({ dateOfBirth: event.target.value });
  }

  handleChangeOfPhoneNumber = (event) => {
    this.setState({ phoneNumber: event.target.value });
  }

  handleChangeOfType = (event) => {
    this.setState({ type: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:8090/clients', this.state)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {

  }
  render() {
    
    this.fromMenu = "Enter new client:"

    return (
      <NewClientComponent handleChangeOfName={this.handleChangeOfName}
        handleChangeOfSurname={this.handleChangeOfSurname}
        handleChangeOfDateOfBirth={this.handleChangeOfDateOfBirth}
        handleChangeOfPhoneNumber={this.handleChangeOfPhoneNumber}
        handleChangeOfType={this.handleChangeOfType}
        handleSubmit={this.handleSubmit}
        fromMenu={this.fromMenu}
      />
    );
  }
}

export default withRouter(NewClientContainer);