import React, { useState, useEffect } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { deleteForumResponseApi } from '../apis/Apis';

export default function ViewPost(props) {
    const { viewPost, setviewPost, toggleViewPost, modalBody,
        modalTitle, forumReplies, postedBy, toggleEditPost,
        deletePost,toggleReplyPost,} = props

    const deleteReply = async (id)=>{
        let res = await deleteForumResponseApi(id)
        toggleViewPost()
    }

    return (
        <>
            <MDBModal show={viewPost} setShow={setviewPost} tabIndex='-1'>
                <MDBModalDialog scrollable size="lg">
                    <MDBModalContent>
                        <MDBModalHeader>

                            <div style={{ flex: '1' }}>
                                <h4 className='text-center'>{modalTitle}</h4>
                                <div className='text-center'>{modalBody}</div>
                            </div>

                            <MDBBtn
                                className='btn-close'
                                color='none'
                                onClick={toggleViewPost}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {
                                forumReplies.map((reply, id) => (
                                    <div className='reply-border' key={id}>

                                        <div className='d-flex justify-content-between'>
                                            <div>{reply.date_time} </div>
                                            {
                                                !reply.post_anonymous && (
                                                    <div>
                                                        {reply.responder_email_id}
                                                    </div>
                                                )
                                            }
                                        </div>

                                        <div>{reply.response_text}</div>
                                        <div className='text-end'>
                                            <button 
                                                className='btn btn-danger'
                                                onClick={()=>{
                                                    deleteReply(reply.uuid)
                                                }}
                                            >delete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </MDBModalBody>
                        <MDBModalFooter>
                            <button className='btn btn-secondary' onClick={toggleViewPost}>
                                Close
                            </button>
                            {
                                postedBy === Number(sessionStorage.getItem('profileId')) && (
                                    <>
                                        <button className='btn btn-success'
                                            onClick={() => {
                                                toggleViewPost()
                                                toggleEditPost()
                                            }}>Edit</button>
                                        <button className='btn btn-danger'
                                            onClick={() => {
                                                deletePost()
                                                toggleViewPost()
                                            }}>Delete</button>
                                    </>
                                )
                            }
<<<<<<< HEAD
                            <button className='btn btn-warning'>
                                Reply
                            </button>
=======
                            <button 
                                className='btn btn-warning' 
                                onClick={()=>{
                                    toggleReplyPost()
                                    toggleViewPost()
                                }}
                            >Reply</button>
>>>>>>> ea26cd88013a5e1f740b811e102973f272814837

                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}