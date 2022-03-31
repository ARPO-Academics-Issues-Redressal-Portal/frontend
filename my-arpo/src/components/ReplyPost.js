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
  heading,
  replyBody,
  setreplyBody,fnAddReply} = props
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
              <button className='btn btn-secondary' onClick={toggleReplyPost}>
                Close
              </button>
              <button className='btn btn-primary' onClick={() => {
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