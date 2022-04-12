import React,{useState,useEffect} from 'react'
import ViewPost from '../components/ViewPost'
import GeneralHeader from '../components/GeneralHeader'

import { getAdminQueriesApi } from '../apis/Apis'
import { getAdminQueryResponseApi } from '../apis/Apis'
import { addAdminQueryResponseApi, deleteAdminQueryResponseApi } from '../apis/Apis'

import ReplyPost from '../components/ReplyPost';

import { ProfilesApi } from '../apis/Apis'


export default function AdminTSQueryDashboard() {
    const [queries, setQueries] = useState([])
    const [queryBody, setQueryBody] = useState("")
    const [queryTitle, setQueryTitle] = useState("")
    const [queryReplies, setQueryReplies] = useState([])

    const [viewPost, setViewPost] = useState(false)
    const toggleViewPost = () => setViewPost(!viewPost)

    const profileId = sessionStorage.getItem("profileId")
    const [profileList, changeProfileList] = useState([])

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
        // console.log(res.data);

        res.data.forEach(e => {
            if(e.profile_id == profileId){
                arr.push(e);
            }
        });
        // console.log(arr);
        setQueries(arr)
    }

    const fnGetAdminQueryResponses = async (queryUuid) => {
        let res = await getAdminQueryResponseApi(queryUuid)
        setQueryReplies(res.data)
    }

    useEffect(() => {
        fnGetAdminQueries()
    }, [queries])

    const [replyPost, setreplyPost] = useState(false)
    const [replyBody, setreplyBody] = useState("")
    const toggleReplyPost = () => setreplyPost(!replyPost)
    const [viewQuery, setViewQuery] = useState({})

    const fnProfileList = async () => {
        let res = await ProfilesApi();
        let arr = [];
        res.data.map((profile) => {
            let temp = {};
            temp['profile_id'] = profile.profile_id;
            temp['name'] = profile.name;
            temp['email_id'] = profile.email_id;
            arr.push(temp);
            changeProfileList(arr);
        });
    }

    let findEmailOfSender = (profile_id) => {
        for(let i = 0;i<profileList.length;i++){
            if(profileList[i].profile_id === profile_id){
                return profileList[i].email_id;
            }
        }    
    }

    useEffect(() => {
        fnProfileList();
    },[]);

    const fnAddReplyToQuery = async () => {
        let queryResponse = {}
        queryResponse['query_uuid'] = viewQuery.uuid
        queryResponse['receiver_email_id'] = viewQuery.receiver_email_id
        // console.log(viewQuery.profile_id)
        // console.log(findEmailOfSender(viewQuery.profile_id))
        queryResponse['responder_email_id'] = findEmailOfSender(viewQuery.profile_id)
        queryResponse['response_text'] = replyBody
        console.log(queryResponse)
        let res = await addAdminQueryResponseApi(viewQuery.uuid,queryResponse)
        alert("Sent the reply!")
        fnGetAdminQueryResponses(viewQuery.uuid)
        setreplyBody('')
        toggleViewPost()
    }

    const fnDeleteQueryReply = async(id) => {
        let res = await deleteAdminQueryResponseApi(id)
        alert("Deleted the reply!")
        return res
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
                toggleReplyPost={toggleReplyPost}
                deleteReply={fnDeleteQueryReply}
            />

            <ReplyPost
                replyPost={replyPost}
                setreplyPost={setreplyPost}
                toggleReplyPost={toggleReplyPost}
                heading={"Reply Technical Query"}
                replyBody={replyBody}
                setreplyBody={setreplyBody}
                fnAddReply={fnAddReplyToQuery}
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
                                        setViewQuery(query)
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


