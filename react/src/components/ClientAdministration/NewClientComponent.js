import React from 'react'

const NewClientComponent = (props) => {
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
                            <label htmlFor="validationDefault01">Name</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Name" value={props.name} required onChange={props.handleChangeOfName}></input>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault02">Surname</label>
                            <input type="text" className="form-control" id="validationDefault02" placeholder="Surname" value={props.surname}required onChange={props.handleChangeOfSurname}></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-8 mb-3">
                        <label htmlFor="validationDefault03">Date of Birth</label>
                    <input type="text" className="form-control" id="validationDefault03" placeholder="Date of Birth" value={props.dateOfBirth}required onChange={props.handleChangeOfDateOfBirth}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault04">Phone number:</label>
                    <input type="text" className="form-control" id="validationDefault04" placeholder="Phone number" value={props.phoneNumber}required onChange={props.handleChangeOfPhoneNumber}></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault05">Type</label>
                    <input type="text" className="form-control" id="validationDefault05" placeholder="Type" value={props.type}required onChange={props.handleChangeOfType}></input>
                </div>
            </div>
            <button className="btn btn-primary" type="submit" onClick={props.handleSubmit}>Save</button>
        </form>
    </div>
  </div>  
    );
}

export default NewClientComponent;