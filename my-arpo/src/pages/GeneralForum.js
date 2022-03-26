import React, { useState, useEffect } from 'react'
import GeneralHeader from '../components/GeneralHeader'
import { ForumsApi } from '../apis/Apis'
import { useParams } from 'react-router-dom';
import ViewPost from '../components/ViewPost'
import AddPost from '../components/AddPost';
import { ForumsResponseApi } from '../apis/Apis';

export default function GeneralForum() {
    const [forums, setforums] = useState([])
    const [modalBody, setmodalBody] = useState("")
    const [modalTitle, setmodalTitle] = useState("")
    const [forumReplies, setforumReplies] = useState([])

    const {course} = useParams()

    useEffect(() => {
        fnGetForums()
    }, [])

    const fnGetForums = async () => {
        let res = await ForumsApi(course);
        let arr = res.data;
        console.log(res)
        setforums(arr)
    }

    const fnGetReplies = async (forumUuid)=>{
        let res = await ForumsResponseApi(forumUuid)
        console.log("viewPost res")
        console.log(res)
        setforumReplies(res.data)
    }

    const [viewPost, setviewPost] = useState(false)
    const toggleViewPost = () => setviewPost(!viewPost)

    const [addPost, setaddPost] = useState(false)
    const toggleAddPost = ()=> setaddPost(!addPost)

    return (
        <>
            <ViewPost
                viewPost={viewPost}
                setviewPost={setviewPost}
                toggleViewPost={toggleViewPost}
                modalBody={modalBody}
                modalTitle={modalTitle}
                forumReplies={forumReplies}
            />
            <AddPost 
                addPost={addPost}
                setaddPost={setaddPost}
                toggleAddPost={toggleAddPost}
                heading={"Add Forum"}
            />

            <div>
                <div>
                    <GeneralHeader to="/home" />
                </div>

                <div className='forum-border d-flex justify-content-between' style={{ padding: '10px' }}>
                    <div>
                        <h2 className='text-center m-0 align-self-start'>General Forum</h2>
                    </div>

                    <div>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                toggleAddPost()
                            }}
                            style={{ marginRight: '10px' }}
                        >Add Forum </button>
                    </div>
                </div>

                <div className='forum-border'>

                    {
                        forums.map((forum, index) => (
                            <div className='query-border d-flex align-items-center' key={index}>
                                <h4 className='m-0'>{forum.title}</h4>
                                <button
                                    className='btn btn-primary'
                                    style={{ marginLeft: 'auto' }}
                                    onClick={() => {                                
                                        setmodalBody(forum.description)
                                        setmodalTitle(forum.title)
                                        fnGetReplies(forum.uuid)
                                        toggleViewPost()
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

