import React from 'react'
import DashboardForumQuery from '../../components/DashboardForumQuery'
import GeneralHeader from '../../components/GeneralHeader'

function InstructorForumDasboard() {
    return (
        <>
            
            <div>
                <GeneralHeader to="/instructor"/>
            </div>
            <div>InstructorForumDasboard</div>
            <div className='query-border'>
                
                {/* add button */}
                
                    <button type="button" class="btn btn-primary justify-content-end mr-3">Resolve selected </button> &nbsp;
                    {/* add button */}
                    <button type="button" class="btn btn-primary justify-content-end">Reject selected </button>

                <DashboardForumQuery />
                <button type="button" class="btn btn-primary">Select All</button>
                &nbsp;
                <button type="button" class="btn btn-primary">Add New Post</button>
            </div>
        </>

    )
}

export default InstructorForumDasboard