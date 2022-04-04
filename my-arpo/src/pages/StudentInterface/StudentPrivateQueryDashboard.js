import React, { useState, useEffect } from 'react'
import GeneralHeader from '../../components/GeneralHeader'


import { AddPrivateQueryApi, deletePrivateQueryApi, PrivateQueryADDResponseApi, PrivateQueryByCourseAndProfileIdApi, PrivateQueryDeleteResponseApi, UpdatePrivateQueryApi } from '../../apis/Apis';
import { PrivateQueryResponseApi } from '../../apis/Apis';
import { useParams } from 'react-router-dom';

import ViewPost from '../../components/ViewPost'
import AddPost from '../../components/AddPost';
import EditPost from '../../components/EditPost';
import ReplyPost from '../../components/ReplyPost';

function StudentPrivateQueryDasboard() {
    
    const [privateQueries, setPrivateQueries] = useState([])
    const [queryBody, setQueryBody] = useState("")
    const [queryTitle, setQueryTitle] = useState("")
    const [queryReplies, setQueryReplies] = useState([])
    const [status, setStatus] = useState("")
    const [postedBy, setpostedBy] = useState("")
    const [query_uuid, setQueryUuid] = useState("")
    const [queryEmail, setQueryEmail] = useState("")
    const [timeOfPost, settimeOfPost] = useState("")

    const {course} = useParams()
    const profile_id = sessionStorage.getItem("profileId")

    const [editPost, seteditPost] = useState(false)
    const toggleEditPost = () => seteditPost(!editPost)

    
    const fnGetPrivateQueries = async () => {
        let res = await PrivateQueryByCourseAndProfileIdApi(course, profile_id);
        let arr = res.data;
        console.log(res)
        setPrivateQueries(arr.reverse())
    }

    const fnGetQueryResponses = async (forumUuid)=>{
        let res = await PrivateQueryResponseApi(forumUuid)
        if(res.data.error)return;
        setQueryReplies(res.data)
    }

    const fnAddPrivateQuery = async () => {
        let query = {};
        
        query['title'] = subject;
        query['description'] = postBody;
        query['receiver_email_id'] = "isaha@iitk.ac.in";
        query['category'] = "test_category";
        query['course'] = course;
        query['status'] = "W"
        
        let res = await AddPrivateQueryApi(query);
        alert(res.data.message)
        fnGetPrivateQueries();
        console.log(res)
    }

    const fnUpdatePrivateQuery = async () => {
        let query = {};
        query['title'] = queryTitle;
        query['description'] = queryBody;
        query['receiver_email_id'] = queryEmail;
        query['category'] = "test_category";
        query['course'] = course
        query['status'] = "W"

        let res = await UpdatePrivateQueryApi(query_uuid,query);
        fnGetPrivateQueries();
    }

    const fnDeletePrivateQuery = async ()=>{
        let res = await deletePrivateQueryApi(query_uuid)
        console.log(res)
        fnGetPrivateQueries()
    }

    const [viewPost, setViewPost] = useState(false)
    const toggleViewPost = () => setViewPost(!viewPost)

    const [addPost, setaddPost] = useState(false)
    const toggleAddPost = ()=> setaddPost(!addPost)
    const [subject, setsubject] = useState("")
    const [postBody, setpostBody] = useState("")

    useEffect(() => {
        fnGetPrivateQueries()
    }, [])

    let displayStatus = (status) => {
        if(status === "W"){
            return "Waiting";
        } 
        else if (status === "R"){
            return "Resolved";
        }
        else {
            return "Rejected";
        }
    }

    const [replyPost, setreplyPost] = useState(false)
    const [replyBody, setreplyBody] = useState("")
    const toggleReplyPost = () => setreplyPost(!replyPost)

    const fnAddReplyToQuery = async ()=>{
        let res = await PrivateQueryADDResponseApi(query_uuid,replyBody,course,queryEmail)
        alert(res.data.message)
        
        fnGetQueryResponses(query_uuid)
        setreplyBody('')
        toggleViewPost()
    }

    const deleteQueryReply = async (id) => {
        let res = await PrivateQueryDeleteResponseApi(id)
        alert(res.data.message)
        fnGetQueryResponses(query_uuid)
    }

    return (
        <>
            <ViewPost
                viewPost={viewPost}
                setviewPost={setViewPost}
                toggleViewPost={toggleViewPost}
                modalBody={queryBody}
                modalTitle={queryTitle}
                forumReplies={queryReplies}
                toggleEditPost={toggleEditPost}
                deletePost={fnDeletePrivateQuery}
                postedBy={postedBy}
                email={sessionStorage.getItem('email')}
                timeOfPost={timeOfPost}
                toggleReplyPost={toggleReplyPost}
                deleteReply={deleteQueryReply}
            />

            <AddPost 
                addPost={addPost}
                setaddPost={setaddPost}
                toggleAddPost={toggleAddPost}
                heading={"Add Query"}
                setsubject={setsubject}
                setpostBody={setpostBody}
                subject={subject}
                postBody={postBody}
                fnAddPost={fnAddPrivateQuery}
            />
            
            <EditPost 
                editPost={editPost}
                seteditPost={seteditPost}
                toggleEditPost={toggleEditPost}
                heading="Edit Query"
                subject={queryTitle}
                editBody={queryBody}
                setsubject={setQueryTitle}
                setpostBody={setQueryBody}
                fnUpdatePost={fnUpdatePrivateQuery}
            />

            <ReplyPost 
                replyPost={replyPost}
                setreplyPost={setreplyPost}
                toggleReplyPost={toggleReplyPost}
                heading={"Reply Query"}
                replyBody={replyBody}
                setreplyBody={setreplyBody}
                fnAddReply={fnAddReplyToQuery}
            />

            <div>
                <GeneralHeader to="/home" />
            </div>

            <div className='forum-border d-flex justify-content-between' style={{ padding: '10px' }}>
                <div>
                    <h2 className='text-center m-0 align-self-start'>Queries Dashboard</h2>
                </div>
                <div>
                    <button type="button" className="btn btn-success" style={{ marginRight: '10px' }} onClick = { () => {
                        setsubject('')
                        setpostBody('')
                        toggleAddPost()
                    }}>Add Query </button>
                </div>
            </div>
            <div className='forum-border'>

                {
                    privateQueries.map((query, index) => (
                        <div className='query-border d-flex align-items-center' key={index}>
                            <h4 className='m-0'>{query.title}</h4>
                            <div style={{ marginLeft: 'auto',marginRight:'20px' }}>
                                Status : {displayStatus(query.status)}
                            </div>
                            <button
                                className='btn btn-primary'
                                onClick={() => {                                
                                    setQueryBody(query.description)
                                    setQueryTitle(query.title)
                                    fnGetQueryResponses(query.uuid)
                                    setQueryUuid(query.uuid)
                                    setpostedBy(query.profile_id)
                                    settimeOfPost(query.date_time)
                                    setQueryEmail(query.receiver_email_id)
                                    toggleViewPost()
                                }}
                            >Open</button>
                        </div>
                    ))
                }

            </div>
        </>

    )
}

export default StudentPrivateQueryDasboard