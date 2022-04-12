import React, { Component } from 'react'
import GeneralHeader from '../../components/GeneralHeader'


export default class InstructorCoursesHomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            courseCards: [
                {
                    title: "Announcements",
                    path: "/announcements"

                },
                {
                    title: "General Forum",
                    path: "/generalforum"
                },
                {
                    title: "Private Query",
                    path: "/privatequery"
                },
                {
                    title: "Participants List",
                    path: "/participantslist"
                },
                {
                    title: "Add User To Course",
                    path: "/addUser"
                }
            ],
        }
    }

    render() {
        let url = window.location.pathname
        
        return (

            <div>

                <GeneralHeader to='/home' manage={true} />

                <div className='d-flex justify-content-around mt-4'>
                    {
                        this.state.courseCards.map((element, id) => (
                            <div className="card text-center" style={{ width: "20rem", backgroundColor: "rgb(48 187 176)", borderRadius: '50px' }} key={id}>

                                <div className="card-body p-4 pr-5 pl-5">

                                    <h5 className="card-title" style={{fontWeight:'bold'}}>{element.title}</h5>                  
                                    <a href={url+element.path}>
                                        <button type="button" className="btn btn-primary">Access</button>
                                    </a>

                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>

        )
    }
}
