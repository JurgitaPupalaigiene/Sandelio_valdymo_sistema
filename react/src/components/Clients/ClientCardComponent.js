import React from 'react';
import PropTypes from 'prop-types';
import picture from './img/poilsis.jpg';
import {Link} from 'react-router-dom';


const ClientCardComponent = (props) => {
    var linkas = "/clients/" + props.name;
    return (
       
          <div className="card">
            <img className="card-img-top" src={picture} alt="poilsis"/>
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.surname}</p>
              <p className="card-text">{props.dateOfBirth}</p>
              <p className="card-text">{props.phoneNumber}</p>
              <p className="card-text">{props.type}</p>
              <Link className="btn btn-primary" to={linkas}>Update</Link>
            </div>
          </div>
      
  );
  }
  
ClientCardComponent.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
};

export default ClientCardComponent;