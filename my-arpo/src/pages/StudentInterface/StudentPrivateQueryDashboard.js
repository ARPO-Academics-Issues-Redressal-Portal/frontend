import React, { useState, useEffect } from 'react'
import GeneralHeader from '../../components/GeneralHeader'


import { AddPrivateQueryApi, deletePrivateQueryApi, PrivateQueryByCourseAndProfileIdApi, UpdatePrivateQueryApi } from '../../apis/Apis';
import { PrivateQueryResponseApi } from '../../apis/Apis';
import { useParams } from 'react-router-dom';

import ViewPost from '../../components/ViewPost'
import AddPost from '../../components/AddPost';
import EditPost from '../../components/EditPost';

function StudentPrivateQueryDasboard() {
    
    const [privateQueries, setPrivateQueries] = useState([])
    const [queryBody, setQueryBody] = useState("")
    const [queryTitle, setQueryTitle] = useState("")
    const [queryReplies, setQueryReplies] = useState([])
    const [status, setStatus] = useState("")
    const [postedBy, setpostedBy] = useState("")
    const [query_uuid, setQueryUuid] = useState("")
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
        console.log("viewPost res")
        console.log(res)
        setQueryReplies(res.data)
    }

    const fnAddPrivateQuery = async () => {
        let query = {};
        
        query['title'] = subject;
        query['description'] = postBody;
        query['receiver_email_id'] = "test_email";
        query['category'] = "test_category";
        query['course'] = course;
        query['status'] = "W"
        
        console.log("addPost res")
        let res = await AddPrivateQueryApi(query);
        fnGetPrivateQueries();
        console.log(res)
    }

    const fnUpdatePrivateQuery = async () => {
        let query = {};
        query['title'] = queryTitle;
        query['description'] = queryBody;
        query['receiver_email_id'] = "test_email";
        query['category'] = "test_category";
        query['course'] = course
        query['status'] = status

        console.log(query)

        let res = await UpdatePrivateQueryApi(query_uuid,query);
        fnGetPrivateQueries();
        console.log("updatePost res")
        console.log(res)
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
            />

            <AddPost 
                addPost={addPost}
                setaddPost={setaddPost}
                toggleAddPost={toggleAddPost}
                heading={"Add Post"}
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
                heading="Edit Announcement"
                subject={queryTitle}
                editBody={queryBody}
                setsubject={setQueryTitle}
                setpostBody={setQueryBody}
                fnUpdatePost={fnUpdatePrivateQuery}
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
                        setQueryTitle('')
                        setQueryBody('')
                        toggleAddPost()
                    }}>Add Query </button>
                </div>
            </div>
            <div className='forum-border'>

                {
                    privateQueries.map((query, index) => (
                        <div className='query-border d-flex align-items-center' key={index}>
                            <h4 className='m-0'>{query.title}</h4>
                            <button
                                className='btn btn-primary'
                                style={{ marginLeft: 'auto' }}
                                onClick={() => {                                
                                    setQueryBody(query.description)
                                    setQueryTitle(query.title)
                                    fnGetQueryResponses(query.uuid)
                                    setQueryUuid(query.uuid)
                                    setpostedBy(query.profile_id)
                                    settimeOfPost(query.date_time)
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