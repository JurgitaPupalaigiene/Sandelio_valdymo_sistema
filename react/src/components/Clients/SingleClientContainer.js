import React from 'react';
import SingleClientComponent from './SingleClientComponent';
import axios from 'axios';

class SingleClientContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "",
            surname: '',
            dateOfBirth: '',
            phoneNumber: '',
            type: '',  
        }; 
    }
    
    componentDidMount() {
        const position = this.props.match.params.name;
        axios.get('http://localhost:8090/clients/' + (position))
            .then((response) => {
                     this.setState({ 
                        name: response.data.name,
                        surname: response.data.surname,
                        dateOfBirth: response.data.dateOfBirth,
                        phoneNumber: response.data.phoneNumber,
                        type: response.data.type
                }) 
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <SingleClientComponent
                     name={this.state.name}
                     surname={this.state.surname}
                     dateOfBirth={this.state.dateOfBirth}
                     phoneNumber={this.state.phoneNumber}
                     type={this.state.type}/>
            </div>
        );
    }
}

export default SingleClientContainer;