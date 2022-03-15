import React, { Component } from 'react'

export class ManageUser extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userName: "",
      role: "",
      course: "",
      department: "",

    }
  }



  render() {
    return (
      <div className='d-flex flex-column align-items-center bg-log pt-5'>

        <div>
          <img />
          <h1>| APRO</h1>
          <img />
        </div>

        <div>

          <form onSubmit={(e) => { e.preventDefault() }}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                onChange={(e) => { this.setState({ userName: e.target.value }) }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Register as ?</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Role"
                onChange={(e) => { this.setState({ role: e.target.value }) }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">course</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="course"
                onChange={(e) => { this.setState({ course: e.target.value }) }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Department</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="department"
                onChange={(e) => { this.setState({ department: e.target.value }) }}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3 btn-large">
              Register
            </button>
          </form>

        </div>

      </div>
    )
  }
}

export default ManageUser