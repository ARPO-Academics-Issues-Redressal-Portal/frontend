import React from 'react'
import {Route} from 'react-router-dom'
import Participants from '../pages/InstructorInterface/Participants'
import InstructorAddProfile from '../pages/InstructorInterface/IntructorAddProfile'

export default function () {
  return (
    <>


        <Route exact path={'/courses/instructor/:course/participantslist'}>
          <Participants />
        </Route>

        <Route exact path={'/courses/instructor/:course/addUser'}>
          <InstructorAddProfile />
        </Route>

    </>
  )
}
