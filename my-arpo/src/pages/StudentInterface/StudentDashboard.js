import React, { Component } from 'react'
import Card from '../../components/Card'
import ARPO from '../../assets/ARPO-logos/ARPO-logos_transparent.png'


export default class StudentDashboard extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         studentCards : [
             {
                title : "Notification",
                desc : "Some quick example text to build on the card title and make up the bulk of the card's content."

             },
             {
                title : "Important Links",
                desc : "Some quick example text to build on the card title and make up the bulk of the card's content."
             },
             {
                title : "Institute News",
                desc : "Some quick example text to build on the card title and make up the bulk of the card's content."
             },             
        ],
      }
    }

    render() {
        return (
            
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand">
                        <img src={ARPO} width={150} height={150}/>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Home 
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Courses
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    My Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Admins
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Help
                                </a>
                            </li>
                        
                        </ul>
                    </div>
                </nav>


                <div className='d-flex justify-content-around'>
                    {
                        this.state.studentCards.map((data,id) => (
                            <Card title={data.title} desc={data.desc} key={id}/>
                        ))
                    }
                </div>
                
            </div>

        )
    }
}
