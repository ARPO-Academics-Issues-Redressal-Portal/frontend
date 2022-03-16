import React, { Component } from 'react'
import ARPO from '../assets/ARPO-logos/ARPO-logos_transparent.png'
import ManageIcon from '../assets/ARPO-logos/Manage.jpg'
import Home from '../assets/ARPO-logos/Home.png'


export default class GeneralHeader extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  render() {
    // console.log(this.props)
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white justify-content-between">
              <div className="navbar-brand">
                  <img src={ARPO} width={150} height={150}/>
              </div>

              <div className='d-flex'>

                {
                  this.props.manage && (
                    <div>
                        <a className="nav-link" href={this.props.to} style={{color:'inherit'}}>
                          <div className='d-flex flex-column'>
                            <img src={ManageIcon} height={25} width={25} className='align-self-center'/>                      
                            <div style={{fontSize:'10px'}}>Manage</div>
                          </div>
                        </a>                 
                    </div>
                  )
                }
            
                <div>
                    <a className="nav-link" href={this.props.to} style={{color:'inherit'}}>
                      <div className='d-flex flex-column'>
                        <img src={Home} height={25} width={25} className='align-self-center'/>                      
                        <div style={{fontSize:'10px'}}>Return to Home</div>
                      </div>
                    </a>                 
                </div>

              </div>
          </nav>

      </div>
    )
  }
}
