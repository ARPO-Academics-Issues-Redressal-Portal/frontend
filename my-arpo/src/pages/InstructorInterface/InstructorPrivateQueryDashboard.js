import React, { useState, useEffect } from 'react'
import GeneralHeader from '../../components/GeneralHeader'

import { CourseAnnouncementDeleteApi, PrivateQueryADDResponseApi, PrivateQueryByCourseNameApi, PrivateQueryDeleteResponseApi } from '../../apis/Apis';
import { ProfilesApi, PrivateQueryResponseApi } from '../../apis/Apis';
import { useParams } from 'react-router-dom';

import { ResolveQueriesApi, RejectQueriesApi } from '../../apis/Apis';


import ViewPost from '../../components/ViewPost'
import ReplyPost from '../../components/ReplyPost';


function InstructorPrivateQueryDasboard() {

    const [privateQueries, setPrivateQueries] = useState([])
    const [queryBody, setQueryBody] = useState("")
    const [queryTitle, setQueryTitle] = useState("")
    const [queryReplies, setQueryReplies] = useState([])
    const [queryEmail, setqueryEmail] = useState("")
    const [timeOfPost, settimeOfPost] = useState("")
    const [query_uuid, setQueryUuid] = useState("")

    const [checkedList, changeCheckedList] = useState([]);
    const [profileList, changeProfileList] = useState([])

    const { course } = useParams()

    const [viewPost, setViewPost] = useState(false)
    const toggleViewPost = () => setViewPost(!viewPost)

    const fnGetPrivateQueries = async (courseName) => {
        let res = await PrivateQueryByCourseNameApi(courseName);
        let arr = res.data;
        setPrivateQueries(arr)
    }

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

    const fnGetQueryResponses = async (forumUuid) => {
        let res = await PrivateQueryResponseApi(forumUuid)
        setQueryReplies(res.data)
    }

    useEffect(() => {
        fnGetPrivateQueries(course);
    }, [privateQueries]);

    useEffect(() => {
        fnProfileList();
    }, []);

    let displayStatus = (status) => {
        if (status === "W") {
            return "Waiting";
        }
        else if (status === "R") {
            return "Resolved";
        }
        else {
            return "Rejected";
        }
    }

    let findEmailOfSender = (profile_id) => {
        for (let i = 0; i < profileList.length; i++) {
            if (profileList[i].profile_id === profile_id) {
                return profileList[i].email_id;
            }
        }
    }

    let setCheckedList = (isChecked, queryUuid) => {
        if (isChecked) {
            checkedList.push(queryUuid);
            changeCheckedList(checkedList);
            console.log(checkedList)
        }
        else {
            let index = checkedList.indexOf(queryUuid);
            checkedList.splice(index, 1);
            changeCheckedList(checkedList);
            console.log(checkedList)
        }
    }

    let ResolveSelected = async () => {
        let res = await ResolveQueriesApi(checkedList);
        console.log(res.data);
    }

    let RejectSelected = async () => {
        let res = await RejectQueriesApi(checkedList);
        console.log(res.data);
    }

    const [replyPost, setreplyPost] = useState(false)
    const [replyBody, setreplyBody] = useState("")
    const toggleReplyPost = () => setreplyPost(!replyPost)

    const fnAddReplyToQuery = async () => {
        let res = await PrivateQueryADDResponseApi(query_uuid, replyBody, course, sessionStorage.getItem('email'))
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
                email={queryEmail}
                timeOfPost={timeOfPost}
                toggleReplyPost={toggleReplyPost}
                deleteReply={deleteQueryReply}
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
                    <button type="button" onClick={ResolveSelected} className="btn btn-success" style={{ marginRight: '10px' }}>Resolve selected </button>
                    <button type="button" onClick={RejectSelected} className="btn btn-danger">Reject selected </button>
                </div>
            </div>

            <div className='forum-border'>

                {
                    privateQueries.map((query, index) => (
                        <div className='query-border d-flex align-items-center' key={index}>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" onChange={(e) => { setCheckedList(e.target.checked, query.uuid) }} />
                            </div>
                            <h4 className='m-0'>{query.title}</h4>

                            <div style={{ marginLeft: 'auto', marginRight: '20px' }}>
                                Status : {displayStatus(query.status)}
                            </div>

                            <button
                                className='btn btn-primary'
                                onClick={() => {
                                    setQueryBody(query.description)
                                    setQueryTitle(query.title)
                                    fnGetQueryResponses(query.uuid)
                                    setqueryEmail(findEmailOfSender(query.profile_id))
                                    setQueryUuid(query.uuid)
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

export default InstructorPrivateQueryDasboard