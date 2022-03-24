import React from 'react'
import {Route} from 'react-router-dom'
import CourseHomePage from '../pages/InstructorInterface/InstructorCourseHomePage'
import QueryView from '../pages/InstructorInterface/QueryView';
import Participants from '../pages/InstructorInterface/Participants';


export default function () {
  return (
    <>
        <Route exact path={'/instructor/courses/:courseid/privatequery'}>
          <QueryView />
        </Route>

        <Route exact path={'/instructor/courses/:courseid/participantslist'}>
          <Participants />
        </Route>

        <Route exact path={'/instructor/courses/:courseid/courseView'}>
          <CourseHomePage />
        </Route>

    </>
  )
}
