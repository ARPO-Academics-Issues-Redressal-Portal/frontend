import React, { Component } from 'react'
import GeneralHeader from '../components/GeneralHeader'
import { CoursesApi } from '../apis/Apis'

export default class StudentCourses extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       courses:[
         {
           courseName : 'CS253',
           path : '/CS253',
           role:  "student"
         },
         {
           courseName : 'ESC101',
           path : '/ESC101',
           role:  "student"            
         },
         {
           courseName : 'MTH101',
           path : '/MTH101',
           role:  "instructor"            
         },
         {
           courseName : 'PHY101',
           path : '/PHY101',
           role:  "TA"           
         },
         {
           courseName : 'HSS101',
           path : '/HSS101',
           role:  "student"            
         },
        ]
    }
  }


fnGetCourses = async ()=>{
    let profileId = sessionStorage.getItem("profileId")
    let res = await CoursesApi(profileId);
    console.log(res.data)

    let coursesReceived = Array();
    let arr = res.data
    for (let i =0 ;i<arr.length;i++){
      let temp = {}
      temp["courseName"] = arr[i].course
      temp["role"] = arr[i].role
      temp["path"] = '/courses/' + arr[i].role.toLowerCase() +"/"+arr[i].course
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
          <GeneralHeader to="/home"/>

          <div className='d-flex justify-content-center flex-wrap m-5'>
            {
              this.state.courses.map((course)=>(
                  <div key={course.courseName} className='course-card d-flex flex-column'>
                    <div className='mt-3 mb-4'> Course : {course.courseName} </div>
                    <div className='mt-3 mb-4'> Role : {course.role} </div>
                    <a href={course.path}>
                        <button type="button" className="btn btn-primary">Access</button>
                    </a>
                  </div>
              ))
            }
          </div>


      </div>
    )
  }
}