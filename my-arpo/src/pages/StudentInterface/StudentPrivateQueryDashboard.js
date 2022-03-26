import React from 'react'
import DashboardForumQuery from '../../components/DashboardForumQuery'
import GeneralHeader from '../../components/GeneralHeader'
import GenQuery from '../../assets/ARPO-logos/general_query.png'

function StudentPrivateQueryDasboard() {
    
    return (
        <>
            <div>
                <GeneralHeader to="/home" />
            </div>

            <div className='forum-border d-flex justify-content-between' style={{ padding: '10px' }}>
                <div>
                    <h2 className='text-center m-0 align-self-start'>Queries Dashboard</h2>
                </div>
                
                <div>
                    <button type="button" className="btn btn-success" style={{ marginRight: '10px' }}>Add Query </button>
                </div>
            </div>
        </>

    )
}

export default StudentPrivateQueryDasboard