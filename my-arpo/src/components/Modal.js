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

export default function App(props) {
  const { basicModal, setBasicModal, toggleShow, 
          modalBody, modalTitle ,
          toggleEditPost } = props

  const { role } = useParams()

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
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              {
                (role === "instructor" || role === "ta") && (
                  <>
                    <MDBBtn
                      onClick={()=>{
                        toggleShow()
                        toggleEditPost()
                      }}
                    >Edit</MDBBtn>
                    <MDBBtn color='danger'>Delete</MDBBtn>
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