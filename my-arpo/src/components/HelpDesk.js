import {React, useState} from 'react'
import SubjectDescription from './SubjectDescription'
import GeneralHeader from './GeneralHeader'
import GenQuery from '../assets/ARPO-logos/general_query.png'
import { addAdminQueryApi } from '../apis/Apis'

function HelpDesk() {
    const [query, changeQuery] = useState({
        "title" : "",
        "description":"",
        "status":"W", 
        "receiver_email_id":"ts@iitk.ac.in"
    })

    let addQuery = async () => {
        let res = await addAdminQueryApi(query);
        console.log(res);
    }
    return (

        <>
            <div>
                <GeneralHeader to={"/home"}/>
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
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Subject</label>
                    <input className="form-control" id="exampleFormControlInput1" onChange ={(e) => {changeQuery({...query, "title":e.target.value})}} placeholder="write the subject here" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange ={(e) => {changeQuery({...query, "description":e.target.value})}} placeholder="write the description here"></textarea>
                </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => {changeQuery({...query, "receiver_email_id":"admin@iitk.ac.in"})}}></input>
                            <label className="form-check-label" for="flexRadioDefault1">
                                To Admin
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => {changeQuery({...query, "receiver_email_id":"ts@iitk.ac.in"})}}></input>
                            <label className="form-check-label" for="flexRadioDefault2">
                                To Techincal Staff
                            </label>
                    </div>
                    <p>If unselected, the query will be sent to the technical staff.</p>
                <button type="button" className="btn btn-primary" onClick={() => {addQuery()}}>Post</button>
            </div>
            <div className="text-center">Phone Numbers During Office Hours (1000 Hrs. To 1800 Hrs.): 4002, 4015, 4023</div>
        </>

    )
}

export default HelpDesk