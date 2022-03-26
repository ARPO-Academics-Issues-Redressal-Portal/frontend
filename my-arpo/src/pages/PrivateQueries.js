import React from 'react'
import { useParams } from 'react-router-dom'
import InstructorPrivateQueryDasboard from './InstructorInterface/InstructorPrivateQueryDashboard'
import StudentPrivateQueryDasboard from './StudentInterface/StudentPrivateQueryDashboard'

export default function PrivateQueries() {
    const { role } = useParams()

    if (role === "instructor") {
        return <InstructorPrivateQueryDasboard />
    }
    else if (role === "student") {
        return <StudentPrivateQueryDasboard />
    }

    return (
        <div>

        </div>
    )
}
