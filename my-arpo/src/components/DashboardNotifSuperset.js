import React from 'react'
import NotificationDashboard from './NotificationDashboard'


function DashboardNotifSuperset(props) {
    return (
        <>
            {
                props.data.map((ele)=>(
                    <NotificationDashboard data={ele}/>
                ))
            }
            {/* <NotificationDashboard />
            <NotificationDashboard />
            <NotificationDashboard />
            <NotificationDashboard /> */}
            {/* add button */}
            
        </>
    )
}

export default DashboardNotifSuperset