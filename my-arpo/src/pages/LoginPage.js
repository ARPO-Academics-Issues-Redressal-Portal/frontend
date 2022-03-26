import React, { Component } from 'react'
import ARPO from '../assets/ARPO-logos/ARPO-logos_transparent.png'
import IITK from '../assets/ARPO-logos/IITK Logo.png'
import { LoginApi } from '../apis/Apis'
import { paths } from '../URL/URLs'


export class LoginPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userName: "",
      password: "",
    }
  }

  checkAuthentication = async () => {
    console.log("Form submit")
    console.log(this.state)

    let res = await LoginApi(this.state.userName,this.state.password)
    console.log(res.data)

    if(res.data===''){
      alert("Invalid Username or password")
      return
    }

    let profileId = res.data.profile_id
    let isAdmin = res.data.isAdmin;
    let isTS = res.data.isTS
    sessionStorage.setItem("profileId",profileId)

    if(isAdmin===1)
      sessionStorage.setItem("isAdmin",true)
    if(isTS===1)
      sessionStorage.setItem("isTS",true)
      
    this.props.setToken()

    this.props.history.replace("/home")
    console.log(window)
    window.location.reload()
    this.props.setloggedIN(true)  
  }



  render() {
    return (
      <div className='d-flex flex-column align-items-center bg-log'>

        <div className='d-flex justify-content-center align-self-stretch'>
          <img src={ARPO} width={200} height={200} className="mr-3" />
          <img src={IITK} width={100} height={100} className="align-self-center" />
        </div>

        <div>
          <h1 className='m-0 text-center'>SIGN IN</h1>

          <form onSubmit={(e) => {
            e.preventDefault()
            this.checkAuthentication()

          }}>
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
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => { this.setState({ password: e.target.value }) }}
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

function Temp (){
  
}