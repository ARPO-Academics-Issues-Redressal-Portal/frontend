import React from 'react'
import {Route} from 'react-router-dom'

import AdminTSQueryDashboard from '../pages/AdminTSQueryDashboard'
import AdminTSNotifDashboard from '../pages/AdminTSNotifDashboard'


export default function () {
  return (
    <>
        <Route exact path={'/admins/manageQueries'}>
          <AdminTSQueryDashboard />
        </Route>

        <Route exact path={'/admins/notifications'}>
          <AdminTSNotifDashboard />
        </Route>
    </>
  )
}
