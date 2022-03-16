import React, { Component } from 'react'
import ARPO from '../../assets/ARPO-logos/ARPO-logos_transparent.png'
import GeneralHeader from '../../components/GeneralHeader'

export default class StudentCourses extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       courses:['CS253','ESC101','MTH101','PHY101','HSS101']
    }
  }

  render() {
    return (
      <div>
          <GeneralHeader />

          <div className='d-flex justify-content-center flex-wrap m-5'>
            {
              this.state.courses.map((course)=>(
                  <div key={course} className='course-card d-flex flex-column'>
                    <div className='mt-3 mb-4'> Course : {course} </div>
                    <button className='btn btn-primary'>Access</button>
                  </div>
              ))
            }
          </div>


      </div>
    )
  }
}
