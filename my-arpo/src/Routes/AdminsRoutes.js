import React from 'react'
import {Route} from 'react-router-dom'
import Adminpage from '../pages/AdminInterface/Adminpage'
import Profile from '../pages/AdminInterface/Profile'
import ManagePage from '../pages/AdminInterface/ManagePage'
import QueryDashboard from '../pages/AdminInterface/QueryDashboard'
import AddNotification from '../pages/AdminInterface/AddNotification'
import HelpDesk from '../components/HelpDesk';

export default function () {
  return (
    <>
        {/* <Route exact path={'/admins'}>
          <Adminpage />
        </Route>

        <Route exact path={'/admins/profile'}>
          <Profile />
        </Route>

        <Route exact path={'/admins/help'}>
          <HelpDesk />
        </Route>

        <Route exact path={'/admins/manage'}>
          <ManagePage />
        </Route>

        <Route exact path={'/admins/manage/query'}>
          <QueryDashboard />
        </Route>

        <Route exact path={'/admins/manage/postNotifications'}>
          <AddNotification />
        </Route>

        <Route exact path={'/admins/manage/viewProfile'}>
          <Profile />
        </Route> */}
    </>
  )
}
