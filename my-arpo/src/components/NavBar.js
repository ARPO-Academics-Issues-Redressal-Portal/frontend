import React from 'react'
import { link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <link to='/'>Home</link>
            <link to='/ForumView'>ForumView</link>
        </nav>
    )
}

export default NavBar