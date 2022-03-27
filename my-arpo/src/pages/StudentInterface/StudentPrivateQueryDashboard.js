import React, { useState, useEffect } from 'react'
import DashboardForumQuery from '../../components/DashboardForumQuery'
import GeneralHeader from '../../components/GeneralHeader'
import GenQuery from '../../assets/ARPO-logos/general_query.png'


import { PrivateQueryByCourseAndProfileIdApi } from '../../apis/Apis';
import { PrivateQueryResponseApi } from '../../apis/Apis';
import { useParams } from 'react-router-dom';

import ViewPost from '../../components/ViewPost'
import AddPost from '../../components/AddPost';

function StudentPrivateQueryDasboard() {
    
    const [privateQueries, setPrivateQueries] = useState([])
    const [queryBody, setQueryBody] = useState("")
    const [queryTitle, setQueryTitle] = useState("")
    const [queryReplies, setQueryReplies] = useState([])

    const {course} = useParams()
    const profile_id = sessionStorage.getItem("profileId")
    
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

    const [viewPost, setViewPost] = useState(false)
    const toggleViewPost = () => setViewPost(!viewPost)

    const [addPost, setaddPost] = useState(false)
    const toggleAddPost = ()=> setaddPost(!addPost)
    const [subject, setsubject] = useState("")
    const [postBody, setpostBody] = useState("")

    useEffect(() => {
        fnGetPrivateQueries(course,profile_id)
    }, [])

    

    const fnPostQuery = async ()=>{

        //let res = await 
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
            />

            <AddPost 
                addPost={addPost}
                setaddPost={setaddPost}
                toggleAddPost={toggleAddPost}
                heading={"Add Forum"}
                setsubject={setsubject}
                setpostBody={setpostBody}
                subject={subject}
                postBody={postBody}
            />

            <div>
                <GeneralHeader to="/home" />
            </div>

            <div className='forum-border d-flex justify-content-between' style={{ padding: '10px' }}>
                <div>
                    <h2 className='text-center m-0 align-self-start'>Queries Dashboard</h2>
                </div>
                <div>
                    <button type="button" className="btn btn-success" style={{ marginRight: '10px' }}>Add Query </button>
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