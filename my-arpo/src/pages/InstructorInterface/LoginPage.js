import React, { Component } from 'react'

export class LoginPage extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       userName : "",
       password : "",
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

            <form onSubmit={(e)=>{e.preventDefault()}}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  onChange={(e)=>{this.setState({userName:e.target.value})}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e)=>{this.setState({password:e.target.value})}}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3 btn-large">
                Submit
              </button>
            </form>

          </div>

      </div>
    )
  }
}

export default LoginPage