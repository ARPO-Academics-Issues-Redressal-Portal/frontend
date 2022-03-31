import React, { useState, useEffect } from 'react'
import GeneralHeader from '../../components/GeneralHeader'

import { PrivateQueryByCourseNameApi } from '../../apis/Apis';
import { PrivateQueryResponseApi } from '../../apis/Apis';
import { useParams } from 'react-router-dom';

import ViewPost from '../../components/ViewPost'


function InstructorPrivateQueryDasboard() {

    const [privateQueries, setPrivateQueries] = useState([])
    const [queryBody, setQueryBody] = useState("")
    const [queryTitle, setQueryTitle] = useState("")
    const [queryReplies, setQueryReplies] = useState([])

    const { course } = useParams()

    const [viewPost, setViewPost] = useState(false)
    const toggleViewPost = () => setViewPost(!viewPost)

    const fnGetPrivateQueries = async (courseName) => {
        let res = await PrivateQueryByCourseNameApi(courseName);
        let arr = res.data;
        setPrivateQueries(arr)
    }

    const fnGetQueryResponses = async (forumUuid) => {
        let res = await PrivateQueryResponseApi(forumUuid)
        setQueryReplies(res.data)
    }

    useEffect(() => {
        fnGetPrivateQueries(course)
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

            <div>
                <GeneralHeader to="/home" />
            </div>

            <div className='forum-border d-flex justify-content-between' style={{ padding: '10px' }}>
                <div>
                    <h2 className='text-center m-0 align-self-start'>Queries Dashboard</h2>
                </div>
                <div>
                    <button type="button" className="btn btn-success" style={{ marginRight: '10px' }}>Resolve selected </button>
                    <button type="button" className="btn btn-danger">Reject selected </button>
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

            <div className='d-flex justify-content-between' style={{ padding: '10px' }}>
                <div style={{ marginRight: '10px' }}>
                    <button type="button" className="btn btn-secondary">Select All</button>
                </div>
                {/* <div>
                    <button type="button" className="btn btn-info">Add New Post </button>
                </div> */}
            </div>
        </>

    )
}

export default InstructorPrivateQueryDasboard