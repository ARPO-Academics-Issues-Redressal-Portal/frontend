import React, { Component } from 'react'
import ARPO from '../../assets/ARPO-logos/ARPO-logos_transparent.png'


export default class StudentDashHeader extends Component {
  render() {
    return (
      <div>
          <div>
              <img  src= {ARPO} />
          </div>
          <div>
              <li>Home</li>
              <li>Courses</li>
              <li>My Profile</li>
              <li>Admins</li>
              <li>Help</li>
          </div>
      </div>
    )
  }
}
