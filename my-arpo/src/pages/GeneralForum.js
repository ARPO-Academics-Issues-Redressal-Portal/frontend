import React, { useState,useEffect } from 'react'
import GeneralHeader from '../components/GeneralHeader'
import { ForumsApi } from '../apis/Apis'
import Modal from '../components/Modal'

export default function GeneralForum() {
    const [basicModal, setBasicModal] = useState(false);
    const [forums, setforums] = useState([])
    const [modalBody, setmodalBody] = useState("")
    const [modalTitle, setmodalTitle] = useState("")

    const toggleShow = () => setBasicModal(!basicModal);

    useEffect(() => {
      fnGetForums()
    }, [])

    const fnGetForums = async () => {
        let res = await ForumsApi();
        let arr = res.data;
        console.log(res)
        setforums(arr)
    }

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
                <div>
                    <GeneralHeader />
                </div>
                <h2 className='text-center m-0'>General Forum Dashboard</h2>

                <div className='forum-border' >

                    {
                        forums.map((forum, index) => (
                            <div className='query-border d-flex align-items-center' key={index}>
                                <h4 className='m-0'>{forum.title}</h4>
                                <button
                                    className='btn btn-primary'
                                    style={{ marginLeft: 'auto' }}
                                    onClick={() => {
                                        console.log("hello")
                                        setmodalBody(forum.description)
                                        setmodalTitle(forum.title)
                                        toggleShow()
                                    }}
                                >Open</button>
                            </div>
                        ))
                    }

                </div>


            </div>
        </>
    )
}

