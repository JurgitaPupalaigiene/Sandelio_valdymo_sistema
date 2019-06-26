import React from 'react';
import ClientCardComponent from './ClientCardComponent';
import axios from 'axios';

class Clients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: '',
            loading: 'Everything is on its way. Please wait a moment ...'
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
            const clientCard = this.state.clients.map((client, id) => {
                return (
                    <ClientCardComponent
                        key={id}
                        name={client.name}
                        surname={client.surname}
                        dateOfBirth={client.dateOfBirth}  
                        phoneNumber={client.phoneNumber}
                        type={client.type}
                    />
                );
            });
            return (<div className="row">{clientCard}</div>);
        }
        return this.state.loading;
    }
}

export default Clients;