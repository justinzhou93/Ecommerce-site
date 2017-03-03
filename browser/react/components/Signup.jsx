import React from 'react';
// Presentational Component

const SignupComponent = props => (
  <div>
    <h3>Add a Page</h3>
    <hr />
    <form onSubmit={props.handleSubmit}>

      <div className="form-group">
        <label htmlFor="name" className="col-sm-2 control-label">First Name</label>
        <div className="col-sm-10">
          <input name="firstName" type="text" className="form-control"/>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="name" className="col-sm-2 control-label">Last Name</label>
        <div className="col-sm-10">
          <input name="lastName" type="text" className="form-control"/>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email" className="col-sm-2 control-label"> Email</label>
        <div className="col-sm-10">
          <input name="email" type="text" className="form-control"/>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="title" className="col-sm-2 control-label">Password</label>
        <div className="col-sm-10">
          <input name="password" type="text" className="form-control"/>
        </div>
      </div>

      <div className="col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-primary">submit</button>
      </div>

    </form>
  </div>

);


