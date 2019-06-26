import React from 'react';

const UpdatingClientComponent = (props) => {    
    return (
<div className="jumbotron jumbotron-fluid">
  <div className="container">
        <form >
            <div className="form-row">
                <div className="col-md-12 mb-12">
                    <p>{props.fromMenu}</p>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault01">Name </label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="" value={props.currentName} required onChange={props.handleChangeOfName}></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault02">Surname </label>
                    <input type="text" className="form-control" id="validationDefault02" placeholder="" value={props.currentSurname} required onChange={props.handleChangeOfSurname}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-8 mb-3">
                    <label htmlFor="validationDefault03">Date of Birth </label>
                    <input type="text" className="form-control" id="validationDefault03" placeholder="" value={props.currentDateOfBirth} required onChange={props.handleChangeOfDateOfBirth}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault04">Phone number </label>
                    <input type="text" className="form-control" id="validationDefault04" placeholder="" value={props.currentPhoneNumber} required onChange={props.handleChangeOfPhoneNumber}></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault05">Type </label>
                    <input type="text" className="form-control" id="validationDefault05" placeholder="" value={props.currentType} required onChange={props.handleChangeOfType}></input>
                </div>
            </div>
            <button className="btn btn-primary" type="submit" onClick={props.handleSubmit}>Save</button>
            <button className="btn btn-primary" onClick={props.handleDelete}>Delete</button>
        </form>
    
    </div>
</div>
    );
}

export default UpdatingClientComponent;