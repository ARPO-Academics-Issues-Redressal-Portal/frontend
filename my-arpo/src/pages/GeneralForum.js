import React, { useState, useEffect } from 'react'
import GeneralHeader from '../components/GeneralHeader'
import { deleteForumApi, ForumPostApi, ForumsApi, ForumsResponseAddReplyApi, UpdateForumPostApi } from '../apis/Apis'
import { useParams } from 'react-router-dom';
import ViewPost from '../components/ViewPost'
import AddPost from '../components/AddPost';
import { ForumsResponseApi } from '../apis/Apis';
import EditPost from '../components/EditPost';
import ReplyPost from '../components/ReplyPost';
import { deleteForumResponseApi } from '../apis/Apis';

export default function GeneralForum() {
    const [forums, setforums] = useState([])
    const [modalBody, setmodalBody] = useState("")
    const [modalTitle, setmodalTitle] = useState("")
    const [forumReplies, setforumReplies] = useState([])
    const [postedBy, setpostedBy] = useState("")
    const [forum_uuid, setforum_uuid] = useState("")
    const [forum_email, setforum_email] = useState("")
    const [timeOfPost, settimeOfPost] = useState("")

    const { course } = useParams()

    useEffect(() => {
        fnGetForums()
    }, [])

    const fnGetForums = async () => {
        let res = await ForumsApi(course);
        let arr = res.data;
        console.log(res)
        setforums(arr.reverse())
    }

    const fnGetReplies = async (forumUuid) => {
        setforumReplies([])
        let res = await ForumsResponseApi(forumUuid)

        console.log(res)
        if(res === "Not Found"){
            setforumReplies([])
            return
        }
        setforumReplies(res.data)
    }

    const [viewPost, setviewPost] = useState(false)
    const toggleViewPost = () => setviewPost(!viewPost)

    const [addPost, setaddPost] = useState(false)
    const toggleAddPost = () => setaddPost(!addPost)
    const [subject, setsubject] = useState("")
    const [postBody, setpostBody] = useState("")
    const [postAnonumous, setpostAnonumous] = useState(false)
    const fnPostForum = async () => {

        let res = await ForumPostApi(subject, postBody, course,postAnonumous)
        fnGetForums()
        setpostAnonumous(false)
    }

    const [editPost, seteditPost] = useState(false)
    const toggleEditPost = () => seteditPost(!editPost)

    const fnUpdateForum = async () => {
        let fm = {
            title: modalTitle,
            description: modalBody,
            course: course
        }

        let res = await UpdateForumPostApi(forum_uuid, fm)
        console.log("announcement update ", res)
        fnGetForums()
    }

    const fnDeleteForum = async () => {
        let res = await deleteForumApi(forum_uuid)
        console.log(res)
        fnGetForums()
    }

    const [replyPost, setreplyPost] = useState(false)
    const [replyBody, setreplyBody] = useState("")
    const [replyAnnonymous, setreplyAnnonymous] = useState(false)
    const toggleReplyPost = () => setreplyPost(!replyPost)

    const fnAddReplyToForum = async ()=>{
        let res = await ForumsResponseAddReplyApi(forum_uuid,replyBody,course,forum_email,replyAnnonymous)
        fnGetReplies(forum_uuid)
        setreplyBody('')
        toggleViewPost()
    }

    const deleteForumReply = async (id) => {
        let res = await deleteForumResponseApi(id)
        fnGetReplies(forum_uuid)
    }

    return (
        <>
            <ViewPost
                viewPost={viewPost}
                setviewPost={setviewPost}
                toggleViewPost={toggleViewPost}
                modalBody={modalBody}
                modalTitle={modalTitle}
                forumReplies={forumReplies}
                toggleEditPost={toggleEditPost}
                deletePost={fnDeleteForum}
                postedBy={postedBy}
                toggleReplyPost={toggleReplyPost}
                email={forum_email}
                timeOfPost={timeOfPost}
                deleteReply={deleteForumReply}
            />

            <AddPost
                addPost={addPost}
                setaddPost={setaddPost}
                toggleAddPost={toggleAddPost}
                heading={"Add Forum"}
                setsubject={setsubject}
                setpostBody={setpostBody}
                postAnonumous={postAnonumous}
                setpostAnonumous={setpostAnonumous}
                subject={subject}
                postBody={postBody}
                fnAddPost={fnPostForum}
            />

            <ReplyPost
                replyPost={replyPost}
                setreplyPost={setreplyPost}
                toggleReplyPost={toggleReplyPost}
                heading={"Reply Forum"}
                replyBody={replyBody}
                setreplyBody={setreplyBody}
                fnAddReply={fnAddReplyToForum}
                replyAnnonymous={replyAnnonymous}
                setreplyAnnonymous={setreplyAnnonymous}
            />

            <EditPost
                editPost={editPost}
                seteditPost={seteditPost}
                toggleEditPost={toggleEditPost}
                heading="Edit Forum"
                subject={modalTitle}
                editBody={modalBody}
                setsubject={setmodalTitle}
                setpostBody={setmodalBody}
                fnUpdatePost={fnUpdateForum}
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
                                setsubject('')
                                setpostBody('')
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
                                        setforum_uuid(forum.uuid)
                                        if(forum.post_anonymous) setforum_email("Anonymous")
                                        else setforum_email(forum.receiver_email_id)
                                        setpostedBy(forum.profile_id)
                                        settimeOfPost(forum.date_time)
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

