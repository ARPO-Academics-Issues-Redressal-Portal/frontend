import React,{useState,useEffect} from 'react'
import ViewPost from '../components/ViewPost'
import GeneralHeader from '../components/GeneralHeader'

import { addAdminQueryResponseApi, deleteAdminQueryResponseApi, getAdminQueriesApi } from '../apis/Apis'
import { getAdminQueryResponseApi } from '../apis/Apis'
import ReplyPost from '../components/ReplyPost';

import { ProfilesApi, ResolveOtherQueriesApi, RejectOtherQueriesApi } from '../apis/Apis'
export default function AdminTSQueryDashboard() {
    const [queries, setQueries] = useState([])
    const [queryBody, setQueryBody] = useState("")
    const [queryTitle, setQueryTitle] = useState("")
    const [queryReplies, setQueryReplies] = useState([])

    const[givenProfileId, changeProfileId] = useState("");
    const[queryUuid, changeQueryUuid] = useState("")

    const [viewPost, setViewPost] = useState(false)
    const toggleViewPost = () => setViewPost(!viewPost)

    const [checkedList, changeCheckedList] = useState([]);
    const [profileList, changeProfileList] = useState([])

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

    useEffect(() => {
        fnProfileList();
    },[]);

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

    let findEmailOfSender = (profile_id) => {
        for(let i = 0;i<profileList.length;i++){
            if(profileList[i].profile_id === profile_id){
                return profileList[i].email_id;
            }
        }    
    }

    let setCheckedList = (isChecked, queryUuid) => {
        if(isChecked){
            checkedList.push(queryUuid);
            changeCheckedList(checkedList);
            console.log(checkedList)
        }
        else {
            let index = checkedList.indexOf(queryUuid);
            checkedList.splice(index,1);
            changeCheckedList(checkedList);
            console.log(checkedList)
        }
    }

    let ResolveSelected = async () => {
        let res = await ResolveOtherQueriesApi(checkedList);
        console.log(res.data);
    }

    let RejectSelected = async () => {
        let res = await RejectOtherQueriesApi(checkedList);
        console.log(res.data);
    }

    const fnGetAdminQueries = async () => {
        let res = await getAdminQueriesApi();
        let arr = res.data;
        setQueries(arr)
    }

    const fnGetAdminQueryResponses = async (queryUuid) => {
        let res = await getAdminQueryResponseApi(queryUuid)
        setQueryReplies(res.data)
    }

    const fnAddReplyToQuery = async () => {
        let queryResponse = {}
        queryResponse['query_uuid'] = queryUuid
        let email = ""
        if(findEmailOfSender(givenProfileId) === null){
            email = "user@iitk.ac.in"
        }
        queryResponse['receiver_email_id'] = findEmailOfSender(givenProfileId)
        queryResponse['responder_email_id'] = "admin@iitk.ac.in"
        queryResponse['response_text'] = replyBody
        let res = await addAdminQueryResponseApi(queryUuid,queryResponse)
        alert("Sent the reply!")
        fnGetAdminQueryResponses(queryUuid)
        setreplyBody('')
        toggleViewPost()

    }

    const fnDeleteQueryReply = async(id) => {
        let res = await deleteAdminQueryResponseApi(id)
        alert("Deleted the reply!")
        return res
    }

    useEffect(() => {
        fnGetAdminQueries()
    }, [queries])

    const [replyPost, setreplyPost] = useState(false)
    const [replyBody, setreplyBody] = useState("")
    const toggleReplyPost = () => setreplyPost(!replyPost)

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
                <div>
                    <button type="button" onClick = {ResolveSelected} className="btn btn-success" style={{ marginRight: '10px' }}>Resolve selected </button>
                    <button type="button" onClick = {RejectSelected} className="btn btn-danger">Reject selected </button>
                </div>
            </div>

            <div className='forum-border'>

                {
                    queries.map((query, index) => (
                        <div className='query-border'>
                            <div className='d-flex align-items-center' key={index}>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={(e) => { setCheckedList(e.target.checked, query.uuid) }} />
                                </div>
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
                                        changeQueryUuid(query.uuid)
                                        // console.log(query.uuid)
                                        fnGetAdminQueryResponses(query.uuid)
                                        toggleViewPost()
                                        changeProfileId(query.profile_id)

                                    }}
                                >Open</button>
                                </div>
                                <h6 style={{padding:'0px 0px 0px 25px'}}>
                                    {findEmailOfSender(query.profile_id)}
                                </h6>
                        </div>
                    ))
                }

            </div>
        </>

    )
}


