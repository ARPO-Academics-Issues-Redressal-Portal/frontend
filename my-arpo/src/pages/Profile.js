import React from 'react'
import GeneralHeader from '../components/GeneralHeader'
import ProfileIcon from "../assets/ARPO-logos/profile_pic.png"

export default function Profile() {
    const profileData = [
        {
            label: "Name",
            value: sessionStorage.getItem("name") === 'null' ? undefined :sessionStorage.getItem("name")
        },
        {
            label: "Roll No",
            value: sessionStorage.getItem("roll_no") === 'null' ? undefined : sessionStorage.getItem("roll_no")
        },
        {
            label: "Email",
            value: sessionStorage.getItem("email") === 'null' ? undefined :sessionStorage.getItem("email")
        },
        {
            label: "Department",
            value: sessionStorage.getItem("department") === 'null' ? undefined :sessionStorage.getItem("department")
        },
        {
            label: "Phone No",
            value: sessionStorage.getItem("phone") === 'null' ? undefined :sessionStorage.getItem("phone")
        }
    ]

    if (sessionStorage.getItem("roll_no") === 'null') profileData.splice(1, 1)

    if(sessionStorage.getItem("isAdmin") === 'true' || sessionStorage.getItem("isTS") === 'true')profileData.splice(2, 1)

    return (
        <div>
            <GeneralHeader to="/home" />
            <h2 className='text-center'>Profile</h2>

            <div className='profile-border d-flex justify-content-between align-items-center'>

                <div>
                    <img src={ProfileIcon} />
                </div>

                <div style={{ flex: '1', marginLeft: '50px' }}>
                    <ul className='profile-container'>
                        {
                            profileData.map((ele, id) => (
                                <li style={{ fontSize: '25px' }} key={id}>
                                    {ele.label} : {ele.value}
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}
