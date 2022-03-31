import React,{useState,useEffect} from 'react'
import ViewPost from '../components/ViewPost'
import GeneralHeader from '../components/GeneralHeader'

import { getAdminQueriesApi } from '../apis/Apis'
import { getAdminQueryResponseApi } from '../apis/Apis'


export default function AdminTSQueryDashboard() {
    const [queries, setQueries] = useState([])
    const [queryBody, setQueryBody] = useState("")
    const [queryTitle, setQueryTitle] = useState("")
    const [queryReplies, setQueryReplies] = useState([])

    const [viewPost, setViewPost] = useState(false)
    const toggleViewPost = () => setViewPost(!viewPost)

    const fnGetAdminQueries = async () => {
        let res = await getAdminQueriesApi();
        let arr = res.data;
        setQueries(arr)
    }

    const fnGetAdminQueryResponses = async (queryUuid) => {
        let res = await getAdminQueryResponseApi(queryUuid)
        setQueryReplies(res.data)
    }

    useEffect(() => {
        fnGetAdminQueries()
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
                    <h2 className='text-center m-0 align-self-start'>Queries Dasboard</h2>
                </div>
                <div>
                    <button type="button" className="btn btn-success" style={{ marginRight: '10px' }}>Resolve selected </button>
                    <button type="button" className="btn btn-danger">Reject selected </button>
                </div>
            </div>

            <div className='forum-border'>

                {
                    queries.map((query, index) => (
                        <div className='query-border d-flex align-items-center' key={index}>
                            <h4 className='m-0'>{query.title}</h4>
                            <button
                                className='btn btn-primary'
                                style={{ marginLeft: 'auto' }}
                                onClick={() => {
                                    setQueryBody(query.description)
                                    setQueryTitle(query.title)
                                    // console.log(query.uuid)
                                    fnGetAdminQueryResponses(query.uuid)
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


