import { React, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import GeneralHeader from '../../components/GeneralHeader'
import { addCourseRole, addProfile } from '../../apis/Apis'
import { useParams } from 'react-router-dom'

export default function InstructorAddProfile(props) {
    const {course} = useParams(); 
    const [courseRole, changeCourseRole] = useState({
        "course": course,
        "profile_id": 0,
        "role": ""
    })
    let res = {}
    const [showAddCourseRoleAlert, changeShowAddCourseRoleAlert] = useState(false);
    const [message, changeMessage] = useState("");

    let showAlert = () =>{
        if(showAddCourseRoleAlert){
            return(
                <>
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Course Role :</strong>
                        <p>{message}</p>
                    <button type="button" class="btn btn-secondary" data-dismiss="alert" aria-label="Close" onClick={() => {changeShowAddCourseRoleAlert(false)}}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                </>
            )
        }
    }

    let fnAddCourseRole = async() => {
        if(courseRole.role !== "Student" && courseRole.role !== "Instructor" && courseRole.role !== "TA" ){
            alert("Please select a role!")
            return;
        }
        if(courseRole.profile_id === ""){
            alert("Please enter a profile id!")
            return;
        }
        console.log(courseRole)
        console.log("Add Course Role Called")
        try{
            res = await addCourseRole(courseRole);
        }
        catch(e){
            alert("Error" + e.message + ". Could not add user." )
        }
        alert("Course Role Submitted!")
    }

    return (
        <>  
            {showAlert()}
            <GeneralHeader to="/home" />
            <br></br>
            <br></br>
            <h3 align="center"> Assign User To Course </h3>
            <div class="container">
                <form>
                    <div>
                        <h5> Course : {course} </h5>
                    </div>
                    <div class="form-group">
                        <label for="profile_id">Profile ID</label>
                        <input onChange = {(e) => {changeCourseRole({...courseRole, "profile_id": parseInt(e.target.value)})}} type="profile_id" class="form-control" id="profile_id" aria-describedby="name" placeholder="Enter Profile ID" required/>
                    </div>
                    <div class="form-group">
                        <label for="profile_id">Role</label>
                        <select onChange = {(e) => {changeCourseRole({...courseRole, "role": e.target.value})}} class="form-select" aria-label="role" required>
                            <option selected>Open this select menu</option>
                            <option value="Student">Student</option>
                            <option value="Instructor">Instructor</option>
                            <option value="TA">TA</option>
                        </select>
                    </div>
                    <br></br>
                    <button 
                    onClick = {fnAddCourseRole} type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <br></br>
            <br></br>
        </>
    )
}