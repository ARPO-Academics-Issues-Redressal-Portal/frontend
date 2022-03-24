import React from 'react'
import PostNotificationComp from './PostNotificationComp'

function DashboardForumQuery(props) {
    return (
        <>
            {
                props.data.map((ele)=>(
                    <PostNotificationComp data={ele}/>
                ))
            }
            {/* <PostNotificationComp />
            <PostNotificationComp />
            <PostNotificationComp />
            <PostNotificationComp /> */}
            {/* add button */}
            
        </>
    )
}

export default DashboardForumQuery