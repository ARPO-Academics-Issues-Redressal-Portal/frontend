import React, { useState, useEffect } from 'react'
import GeneralHeader from '../components/GeneralHeader'
import { CourseAnnouncementDeleteApi, CourseAnnouncementPostApi, CourseAnnouncementsApi, CourseAnnouncementsUpdateApi } from '../apis/Apis'
import Modal from '../components/Modal'
import { useParams } from 'react-router-dom';
import AddPost from '../components/AddPost';
import EditPost from '../components/EditPost';

export default function AnnouncementsPage() {

    const [basicModal, setBasicModal] = useState(false);
    const [modalBody, setmodalBody] = useState("")
    const [modalTitle, setmodalTitle] = useState("")
    const [announcements, setannouncements] = useState([])
    const [ann_uuid, setann_uuid] = useState("")

    const toggleShow = () => setBasicModal(!basicModal);

    const fnGetCourseAnnouncements = async () => {
        let pathsArr = window.location.pathname.split('/')
        let courseName = pathsArr[pathsArr.length - 2]

        let res = await CourseAnnouncementsApi(courseName);
        console.log(res.data)
        setannouncements(res.data.reverse())
    }

    useEffect(() => {
        fnGetCourseAnnouncements()
    }, [])

    const { role,course } = useParams()

    const [addPost, setaddPost] = useState(false)
    const toggleAddPost = ()=> setaddPost(!addPost)
    const [subject, setsubject] = useState("")
    const [postBody, setpostBody] = useState("")
    const fnPostAnnouncement = async ()=>{

        let res = await CourseAnnouncementPostApi(subject,postBody,course)
        fnGetCourseAnnouncements()
        console.log(res)
    }

    const [editPost, seteditPost] = useState(false)
    const toggleEditPost = () => seteditPost(!editPost)

    const fnUpdateAnnouncement = async () =>{
        let res = await CourseAnnouncementsUpdateApi(ann_uuid,modalTitle,modalBody,course)
        console.log("announcement update ",res)
        fnGetCourseAnnouncements()
    }

    const fnDeleteAnnouncement = async ()=>{
        let res = await CourseAnnouncementDeleteApi(ann_uuid)
        console.log(res)
        fnGetCourseAnnouncements()
    }

    return (
        <>
            <Modal
                basicModal={basicModal}
                setBasicModal={setBasicModal}
                toggleShow={toggleShow}
                modalBody={modalBody}
                modalTitle={modalTitle}
                toggleEditPost={toggleEditPost}
                deleteAnnouncement={fnDeleteAnnouncement}
            />

            <AddPost 
                addPost={addPost}
                setaddPost={setaddPost}
                toggleAddPost={toggleAddPost}
                heading="Add Announcement"
                setsubject={setsubject}
                setpostBody={setpostBody}
                subject={subject}
                postBody={postBody}
                fnAddPost={fnPostAnnouncement}
            />

            <EditPost 
                editPost={editPost}
                seteditPost={seteditPost}
                toggleEditPost={toggleEditPost}
                heading="Edit Announcement"
                subject={modalTitle}
                editBody={modalBody}
                setsubject={setmodalTitle}
                setpostBody={setmodalBody}
                fnUpdatePost={fnUpdateAnnouncement}
            />

            <div>
                <GeneralHeader to='/home' />
            </div>
            {
                role === "student" && (
                    <h2 className='text-center m-0'>Announcements</h2>
                )
            }
            {
                (role === "instructor" || role === "ta") && (
                    <div className='forum-border d-flex justify-content-between' style={{ padding: '10px' }}>
                        <div>
                            <h2 className='text-center m-0 align-self-start'>Announcement Dashboard</h2>
                        </div>

                        <div>
                            <button 
                                type="button" 
                                className="btn btn-success" 
                                style={{ marginRight: '10px' }}
                                onClick={() => {
                                    setsubject('')
                                    setpostBody('')
                                    toggleAddPost()
                                }}
                            >Add Announcement </button>
                        </div>
                    </div>
                )
            }



            <div className='forum-border'>
                {
                    announcements.map((announcement, index) => (
                        <div className='query-border d-flex align-items-center' key={index}>
                            <h4 className='m-0'>{announcement.heading}</h4>
                            <button
                                className='btn btn-primary'
                                style={{ marginLeft: 'auto' }}
                                onClick={() => {
                                    console.log("hello")
                                    setmodalBody(announcement.description)
                                    setmodalTitle(announcement.heading)
                                    setann_uuid(announcement.uuid)
                                    toggleShow()
                                }}
                            >Open</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
