import React from 'react';

var noMatch = (props) => {
    var goHome = () => props.history.push("/");
    return <div>Sorry, we haven't found anything ...
        <button type="button" className="btn btn-primary btn-sm" onClick={goHome}>Home</button>
    </div>;
};

export default noMatch;