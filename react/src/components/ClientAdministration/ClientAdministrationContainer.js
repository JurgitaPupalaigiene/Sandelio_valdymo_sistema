import React from 'react';
import ClientAdministrationComponent from './ClientAdministrationComponent';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ClientAdministrationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: '',
            loading: 'Siulome isgerti kavos ar arbatos, nes svenciu ikelimas uztruks ...'
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8090/clients')
            .then((response) => {
                this.setState({ clients: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.clients) {
            const clientsCard = this.state.clients.map((client, index) => {
                return (
                    <ClientAdministrationComponent
                        key={client.id}
                        title={client.name}
                        surname={client.surname}
                        dateOfBirth={client.dateOfBirth}
                        phoneNumber={client.phoneNumber}
                        type={client.type}
                    />
                );
            });
            return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="container">
                <div className="row">
                    <Link className="btn btn-primary btn-sm" to="/admin/clients/new">New client</Link>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p>Name: </p>
                    </div>
                    <div className="col-2">
                         <p>Surname: </p>
                    </div>
                    <div className="col-8">
                        <p>Date of Birth: </p>
                    </div>
                    <div className="col-8">
                        <p>Phone number: </p>
                    </div>
                    <div className="col-8">
                        <p>Type: </p>
                    </div>
                </div>
                <div className="row">{clientsCard}
                </div>
            </div>
        </div>
    </div>
                );
        }
        return this.state.loading;
    }
}

export default ClientAdministrationContainer;