import React from 'react'
import GeneralHeader from '../components/GeneralHeader'

export default function ViewForum(props) {
    const { subject, desc } = props
    return (
        <div>
            <GeneralHeader to="/home" />

            <div className='forum-border'>
                <div >{subject}</div>
                <div>{desc}</div>
            </div>

            <div className='d-flex justify-content-between' style={{ padding: '10px' }}>
                <div style={{ marginRight: '10px' }}>
                    <button type="button" className="btn btn-secondary">Select All</button>
                </div>
                <div>
                    <button type="button" className="btn btn-info">Add New Post </button>
                </div>
            </div>

            <div>

            </div>

        </div>
    )
}
