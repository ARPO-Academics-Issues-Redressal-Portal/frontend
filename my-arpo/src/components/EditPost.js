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

export default function EditPost(props) {
  const { editPost, seteditPost, toggleEditPost,
    heading, subject, editBody, setsubject, setpostBody, fnUpdatePost
  } = props

  return (
    <>
      <MDBModal show={editPost} setShow={seteditPost} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{heading}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleEditPost}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

              <div>
                <MDBInput label='Subject' id='typeText' value={subject} type='text' onChange={(e) => {
                  setsubject(e.target.value)
                }} />
                <MDBTextArea label='Message' id='textAreaExample' value={editBody} rows={4} onChange={(e) => {
                  setpostBody(e.target.value)
                }} />
              </div>


            </MDBModalBody>

            <MDBModalFooter>
              <button className='btn btn-secondary' onClick={toggleEditPost}>
                Close
              </button>
              <button className='btn btn-primary'
                onClick={() => {
                  if(subject === "" || editBody === ""){
                    alert("Subject and Message body both should not be empty")
                    return
                  }
                  toggleEditPost()
                  fnUpdatePost()
                }}>Update</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}