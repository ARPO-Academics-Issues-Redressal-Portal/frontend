import React from 'react'

function ForumViewDescription() {
    return (
        <>
            {/* subject and description */}
            <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Subject</label>
                <div className="form-control" id="exampleFormControlInput1" placeholder="read the subject here" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <div className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="read the description here"></div>
            </div>

        </>
    )
}

export default ForumViewDescription
