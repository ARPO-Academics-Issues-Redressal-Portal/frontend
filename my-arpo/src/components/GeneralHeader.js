import React, { Component } from 'react'
import ARPO from '../assets/ARPO-logos/ARPO-logos_transparent.png'


export default class GeneralHeader extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white justify-content-between">
              <div className="navbar-brand">
                  <img src={ARPO} width={150} height={150}/>
              </div>
          
              <div>
                  <ul className='navbar-nav'>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Return to Home 
                        </a>
                    </li>
                  </ul>
                  
              </div>
          </nav>

      </div>
    )
  }
}
