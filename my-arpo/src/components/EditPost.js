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
        heading,subject,editBody,setsubject,setpostBody,fnUpdatePost
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
              <MDBBtn color='secondary' onClick={toggleEditPost}>
                Close
              </MDBBtn>
              <MDBBtn onClick={() => {
                toggleEditPost()
                fnUpdatePost()
              }}>Update</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}