import React from 'react'
import SubjectDescription from '../components/ForumViewDescription'
import GeneralHeader from '../components/GeneralHeader'
import GenQuery from '../assets/ARPO-logos/general_query.png'


function ForumView() {
  return (
    <>
      <div >
        <div>
          <GeneralHeader />
        </div>

        <div className='d-flex justify-content-center'>
          <img  src = {GenQuery} width={75} height={75} />
          <p className='m-0 pt-4'>Forum</p>
        </div>

        {/* Mark it resolved/unresolved */}
        <div className='query-border'>
          
          < SubjectDescription />
          <div className="form-check form-switch d-flex justify-content-end" textAlign='right'>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" for="flexSwitchCheckDefault"><p class="text-left">Resolve</p></label>
          </div>
          {/* add button */}
          <button type="button" class="btn btn-primary">Edit</button>
          <br></br>
          <button type="button" class="btn btn-primary">Reply</button> 
          
        </div>       

      </div>
    </>
  )
}

export default ForumView