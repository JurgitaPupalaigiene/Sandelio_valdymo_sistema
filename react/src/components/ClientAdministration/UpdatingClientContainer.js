import React from 'react';
import UpdatingClientComponent from './UpdatingClientComponent';
import axios from 'axios';
import { withRouter } from 'react-router';

class UpdatingClientContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldName: "",
      name: "",
      surname: "",
      dateOfBirth: "",
      phoneNumber: "",
      type: "",
    };
  }

  componentDidMount() {
    const position = this.props.match.params.name;

    axios.get('http://localhost:8090/clients/' + (position))
      .then((response) => {
        this.setState({oldName: response.data.name});
        this.setState({title: response.data.name});
        this.setState({image: response.data.surname});
        this.setState({description: response.data.dateOfBirth});
        this.setState({type: response.data.phoneNumber});
        this.setState({flag: response.data.type});
      })
      .catch((error) => {
        console.log(error);
      });
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
    this.setState({phoneNumber: event.target.value });
  }

  handleChangeOfType = (event) => {
    this.setState({ type: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8090/clients/' + (this.state.oldName), this.state)
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete('http://localhost:8090/clients/' + (this.state.oldName))
    .then((response) => {
        console.log("Ištrinta");
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  render() {
    this.fromMenu = "Updating data:";

    return (
      <UpdatingClientComponent handleChangeOfName={this.handleChangeOfName}
        handleChangeOfSurname={this.handleChangeOfSurname}
        handleChangeOfDateOfBirth={this.handleChangeOfDateOfBirth}
        handleChangeOfPhoneNumber={this.handleChangeOfPhoneNumber}
        handleChangeOfType={this.handleChangeOfType}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
        fromMenu={this.fromMenu}
        currentName={this.state.name}
        currentSurname={this.state.surname}
        currentDateOfBirth={this.state.dateOfBirth}
        currentPhoneNumber={this.state.phoneNumber}
        currenttype={this.state.type}
      />
    );
  }
}

export default withRouter(UpdatingClientContainer);