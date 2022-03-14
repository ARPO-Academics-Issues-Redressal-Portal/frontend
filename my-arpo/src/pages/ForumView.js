import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SubjectDescription from '../components/ForumViewDescription'
import GeneralHeader from '../components/GeneralHeader'
import GenQuery from '../assets/ARPO-logos/general_query.png'
import ReplyDescription from '../components/ReplyDescription';

function ForumView() {
  return (
    <>
      <div >
        <div>
          <GeneralHeader />
        </div>

        <div className='d-flex justify-content-center'>
          <img src={GenQuery} width={75} height={75} />
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
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <Popup trigger={<button type="button" class="btn btn-primary" wide='very'> Reply </button>}
            position="right center" >
            {/* <div className='popup-size'> */}
            <ReplyDescription/> 
            <button type="button" class="btn btn-primary mb-1">Post with Identity</button>
            <button type="button" class="btn btn-primary">Post Anonymously</button>
            {/* </div> */}
          </Popup> 

        </div>

      </div>
    </>
  )
}

export default ForumView