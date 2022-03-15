import React from 'react'
import SubjectDescription from '../components/SubjectDescription'
import GeneralHeader from '../components/GeneralHeader'
import GenQuery from '../assets/ARPO-logos/general_query.png'

function AddNotification() {
    return (

        <>
            <div>
                <GeneralHeader />
            </div>
            <div className='d-flex justify-content-center'>
                <img src={GenQuery} width={75} height={75} />
                <p className='m-0 pt-4'>Post Notification</p>
            </div>

            <div className='query-border'>
                < SubjectDescription />

                {/* add button */}
                <button type="button" class="btn btn-primary">Post</button>
            </div>
            </>

    )
}

export default AddNotification