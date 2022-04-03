import React from 'react'
import {Route} from 'react-router-dom'
import AddProfile from '../pages/AdminInterface/AddProfile'

export default function () {
  return (
    <>        
        <Route exact path={'/admins/addProfile'}>
          <AddProfile />
        </Route>
    </>
  )
}
