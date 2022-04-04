import { React, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import GeneralHeader from '../../components/GeneralHeader'
import { addCourseRole, addProfile } from '../../apis/Apis'

export default function AddProfile(props) {
    const [profile, changeProfile] = useState({
        "login_id": "",
        "password": "",
        "profile_id": 0,
        "phone_no": "",
        "email_id": "",
        "name": "",
        "department": "",
        "roll_number": "",
        "is_ts": 0,
        "isAdmin": 0
    })
    const [courseRole, changeCourseRole] = useState({
        "course": "",
        "profile_id": 0,
        "role": ""
    })
    const [showAddProfileAlert, changeShowAddProfileAlert] = useState(false);
    const [showAddCourseRoleAlert, changeShowAddCourseRoleAlert] = useState(false);
    const [message, changeMessage] = useState("");

    let showAlert = () =>{
        if(showAddProfileAlert){
            return(
                <>
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Profile</strong>
                        <p>{message}</p>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=> {changeShowAddProfileAlert(false)}}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                </>
            )
        }
        if(showAddCourseRoleAlert){
            return(
                <>
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Course Role :</strong>
                        <p>{message}</p>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=> {changeShowAddCourseRoleAlert(false)}}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                </>
            )
        }
    }
    
    let fnAddProfile = async() => {
        console.log(profile)
        console.log("Add Profile Called")
        let res = await addProfile(profile);
        changeMessage("Profile : " + res.data)
        changeShowAddProfileAlert(true)
    }

    let fnAddCourseRole = async() => {
        console.log(courseRole)
        console.log("Add Course Role Called")
        let res = await addCourseRole(courseRole);
        changeMessage("Course Role : " + res.data)
        changeShowAddCourseRoleAlert(true)
    }
    return (
        <>  {showAlert()}
            <GeneralHeader to="/home" />
            <br></br>
            <br></br>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input onChange = {(e) => {changeProfile({...profile, "name": e.target.value})}} type="name" className="form-control" id="name" aria-describedby="name" placeholder="Enter Name" required/>
                    </div>
                    <div className="form-group">
                        <label for="department">Department</label>
                        <input onChange = {(e) => {changeProfile({...profile, "department": e.target.value})}} type="department" className="form-control" id="department" placeholder="Enter Department" required/>
                    </div>
                    <div className="form-group">
                        <label for="profile_id">Profile ID</label>
                        <input onChange = {(e) => {changeProfile({...profile, "profile_id": parseInt(e.target.value)})}} type="profile_id" className="form-control" id="profile_id" placeholder="Enter Profile ID" required/>
                    </div>
                    <div className="form-group">
                        <label for="phone_number">Phone Number</label>
                        <input onChange = {(e) => {changeProfile({...profile, "phone_no": e.target.value})}} type="phone_number" className="form-control" id="phone_number" placeholder="Enter Phone Number" required/>
                    </div>
                    <div className="form-group">
                        <label for="email_id">Email ID</label>
                        <input onChange = {(e) => {changeProfile({...profile, "email_id": e.target.value})}} type="email_id" className="form-control" id="email_id" placeholder="Enter Email ID" required/>
                    </div>
                    <div className="form-group">
                        <label for="roll_no">Roll No</label>
                        <input onChange = {(e) => {changeProfile({...profile, "roll_number": e.target.value})}} type="roll_no" className="form-control" id="roll_no" placeholder="Enter Roll No" required/>
                    </div>
                    <div className="form-group">
                        <label for="login_id">Login ID</label>
                        <input onChange = {(e) => {changeProfile({...profile, "login_id": e.target.value})}} type="login_id" className="form-control" id="login_id" placeholder="Enter Login ID" required/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input onChange = {(e) => {changeProfile({...profile, "password": e.target.value})}} type="password" className="form-control" id="password" placeholder="Enter Password" required/>
                    </div>
                    <div className="form-group form-check">
                        <input onChange = {(e) => {changeProfile({...profile, "is_ts": e.target.checked?1:0})}} type="checkbox" className="form-check-input" id="is_ts" />
                        <label className="form-check-label" for="is_ts">Is Technical Staff </label>
                    </div>
                    <div className="form-group form-check">
                        <input onChange = {(e) => {changeProfile({...profile, "isAdmin": e.target.checked?1:0})}} type="checkbox" className="form-check-input" id="is_admin" />
                        <label className="form-check-label" for="is_admin">Is Admin </label>
                    </div>
                    <br></br>
                    <button onClick = {fnAddProfile} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <br></br>
            <br></br>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="course">Course</label>
                        <input onChange = {(e) => {changeCourseRole({...courseRole, "course": e.target.value})}} type="course" className="form-control" id="course" aria-describedby="course" placeholder="Enter Course Name" required/>
                    </div>
                    <div className="form-group">
                        <label for="profile_id">Profile ID</label>
                        <input onChange = {(e) => {changeCourseRole({...courseRole, "profile_id": parseInt(e.target.value)})}} type="profile_id" className="form-control" id="profile_id" aria-describedby="name" placeholder="Enter Profile ID" required/>
                    </div>
                    <div className="form-group">
                        <label for="profile_id">Role</label>
                        <select onChange = {(e) => {changeCourseRole({...courseRole, "role": e.target.value})}} className="form-select" aria-label="role" required>
                            <option selected>Open this select menu</option>
                            <option value="Student">Student</option>
                            <option value="Instructor">Instructor</option>
                            <option value="TA">TA</option>
                        </select>
                    </div>
                    <br></br>
                    <button 
                    onClick = {fnAddCourseRole} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <br></br>
            <br></br>
        </>
    )
}