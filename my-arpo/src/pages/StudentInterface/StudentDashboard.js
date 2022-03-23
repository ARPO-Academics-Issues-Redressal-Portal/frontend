import React, { Component } from 'react'
import Card from '../../components/Card'
import ARPO from '../../assets/ARPO-logos/ARPO-logos_transparent.png'
import { NotificationApi } from '../../apis/Apis'


export default class StudentDashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tiles: ["Notifications",
                "Important Links",
                "Institute News",
            ],
            notifications: [],
            links: [],
            news: []
        }
    }

    fnGetNotifications = async () => {
        let res = await NotificationApi();
        console.log(res.data)

        let arr = res.data
        let allNotifications = []

        for (let i = 0; i < arr.length; i++) {
            let temp = {
                title: arr[i].heading,
                desc: arr[i].description
            }

            allNotifications.push(temp)
        }
        console.log(allNotifications)
        this.setState({notifications: allNotifications })
    }

    fnGetNew = async () => {
        let res = await NotificationApi();
        console.log(res.data)

        let arr = res.data
        let allNotifications = []

        for (let i = 0; i < arr.length; i++) {
            let temp = {
                title: arr[i].heading,
                desc: arr[i].description
            }

            allNotifications.push(temp)
        }
        this.setState({ notifications: allNotifications })

    }

    fnGetLinks = async () => {

    }

    componentDidMount() {
        this.fnGetNotifications();
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
                                <a className="nav-link header-font" href="/student">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link header-font" href="/student/courses">
                                    Courses
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link header-font" href="/student/profile">
                                    My Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link header-font" href="/student/admins">
                                    Admins
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link header-font" href="/stduent/help">
                                    Help
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>


                <div className='d-flex justify-content-around mt-4'>

                    <div className="card" style={{ width: "20rem", backgroundColor: "rgb(48 187 176)", borderRadius: '50px' }}>

                        <div className="card-body p-4 pr-5 pl-5">

                            <h3 className="card-title text-center">Notifications</h3>

                            {
                                this.state.notifications.map((notify,index)=>(
                                    <div style={{
                                        border : "2px solid white"
                                    }} key={index}>
                                        <h5>{notify.title}</h5>
                                        <p>{notify.desc}</p>                                    
                                    </div>
                                ))
                            }

                        </div>

                    </div>

                    <div className="card" style={{ width: "20rem", backgroundColor: "rgb(48 187 176)", borderRadius: '50px' }}>

                        <div className="card-body p-4 pr-5 pl-5">

                            <h3 className="card-title text-center">Important Links</h3>

                            {
                                this.state.links.map((notify,index)=>(
                                    <div style={{
                                        border : "2px solid white"
                                    }} key={index}>
                                        <h5>{notify.title}</h5>
                                        <p>{notify.desc}</p>                                    
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                    <div className="card" style={{ width: "20rem", backgroundColor: "rgb(48 187 176)", borderRadius: '50px' }}>

                        <div className="card-body p-4 pr-5 pl-5">

                            <h3 className="card-title text-center">Institute News</h3>

                            {
                                this.state.news.map((notify,index)=>(
                                    <div style={{
                                        border : "2px solid white"
                                    }} key={index}>
                                        <h5>{notify.title}</h5>
                                        <p>{notify.desc}</p>                                    
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                </div>

            </div>

        )
    }
}
