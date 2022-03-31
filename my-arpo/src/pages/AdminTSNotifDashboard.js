import React, { useState, useEffect } from 'react'
import GeneralHeader from '../components/GeneralHeader'

// import { PrivateQueryByCourseNameApi } from '../../apis/Apis';
// import { PrivateQueryResponseApi } from '../../apis/Apis';
// import { useParams } from 'react-router-dom';

import ViewPost from '../components/ViewPost'
import { getAdminNotifsApi } from '../apis/Apis'


export default function AdminTSNotifDashboard() {

    const [notifs, setNotifs] = useState([])
    const [notifBody, setNotifBody] = useState("")
    const [notifTitle, setNotifTitle] = useState("")

    const [viewPost, setViewPost] = useState(false)
    const toggleViewPost = () => setViewPost(!viewPost)

    const fnGetAdminNotifs = async () => {
        let res = await getAdminNotifsApi();
        let arr = res.data;
        setNotifs(arr)
    }

    useEffect(() => {
        fnGetAdminNotifs()
    }, [])


    return (
        <>
            <ViewPost
                viewPost={viewPost}
                setviewPost={setViewPost}
                toggleViewPost={toggleViewPost}
                modalBody={notifBody}
                modalTitle={notifTitle}
                forumReplies={[]}
                isNotif={true}
            />

            <div>
                <GeneralHeader to="/home" />
            </div>

            <div className='forum-border d-flex justify-content-between' style={{ padding: '10px' }}>
                <div>
                    <h2 className='text-center m-0 align-self-start'>Notifications Dasboard</h2>
                </div>
            </div>

            <div className='forum-border'>

                {
                    notifs.map((notif, index) => (
                        <div className='query-border d-flex align-items-center' key={index}>
                            <h4 className='m-0'>{notif.heading}</h4>
                            <button
                                className='btn btn-primary'
                                style={{ marginLeft: 'auto' }}
                                onClick={() => {
                                    setNotifBody(notif.description)
                                    setNotifTitle(notif.heading)
                                    toggleViewPost()
                                }}
                            >Open</button>
                        </div>
                    ))
                }

            </div>

            {/* <div className='d-flex justify-content-between' style={{ padding: '10px' }}>
                <div style={{ marginRight: '10px' }}>
                    <button type="button" className="btn btn-secondary">Select All</button>
                </div>
                {/* <div>
                    <button type="button" className="btn btn-info">Add New Post </button>
                </div> */}
            {/* </div> */}  
        </>

    )
}
