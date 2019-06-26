import React from 'react';
import picture from './img/poilsis.jpg';
import './styles.css';
import ClientCardComponent from "./ClientCardComponent"

const SingleClientComponent = (props) => {
    return (
        <div className="container">
            <ClientCardComponent className="row">
                <div className="col-2">
                    <img src={picture} alt="poilsis" width="150px"></img>
                </div>
                <div className="col-3">
                    <h5>{props.name}</h5>
                    <p>{props.surname}</p>
                    <p>{props.dateOfBirth}</p>
                    <p>{props.phoneNumber}</p>
                    <p>{props.type}</p>
                </div>
            </ClientCardComponent>
        </div>
    );
}

export default SingleClientComponent;