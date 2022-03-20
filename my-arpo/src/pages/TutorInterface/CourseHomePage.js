import React, { Component } from 'react'
import Card1 from '../../components/Card1'
import ARPO from '../../assets/ARPO-logos/ARPO-logos_transparent.png'
import GenQuery from '../../assets/ARPO-logos/Home.png'
import Manage from '../../assets/ARPO-logos/Manage.jpg'


export default class CoursesHomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            studentCards: [
                {
                    title: "Notification",


                },
                {
                    title: "General Forum",

                },
                {
                    title: "Private Query",

                },
                {
                    title: "Participants List",

                },
                {
                    title: "Student's Course View",

                },
            ],
        }
    }

    render() {
        return (

            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
                    <div className="navbar-brand">
                        <img src={ARPO} width={150} height={150} />
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
                                <a className="nav-link header-font" href="#" >
                                    <img src={GenQuery} width={60} height={60} />
                                    <div className="mt-3">Home</div>
                                    
                                </a>
                            </li>


                        </ul>
                       
                    </div>
                </nav>


                <div className='d-flex justify-content-around mt-4'>
                    {
                        this.state.studentCards.map((data, id) => (
                            <Card1 title={data.title} key={id} />
                        ))
                    }
                </div>

            </div>

        )
    }
}
