import React, { useState, useEffect } from 'react'
import GeneralHeader from '../components/GeneralHeader'
import { CourseAnnouncementsApi } from '../apis/Apis'
import Modal from '../components/Modal'
import { useParams } from 'react-router-dom';

export default function AnnouncementsPage() {

    const [basicModal, setBasicModal] = useState(false);
    const [modalBody, setmodalBody] = useState("")
    const [modalTitle, setmodalTitle] = useState("")
    const [announcements, setannouncements] = useState([])

    const toggleShow = () => setBasicModal(!basicModal);

    const fnGetCourseAnnouncements = async () => {
        let pathsArr = window.location.pathname.split('/')
        let courseName = pathsArr[pathsArr.length - 2]

        let res = await CourseAnnouncementsApi(courseName);
        console.log(res.data)
        setannouncements(res.data)
    }

    useEffect(() => {
        fnGetCourseAnnouncements()
    }, [])

    const { role } = useParams()

    return (
        <>
            <Modal
                basicModal={basicModal}
                setBasicModal={setBasicModal}
                toggleShow={toggleShow}
                modalBody={modalBody}
                modalTitle={modalTitle}
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
                            <h2 className='text-center m-0 align-self-start'>Queries Dashboard</h2>
                        </div>

                        <div>
                            <button 
                                type="button" 
                                className="btn btn-success" 
                                style={{ marginRight: '10px' }}
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
