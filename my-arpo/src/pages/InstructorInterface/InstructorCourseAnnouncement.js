import React, { useState,useEffect  } from 'react'
import GeneralHeader from '../../components/GeneralHeader'
import { CourseAnnouncementsApi } from '../../apis/Apis'
import Modal from '../../components/Modal'

export default function StudentCourseAnnouncements() {

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

        // let courseAnnouncements = Array();
        // let arr = res.data
        // for (let i = 0; i < arr.length; i++) {
        //     let temp = {}
        //     temp["heading"] = arr[i].Heading
        //     temp["Description"] = arr[i].Description
        //     temp["TimeStamp"] = arr[i].date_time
        //     courseAnnouncements.push(temp)
        // }
        setannouncements(res.data)
        // console.log(courseAnnouncements)
    }

    useEffect(() => {
        fnGetCourseAnnouncements()
    }, [])


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
                <GeneralHeader to='/student' />
            </div>
            <h2 className='text-center m-0'>Announcements</h2>

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
