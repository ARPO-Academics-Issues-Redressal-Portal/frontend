import React, { Component } from 'react'
import Card1 from '../../components/Card1'
import ARPO from '../../assets/ARPO-logos/ARPO-logos_transparent.png'
import GenQuery from '../../assets/ARPO-logos/Home.png'
import Manage from '../../assets/ARPO-logos/Manage.jpg'


export default class ManagePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            studentCards: [
                {
                    title: "Post Notification",
                    path: "postNotifications"

                },
                {
                    title: "View Profile",
                    path: "viewProfile"

                },
                {
                    title: "Query",
                    path: "query"
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
                                <a className="nav-link header-font" href="/technical-staff" >
                                    <img src={GenQuery} width={60} height={60} />
                                    <div className="mt-3">Home</div>
                                    
                                </a>
                            </li>


                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link header-font" href="#" >
                                    <img src={Manage} width={75} height={75} />
                                    &nbsp;
                                    <div>Manage</div>

                                </a>
                            </li>


                        </ul>
                    </div>
                </nav>

                <div className='d-flex justify-content-around mt-4'>
                    {
                        this.state.studentCards.map((data, id) => (
                            <div className="card text-center" style={{ width: "20rem", backgroundColor: "rgb(48 187 176)", borderRadius: '50px' }} key={id}>

                                <div className="card-body p-4 pr-5 pl-5">

                                    <h5 className="card-title">{data.title}</h5>                  
                                    <a href={"/technical-staff/manage/"+data.path}>
                                        <button type="button" className="btn btn-primary">Access</button>
                                    </a>

                                </div>

                            </div>
                        ))
                    }
                </div>

                {/* <div className='d-flex justify-content-around mt-4'>
                    {
                        this.state.studentCards.map((data, id) => (
                            <Card1 title={data.title} key={id} />
                            
                        ))
                    }
                </div> */}

            </div>

        )
    }
}
