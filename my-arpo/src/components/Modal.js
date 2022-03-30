import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';

export default function Modal(props) {
  const { basicModal, setBasicModal, toggleShow,
    modalBody, modalTitle,
    toggleEditPost,deletePost,postedBy } = props

  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{modalTitle}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>{modalBody}</MDBModalBody>

            <MDBModalFooter>
              <button className='btn btn-secondary' onClick={toggleShow}>
                Close
              </button>
              {
                (postedBy === Number(sessionStorage.getItem('profileId'))) && (
                  <>
                    <button
                      className='btn btn-primary'
                      onClick={() => {
                        toggleShow()
                        toggleEditPost()
                      }}
                    >Edit</button>
                    <button className='btn btn-danger'
                      onClick={() => {
                        deletePost()
                        toggleShow()
                      }}
                    >Delete</button>
                  </>
                )
              }
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}