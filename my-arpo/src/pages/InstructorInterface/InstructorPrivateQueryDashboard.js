import React, { useState, useEffect } from 'react'
import GeneralHeader from '../../components/GeneralHeader'

import { CourseAnnouncementDeleteApi, PrivateQueryByCourseNameApi } from '../../apis/Apis';
import { ProfilesApi, PrivateQueryResponseApi } from '../../apis/Apis';
import { useParams } from 'react-router-dom';

import { ResolveQueriesApi, RejectQueriesApi } from '../../apis/Apis';


import ViewPost from '../../components/ViewPost'


function InstructorPrivateQueryDasboard() {

    const [privateQueries, setPrivateQueries] = useState([])
    const [queryBody, setQueryBody] = useState("")
    const [queryTitle, setQueryTitle] = useState("")
    const [queryReplies, setQueryReplies] = useState([])
    const [queryEmail, setqueryEmail] = useState("")
    const [timeOfPost, settimeOfPost] = useState("")

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
        let res = await ResolveQueriesApi(checkedList);
        console.log(res.data);
    }

    let RejectSelected = async () => {
        let res = await RejectQueriesApi(checkedList);
        console.log(res.data);
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
            />

            <div>
                <GeneralHeader to="/home" />
            </div>

            <div className='forum-border d-flex justify-content-between' style={{ padding: '10px' }}>
                <div>
                    <h2 className='text-center m-0 align-self-start'>Queries Dashboard</h2>
                </div>
                <div>
                    <button type="button" onClick = {ResolveSelected} className="btn btn-success" style={{ marginRight: '10px' }}>Resolve selected </button>
                    <button type="button" onClick = {RejectSelected} className="btn btn-danger">Reject selected </button>
                </div>
            </div>

            <div className='forum-border'>

                {
                    privateQueries.map((query, index) => (
                        <div className='query-border'> 
                        <div className='d-flex align-items-center' key={index}>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="flexCheckDefault" onChange={(e) => {setCheckedList(e.target.checked, query.uuid)}}/>
                                </div>
                                <h4 className='m-0' style={{padding:'0px 20px 0px 0px'}}>{query.title}</h4>

                                <h5 style={{padding:'8px 20px 0px 0px'}}>
                                    {displayStatus(query.status)}
                                </h5>
                                

                                
                            <button
                                className='btn btn-primary'
                                style={{ marginLeft: 'auto' }}
                                onClick={() => {
                                    setQueryBody(query.description)
                                    setQueryTitle(query.title)
                                    fnGetQueryResponses(query.uuid)
                                    setqueryEmail()
                                    settimeOfPost(query.date_time)
                                    toggleViewPost()
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

export default InstructorPrivateQueryDasboard