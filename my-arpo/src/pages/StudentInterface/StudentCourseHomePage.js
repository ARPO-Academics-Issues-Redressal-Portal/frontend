import React, { Component } from 'react'
import GeneralHeader from '../../components/GeneralHeader'


export default class StudentCourseHomePage extends Component {

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
                    path: "/generalForum"
                },
                {
                    title: "Private Query",
                    path: "/privateQuery"
                },
            ],
        }
    }

    render() {
        let url = window.location.pathname
        console.log(url)
        
        return (

            <div>

                <GeneralHeader to='/home' />


                <div className='d-flex justify-content-around mt-4'>
                    {
                        this.state.courseCards.map((element, id) => (
                            <div className="card text-center" style={{ width: "20rem", backgroundColor: "rgb(48 187 176)", borderRadius: '50px' }} key={id}>

                                <div className="card-body p-4 pr-5 pl-5">

                                    <h3 className="card-title" style={{fontWeight:'bold'}}>{element.title}</h3>                  
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
