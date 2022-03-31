import React from 'react'
import {Route} from 'react-router-dom'
import Participants from '../pages/InstructorInterface/Participants'

export default function () {
  return (
    <>


        <Route exact path={'/courses/instructor/:course/participantslist'}>
          <Participants />
        </Route>

        {/* <Route exact path={'/instructor/courses/:courseid/privatequery'}>
          <QueryView />
        </Route>

        <Route exact path={'/instructor/courses/:courseid/participantslist'}>
          <Participants />
        </Route>

        <Route exact path={'/instructor/courses/:courseid/courseView'}>
          <CourseHomePage />
        </Route> */}

    </>
  )
}
