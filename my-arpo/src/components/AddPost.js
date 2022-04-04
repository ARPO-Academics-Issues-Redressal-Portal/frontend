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
    setpostBody, subject, postBody,
    postAnonumous, setpostAnonumous } = props
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
              {
                heading === "Add Forum" && (
                  <div className="form-check m-0 p-0 d-flex align-items-center">
                    <input
                      id='anonymous'
                      className="form-check-input"
                      type="checkbox"
                      value={postAnonumous}
                      style={{
                        width: '25px',
                        height: '25px',
                        marginRight: '5px'
                      }}
                      onClick={() => {
                        setpostAnonumous(!postAnonumous)
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


              <button className='btn btn-secondary' onClick={toggleAddPost}>
                Close
              </button>
              <button className='btn btn-success'
                onClick={() => {
                  if(subject==="" || postBody === ""){
                    alert("Subject and Message body both should not be empty")
                    return
                  }
                  fnAddPost()
                  toggleAddPost()
                }}>Post</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}