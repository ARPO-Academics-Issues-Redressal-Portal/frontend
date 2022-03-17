import React, { Component } from 'react'
import GeneralHeader from '../../components/GeneralHeader'

export default class StudentCourses extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       courses:[
         {
           courseName : 'CS253',
           path : '/CS253'            
         },
         {
           courseName : 'ESC101',
           path : '/ESC101'            
         },
         {
           courseName : 'MTH101',
           path : '/MTH101'            
         },
         {
           courseName : 'PHY101',
           path : '/PHY101'            
         },
         {
           courseName : 'HSS101',
           path : '/HSS101'            
         },
        ]
    }
  }

  render() {
    return (
      <div>
          <GeneralHeader to="/student"/>

          <div className='d-flex justify-content-center flex-wrap m-5'>
            {
              this.state.courses.map((course)=>(
                  <div key={course.courseName} className='course-card d-flex flex-column'>
                    <div className='mt-3 mb-4'> Course : {course.courseName} </div>
                    <a href={'/student/courses' + course.path}>
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
