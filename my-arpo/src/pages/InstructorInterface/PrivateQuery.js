import React from 'react'
import SubjectDescription from '../../components/SubjectDescription'
import GeneralHeader from '../../components/GeneralHeader'
import GenQuery from '../../assets/ARPO-logos/general_query.png'

function PrivateQuery() {
    return (

        <>
            <div>
                <GeneralHeader to='/instructor'/>
            </div>
            <div>Private Query Addition</div>
            <div className='d-flex justify-content-center'>
                <img src={GenQuery} width={75} height={75} />
                <p className='m-0 pt-4'>Forum</p>
            </div>

            <div className='query-border'>
                {/* Anonymous toggle */}
                <div className="form-check form-switch d-flex justify-content-end" textAlign='right'>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault">Anonymous</label>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">To</label>
                    <input className="form-control" id="exampleFormControlInput1" placeholder="write the recipient" />
                </div>
                < SubjectDescription />

                {/* add button */}
                <button type="button" class="btn btn-primary">Add</button>
            </div>
        </>

    )
}

export default PrivateQuery