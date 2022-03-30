import React, { useState, useEffect } from 'react'
import DashboardForumQuery from '../../components/DashboardForumQuery'
import GeneralHeader from '../../components/GeneralHeader'
import GenQuery from '../../assets/ARPO-logos/general_query.png'


import { AddPrivateQueryApi, PrivateQueryByCourseAndProfileIdApi, UpdatePrivateQueryApi } from '../../apis/Apis';
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

    const {course} = useParams()
    const profile_id = sessionStorage.getItem("profileId")

    const [editPost, seteditPost] = useState(false)
    const toggleEditPost = () => seteditPost(!editPost)

    
    const fnGetPrivateQueries = async (courseName,profile_id) => {
        let res = await PrivateQueryByCourseAndProfileIdApi(courseName, profile_id);
        let arr = res.data;
        console.log(res)
        setPrivateQueries(arr)
    }

    const fnGetQueryResponses = async (forumUuid)=>{
        let res = await PrivateQueryResponseApi(forumUuid)
        console.log("viewPost res")
        console.log(res)
        setQueryReplies(res.data)
    }

    const fnAddPrivateQuery = async () => {
        let query = {};
        
        query['title'] = toString(subject);
        query['description'] = toString(postBody);
        query['receiver_email_id'] = "test_email";
        query['category'] = "test_category";
        query['course'] = toString(course)
        query['status'] = "W"
        
        console.log("addPost res")
        let res = await AddPrivateQueryApi(query);
        console.log(res)
    }

    const fnUpdatePrivateQuery = async () => {
        let query = {};
        query['title'] = subject;
        query['description'] = postBody;
        query['receiver_email_id'] = "test_email";
        query['category'] = "test_category";
        query['course'] = course
        query['status'] = status

        let res = await UpdatePrivateQueryApi(query);
        fnGetPrivateQueries();
        console.log("updatePost res")
        console.log(res)
    }

    const [viewPost, setViewPost] = useState(false)
    const toggleViewPost = () => setViewPost(!viewPost)

    const [addPost, setaddPost] = useState(false)
    const toggleAddPost = ()=> setaddPost(!addPost)
    const [subject, setsubject] = useState("")
    const [postBody, setpostBody] = useState("")

    useEffect(() => {
        fnGetPrivateQueries(course,profile_id)
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