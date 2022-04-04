import React, { useState } from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
  MDBInput
} from 'mdb-react-ui-kit';

export default function ReplyPost(props) {
  const { replyPost,
    setreplyPost,
    toggleReplyPost,
    heading, replyBody,
    setreplyBody, fnAddReply, replyAnnonymous, setreplyAnnonymous } = props
  return (
    <>
      <MDBModal show={replyPost} setShow={setreplyPost} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{heading}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleReplyPost}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

              <div>
                <MDBTextArea label='Message' id='textAreaExample' value={replyBody} rows={4} onChange={(e) => {
                  setreplyBody(e.target.value)
                }} />
              </div>

            </MDBModalBody>

            <MDBModalFooter>

              {
                heading === "Reply Post" && (<div className="form-check m-0 p-0 d-flex align-items-center">
                  <input
                    id='anonymous'
                    className="form-check-input"
                    type="checkbox"
                    value={replyAnnonymous}
                    style={{
                      width: '25px',
                      height: '25px',
                      marginRight: '5px'
                    }}
                    onClick={() => {
                      setreplyAnnonymous(!replyAnnonymous)
                    }}
                  />
                  <button className='btn btn-info'>
                    <label className="form-check-label mr-2" htmlFor="anonymous">
                      Anonymous
                    </label>
                  </button>
                </div>
                )
              }

              <button className='btn btn-secondary' onClick={toggleReplyPost}>
                Close
              </button>
              <button className='btn btn-primary' onClick={() => {
                if(replyBody === ""){
                  alert("Message should not be empty")
                  return
                }
                fnAddReply()
                toggleReplyPost()
              }}>Post Reply</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}