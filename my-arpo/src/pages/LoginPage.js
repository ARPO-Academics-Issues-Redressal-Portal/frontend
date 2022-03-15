import React, { Component } from 'react'
import ARPO from '../assets/ARPO-logos/ARPO-logos_transparent.png'
import IITK from '../assets/ARPO-logos/IITK Logo.png'


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
      <div className='d-flex flex-column align-items-center bg-log'>

          <div className='d-flex justify-content-center align-self-stretch'>
            <img src={ARPO} width={200} height={200} className="mr-3"/>
            <img src={IITK} width={100} height={100} className="align-self-center"/>
          </div>

          <div>
            <h1 className='m-0 text-center'>SIGN IN</h1>

            <form onSubmit={(e)=>{
                e.preventDefault()
                console.log("Form submit")
                console.log(this.props)
              }}>
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