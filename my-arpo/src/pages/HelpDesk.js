import React from 'react'

function HelpDesk() {
  return (
    <><div>
        <h1>Help Desk</h1></div><div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Subject</label>
          <input className="form-control" id="exampleFormControlInput1" placeholder="write the subject here" />
      </div>
      <div className="mb-3">
                {/* <label for="exampleFormControlTextarea1" class="form-label">Description</label> */}
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Subject matter of the forum"></textarea>
            </div>
            <button type="button" class="btn btn-primary">Post</button></>

  )
}

export default HelpDesk