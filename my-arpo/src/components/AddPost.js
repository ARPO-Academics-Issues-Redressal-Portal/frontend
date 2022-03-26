import React,{useState} from 'react'
import { MDBBtn,
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
    const {addPost,setaddPost,toggleAddPost,heading}=props
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
                <MDBInput label='Subject' id='typeText' type='text' />
                <MDBTextArea label='Message' id='textAreaExample' rows={4} />                  
              </div>


          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleAddPost}>
              Close
            </MDBBtn>
            <MDBBtn>Edit</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </>
  )
}