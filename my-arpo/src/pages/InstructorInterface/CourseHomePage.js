import React, { Component } from 'react'
import GeneralHeader from '../../components/GeneralHeader'


export default class CoursesHomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            courseCards: [
                {
                    title: "Notification",
                    path: "notifications"

                },
                {
                    title: "General Forum",
                    path: "generalforum"
                },
                {
                    title: "Private Query",
                    path: "privatequery"
                },
                {
                    title: "Participants List",
                    path: "participantslist"
                },
                {
                    title: "Student's Course View",
                    path: "courseView"

                },
            ],
        }
    }

    render() {
        let pathsArr = window.location.pathname.split('/')
        let courseId = pathsArr[pathsArr.length -1]
        console.log(courseId)
        return (

            <div>

                <GeneralHeader to='/instructor' manage={true} />

                <div className='d-flex justify-content-around mt-4'>
                    {
                        this.state.courseCards.map((data, id) => (
                            <div className="card text-center" style={{ width: "20rem", backgroundColor: "rgb(48 187 176)", borderRadius: '50px' }} key={id}>

                                <div className="card-body p-4 pr-5 pl-5">

                                    <h5 className="card-title">{data.title}</h5>                  
                                    <a href={"/instructor/courses/"+courseId+"/"+data.path}>
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
