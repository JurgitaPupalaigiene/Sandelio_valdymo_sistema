import React from 'react';
import { Link } from 'react-router-dom';

var HomePage = (props) => {
    return (

        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to='/'>HomePage</Link> |&nbsp;
                            </li>
                            <li className="nav-item active">
                                <Link to='/admin'>Clients</Link> |&nbsp;
                            </li>
                            <li className="nav-item active">
                                <Link to='/pagalba'>Help</Link> |&nbsp;
                            </li>
                            <li className="nav-item active">
                                <Link to='/kontaktai'>Contacts</Link> |&nbsp;
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {props.children}
        </div>);

};

export default HomePage;

