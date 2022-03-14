import React from 'react'
import SubjectDescription from '../components/SubjectDescription'
import GeneralHeader from '../components/GeneralHeader'
import GenQuery from '../assets/ARPO-logos/general_query.png'

function HelpDesk() {
    return (

        <>
            <div>
                <GeneralHeader />
            </div>
            <div className='d-flex justify-content-center'>
                <img src={GenQuery} width={75} height={75} />
                <p className='m-0 pt-4'>Help Desk</p>
            </div>

            <div className='query-border'>
                {/* Anonymous toggle */}
                {/* <div className="form-check form-switch d-flex justify-content-end" textAlign='right'>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault">Anonymous</label>
                </div> */}
                < SubjectDescription />

                {/* add button */}
                <button type="button" class="btn btn-primary">Post</button>
            </div>
            <div>Phone Numbers During Office Hours (1000 Hrs. To 1800 Hrs.): 4002, 4015, 4023</div>
        </>

    )
}

export default HelpDesk