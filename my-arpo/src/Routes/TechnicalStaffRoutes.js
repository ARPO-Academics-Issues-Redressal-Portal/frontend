import React from 'react'
import {Route} from 'react-router-dom'
import Adminpage from '../pages/Technicalstaff/Adminpage'
import Profile from '../pages/Technicalstaff/Profile'
import ManagePage from '../pages/Technicalstaff/ManagePage'
import QueryDashboard from '../pages/Technicalstaff/QueryDashboard'
import AddNotification from '../pages/Technicalstaff/AddNotification'
import HelpDesk from '../components/HelpDesk';

export default function () {
  return (
    <>
        {/* <Route exact path={'/technical-staff'}>
          <Adminpage />
        </Route>

        <Route exact path={'/technical-staff/profile'}>
          <Profile />
        </Route>

        <Route exact path={'/technical-staff/help'}>
          <HelpDesk />
        </Route>

        <Route exact path={'/technical-staff/manage'}>
          <ManagePage />
        </Route>

        <Route exact path={'/technical-staff/manage/query'}>
          <QueryDashboard />
        </Route>

        <Route exact path={'/technical-staff/manage/postNotifications'}>
          <AddNotification />
        </Route>

        <Route exact path={'/technical-staff/manage/viewProfile'}>
          <Profile />
        </Route> */}
    </>
  )
}
