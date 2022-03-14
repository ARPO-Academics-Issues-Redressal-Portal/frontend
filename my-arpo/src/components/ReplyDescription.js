import React from 'react'

function ReplyDescription() {
    return (
        <>
            {/* subject and description */}
            
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="write the description here"></textarea>
            </div>
        
        </>
    )
}

export default ReplyDescription
