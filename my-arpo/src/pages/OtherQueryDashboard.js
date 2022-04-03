import React,{useState,useEffect} from 'react'
import ViewPost from '../components/ViewPost'
import GeneralHeader from '../components/GeneralHeader'

import { getAdminQueriesApi } from '../apis/Apis'
import { getAdminQueryResponseApi } from '../apis/Apis'

import { ProfilesApi, ResolveOtherQueriesApi, RejectOtherQueriesApi } from '../apis/Apis'

export default function AdminTSQueryDashboard() {
    const [queries, setQueries] = useState([])
    const [queryBody, setQueryBody] = useState("")
    const [queryTitle, setQueryTitle] = useState("")
    const [queryReplies, setQueryReplies] = useState([])

    const [viewPost, setViewPost] = useState(false)
    const toggleViewPost = () => setViewPost(!viewPost)

    const profileId = sessionStorage.getItem("profileId")

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

    const fnGetAdminQueries = async () => {
        let res = await getAdminQueriesApi();
        let arr = Array();
        console.log(res.data);
        res.data.forEach(e => {
            if(e.profile_id == profileId){
                arr.push(e);
            }
        });
        console.log(arr);
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
            </div>

            <div className='forum-border'>

                {
                    queries.map((query, index) => (
                        <div className='query-border'>
                            <div className='d-flex align-items-center' key={index}>
                                <h4 className='m-0' style={{ padding: '0px 20px 0px 0px' }}>{query.title}</h4>

                                <h5 style={{ padding: '8px 20px 0px 0px' }}>
                                    {displayStatus(query.status)}
                                </h5>
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
                        </div>
                    ))
                }

            </div>
        </>

    )
}


