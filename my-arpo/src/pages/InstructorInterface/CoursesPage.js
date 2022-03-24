import React, { Component } from 'react'
import GeneralHeader from '../../components/GeneralHeader'
import { CoursesApi } from '../../apis/Apis'

export default class CoursesPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            courses: [
                {
                    title: "Course1",
                    desc: "Inst1",
                    id: 'course1'
                },
                {
                    title: "Course2",
                    desc: "Inst2",
                    id:"course2"
                },
                {
                    title: "Course3",
                    desc: "Inst3",
                    id:'course3'
                },
            ],
        }
    }

    fnGetCourses = async ()=>{
        // let res = await CoursesApi(this.props.profileId);
        let res = await CoursesApi(123);
        console.log(res.data)
    
        let coursesReceived = Array();
        let arr = res.data
        for (let i =0 ;i<arr.length;i++){
          let temp = {}
          temp["courseName"] = arr[i].course
          temp["role"] = arr[i].role
          temp["path"] = "/" + arr[i].course
          coursesReceived.push(temp)
        }
        this.setState({courses:coursesReceived})
        console.log(coursesReceived)
    }
    
    componentDidMount(){
        this.fnGetCourses();
    }

    render() {
        return (

            <div>
                <GeneralHeader to={'/instructor'} />

                <div className='d-flex justify-content-around mt-4'>
                    {
                        this.state.courses.map((data, id) => (

                            <div className="card text-center" style={{ width: "20rem", backgroundColor: "rgb(48 187 176)", borderRadius: '50px' }} key={id}>


                                <div className="card-body p-4 pr-5 pl-5">

                                    <h5 className="card-title">{data.courseName}</h5>
                                    <h5 className="card-text pt-3">
                                        {data.role}
                                    </h5>

                                    <a href={'/instructor/courses' + data.path}>
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