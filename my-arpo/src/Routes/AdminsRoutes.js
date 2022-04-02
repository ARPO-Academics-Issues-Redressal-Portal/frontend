import React from 'react'
import {Route} from 'react-router-dom'

import AdminTSQueryDashboard from '../pages/AdminTSQueryDashboard'
import AdminTSNotifDashboard from '../pages/AdminTSNotifDashboard'
import AddProfile from '../pages/AdminInterface/AddProfile'

export default function () {
  return (
    <>
        <Route exact path={'/admins/manageQueries'}>
          <AdminTSQueryDashboard />
        </Route>

        <Route exact path={'/admins/notifications'}>
          <AdminTSNotifDashboard />
        </Route>
        
        <Route exact path={'/admins/addProfile'}>
          <AddProfile />
        </Route>
    </>
  )
}
