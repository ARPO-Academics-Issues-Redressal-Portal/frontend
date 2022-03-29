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

export default function AddPost(props) {
  const { addPost, setaddPost, toggleAddPost, heading, fnAddPost, setsubject, 
    setpostBody,subject,postBody } = props
  return (
    <>
      <MDBModal show={addPost} setShow={setaddPost} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{heading}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleAddPost}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

              <div>
                <MDBInput label='Subject' id='typeText' value={subject} type='text' onChange={(e) => {
                  setsubject(e.target.value)
                }} />
                <MDBTextArea label='Message' id='textAreaExample' value={postBody} rows={4} onChange={(e) => {
                  setpostBody(e.target.value)
                }} />
              </div>


            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleAddPost}>
                Close
              </MDBBtn>
              <MDBBtn onClick={() => {
                fnAddPost()
                toggleAddPost()
              }}>Post</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}