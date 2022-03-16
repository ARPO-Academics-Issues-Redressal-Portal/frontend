import React from 'react'
import DashboardNotifSuperset from '../../components/DashboardNotifSuperset'
import GeneralHeader from '../../components/GeneralHeader'

function NotifDashboard() {
    return (
        <>
            <div>
                <GeneralHeader to='/instructor'/>
            </div>

            <div>Notification Dashboard</div>
            <div className='query-border'>
                <DashboardNotifSuperset />
            </div>
        </>

    )
}

export default NotifDashboard