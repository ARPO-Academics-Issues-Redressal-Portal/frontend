import React, { Component } from 'react'
import Card1 from '../components/Card1'
import ARPO from '../assets/ARPO-logos/ARPO-logos_transparent.png'


export default class CoursesPage extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         studentCards : [
             {
                title : "Course1",
                desc : "Inst1"

             },
             {
                title : "Course2",
                desc : "Inst2"
             },
             {
                title : "Course3",
                desc : "Inst3"
             },             
        ],
      }
    }

    render() {
        return (
            
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
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
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link header-font" href="#">
                                    Home 
                                </a>
                            </li>
                            
                        
                        </ul>
                    </div>
                </nav>


                <div className='d-flex justify-content-around mt-4'>
                    {
                        this.state.studentCards.map((data,id) => (
                            <Card1 title={data.title} desc={data.desc} key={id}/>
                        ))
                    }
                </div>
                
            </div>

        )
    }
}
