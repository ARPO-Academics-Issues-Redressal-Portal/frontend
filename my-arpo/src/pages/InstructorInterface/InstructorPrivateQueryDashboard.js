import React from 'react'
import GeneralHeader from '../../components/GeneralHeader'

function InstructorPrivateQueryDasboard() {
    return (
        <>
            <div>
                <GeneralHeader to="/home" />
            </div>

            <div className='forum-border d-flex justify-content-between' style={{ padding: '10px' }}>
                <div>
                    <h2 className='text-center m-0 align-self-start'>Queries Dasboard</h2>
                </div>

                <div>
                    <button type="button" className="btn btn-success" style={{ marginRight: '10px' }}>Resolve selected </button>
                    <button type="button" className="btn btn-danger">Reject selected </button>
                </div>
            </div>

            <div className='d-flex justify-content-between' style={{ padding: '10px' }}>
                <div style={{ marginRight: '10px' }}>
                    <button type="button" className="btn btn-secondary">Select All</button>
                </div>
                <div>
                    <button type="button" className="btn btn-info">Add New Post </button>
                </div>
            </div>
        </>

    )
}

export default InstructorPrivateQueryDasboard