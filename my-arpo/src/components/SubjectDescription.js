import React from 'react'

function SubjectDescription() {
    return (
        <>
            {/* subject and description */}
            
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Subject</label>
                <input className="form-control" id="exampleFormControlInput1" placeholder="write the subject here" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="write the description here"></textarea>
            </div>
        
        </>
    )
}

export default SubjectDescription
