import React, { Component } from 'react'
import ARPO from '../assets/ARPO-logos/ARPO-logos_transparent.png'
import Home from '../assets/ARPO-logos/Home.png'
import Courses from '../assets/ARPO-logos/courses.png'
import Profile from '../assets/ARPO-logos/profile.png'
import Admins from '../assets/ARPO-logos/Admins.png'
import Help from '../assets/ARPO-logos/Help.png'
import Manage from '../assets/ARPO-logos/Manage.jpg'
import logOut from '../assets/ARPO-logos/logout-icon.png'
import AddProdile from '../assets/ARPO-logos/addProfile.png'
import { NotificationApi } from '../apis/Apis'


export default class StudentDashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tiles: ["Notifications",
                "Important Links",
            ],
            notifications: [],
            links: [{
                title:"Pingala",
                link:"https://pingala.iitk.ac.in/IITK-0/login",
                desc:"Pingala is the site for users to work with institute services."
            },
            {
                title:"IIT Kanpur",
                link:"https://www.iitk.ac.in",
                desc:"Institute Site."
            },
            {
                title:"DOAA IIT Kanpur",
                link:"https://www.iitk.ac.in/doaa",
                desc:"IIT Kanpur DOAA Site."
            }
            ],
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
        this.setState({ notifications: allNotifications })
    }
    
    fnGetLinks = async () => {

    }

    componentDidMount() {
        this.fnGetNotifications();
    }

    render() {
        let isAdmin = sessionStorage.getItem("isAdmin")
        let isTS = sessionStorage.getItem("isTS")
        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-light   flex-nowrap bg-header">
                    <div className="navbar-brand">
                        <img src={ARPO} width={150} height={150} />
                    </div>
                    <div className="navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link header-font" href="/home">
                                    <div className='text-center'>
                                        <img src={Home} width={30} height={30} />
                                        <p className='m-0 text-center' style={{ fontSize: '12px' }}>Home</p>
                                    </div>
                                </a>
                            </li>
                            {
                                !isAdmin && !isTS && (
                                    <li className="nav-item">
                                        <a className="nav-link header-font" href="/courses">
                                            <div className='text-center'>
                                                <img src={Courses} width={31} height={31} />
                                                <p className='m-0 text-center' style={{ fontSize: '12px' }}>Courses</p>
                                            </div>
                                        </a>
                                    </li>)
                            }
                            <li className="nav-item">
                                <a className="nav-link header-font" href="/profile">
                                    <div className='text-center'>
                                        <img src={Profile} width={30} height={30} />
                                        <p className='m-0' style={{ fontSize: '12px' }}>My Profile</p>
                                    </div>
                                </a>
                            </li>
                            {
                                !isAdmin && !isTS && (<li className="nav-item">
                                    <a className="nav-link header-font" href="/otherQueries">
                                        <div className='text-center'>
                                            <img src={Manage} width={30} height={30} />
                                            <p className='m-0 text-center' style={{ fontSize: '12px' }}>Other Queries</p>
                                        </div>
                                    </a>
                                </li>)
                            }
                            {
                                (isAdmin || isTS) && (<li className="nav-item">
                                    <a className="nav-link header-font" href="/manage">
                                        <div className='text-center'>
                                            <img src={Manage} width={30} height={30} />
                                            <p className='m-0 text-center' style={{ fontSize: '12px' }}>Manage</p>
                                        </div>
                                    </a>
                                </li>)
                            }
                            {
                                (isAdmin) && (<li className="nav-item">
                                    <a className="nav-link header-font" href="/admins/AddProfile">
                                        <div className='text-center'>
                                            <img src={AddProdile} width={30} height={30} />
                                            <p className='m-0 text-center' style={{ fontSize: '12px' }}>Add Profile</p>
                                        </div>
                                    </a>
                                </li>)
                            }
                            {
                                !isTS && (<li className="nav-item">
                                    <a className="nav-link header-font" href="/help">
                                        <div className='text-center'>
                                            <img src={Help} width={30} height={30} />
                                            <p className='m-0 text-center' style={{ fontSize: '12px' }}>Help</p>
                                        </div>
                                    </a>
                                </li>)
                            }
                            <li className="nav-item">
                                <a className="nav-link header-font" href="/login" onClick={()=>{
                                    sessionStorage.clear()
                                    window.location.reload()
                                }}>
                                    <div className='text-center'>
                                        <img src={logOut} width={30} height={30} />
                                        <p className='m-0' style={{ fontSize: '12px' }}>LogOut</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className='d-flex justify-content-around mt-4'>

                    <div className="card bg-header" style={{ width: "20rem", borderRadius: '50px' ,height:'70vh'}}>

                        <div className="card-body p-4 pr-5 pl-5 box-shadow">

                            <h3 className="card-title text-center">Notifications</h3>

                            {
                                this.state.notifications.map((notify, index) => (
                                    <div style={{
                                        borderBottom: "2px solid white",
                                        borderTop: "2px solid white",
                                    }} key={index} className="text-center">
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
                                this.state.links.map((notify, index) => (
                                    <div style={{
                                        borderBottom: "2px solid white",
                                        borderTop: "2px solid white",
                                    }} key={index} className="text-center">
                                        <h5><a href={notify.link}>{notify.title}</a></h5>
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
