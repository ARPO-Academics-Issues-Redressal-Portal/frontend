import React from 'react'
import Navlink from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <Navlink to='/'>Home</Navlink>
            <Navlink to='/ForumView'>ForumView</Navlink>
        </nav>
    )
}

export default NavBar