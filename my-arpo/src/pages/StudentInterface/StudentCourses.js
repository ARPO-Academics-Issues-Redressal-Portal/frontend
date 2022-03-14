import React, { Component } from 'react'
import ARPO from '../../assets/ARPO-logos/ARPO-logos_transparent.png'

export default class StudentCourses extends Component {
  render() {
    return (
      <div>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="navbar-brand">
                  <img src={ARPO} width={150} height={150}/>
              </div>
          
              <div>
                  <li className="nav-item">
                      <a className="nav-link" href="#">
                          Return to Home 
                      </a>
                  </li>
              </div>
          </nav>

      </div>
    )
  }
}
