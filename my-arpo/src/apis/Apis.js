import axios from 'axios'
import AnnouncementsPage from '../pages/AnnouncementsPage';
import StudentPrivateQueryDasboard from '../pages/StudentInterface/StudentPrivateQueryDashboard';

const backEndServer = 'http://localhost:8080/';

export async function LoginApi(login, password) {
    let url = backEndServer + "profile/profileByLoginAndPassword"

    let params = {
        login_id: login,
        password: password
    }

    let res = await axios.get(url, { params })
    if(res.data===''){
        alert("Invalid Username or password")
        return
      }
    return res;
}

export async function NotificationApi() {
    let url = backEndServer + "notification"

    let res = await axios.get(url)
    return res;
}

export async function CoursesApi(profileId) {
    let url = backEndServer + "courseRoles/coursesByProfile_Id"

    let params = {
        profile_id: profileId
    }
    let res = await axios.get(url, { params })
    return res;
}

/********************************************/

/* Course Announcement Apis Begins*/


export async function CourseAnnouncementsApi(courseName) {
    let url = backEndServer + "announcement/courses"

    let params = {
        courseName: courseName
    }
    let res = await axios.get(url, { params })
    return res;
}

export async function CourseAnnouncementPostApi(heading, description, course) {
    let url = backEndServer + "announcement/add"

    let date = new Date()
    date = date.toISOString().slice(0, 19).replace('T', ' ');

    let params = {
        date_time: date,
        heading: heading,
        description: description,
        sender: sessionStorage.getItem('profileId'),
        course: course
    }

    let res = await axios.post(url, params)
    return res;
}

export async function CourseAnnouncementsUpdateApi(uuid,heading,description,course) {
    let url = backEndServer + "announcement/update/"+uuid
    let date = new Date()
    date = date.toISOString().slice(0, 19).replace('T', ' ');

    let params = {
        "heading": heading,
        "description": description,
        "sender": sessionStorage.getItem('profileId'),
        "course": course,
        "date_time": date
    }
    let res = await axios.put(url, params)
    return res;
}

export async function CourseAnnouncementDeleteApi(uuid) {
    let url = backEndServer + "announcement/delete/"+uuid    
    let res = await axios.delete(url)
    return res;
}

/* Course Announcement Apis Ends*/

/********************************************/

/* Course Forum Apis Begins*/

export async function ForumsApi(courseName) {
    let url = backEndServer + "forum/forumByCourse"
    let params = {
        courseName: courseName
    }
    let res = await axios.get(url, { params })
    return res;
}

export async function ForumPostApi(subject,description,course) {
    let url = backEndServer + "forum/add"
    let date = new Date();

    date = date.toISOString().slice(0, 19).replace('T', ' ');

    let params = {
        "title": subject,
        "profile_id": sessionStorage.getItem('profileId'),
        "description": description,
        "likes": 0,
        "course": course,
        "receiver_email_id": sessionStorage.getItem("email"),
        "post_anonymous": false,
        "date_time": date
    }
    console.log(params)
    let res = await axios.post(url, params)
    return res;
}

export async function UpdateForumPostApi(uuid,forum) {
    let url = backEndServer + "forum/update/"+uuid
    let date = new Date();

    date = date.toISOString().slice(0, 19).replace('T', ' ');
    let params = {
        "title": forum.title,
        "profile_id": sessionStorage.getItem('profileId'),
        "description": forum.description,
        "likes": 0,
        "course": forum.course,
        "receiver_email_id": sessionStorage.getItem('email'),
        "post_anonymous": false,
        "date_time": date
    }
    let res = await axios.put(url, params )
    return res;
}

export async function ForumsResponseApi(forumUuid) {
    let url = backEndServer + "forumResponse/forumResponseByForumUUID"
    let params = {
        forumUuid: forumUuid
    }
    let res = await axios.get(url, { params })
    return res;
}

export async function ForumsResponseAddReplyApi(forumUuid,description,course,receiver_email) {
    let url = backEndServer + "forumResponse/add"
    let date = new Date();

    date = date.toISOString().slice(0, 19).replace('T', ' ');
    let params = {
        "forum_uuid":forumUuid,
        "responder_email_id":sessionStorage.getItem('email'), 
        "response_text":description,
        "course":course,
        "likes":0,
        "post_anonymous":0,
        "date_time":date,
        "receiver_email_id": receiver_email
    }

    let res = await axios.post(url, params)
    return res;
}

export async function deleteForumApi(forumUuid){
    let url = backEndServer+"forum/delete/"+forumUuid
    let res = await axios.delete(url)
    return res;

}

export async function deleteForumResponseApi(forumUuid){
    let url = backEndServer+"forumResponse/delete/"+forumUuid

    let res = await axios.delete(url)
    return res;

}
/* Course Forum Apis End*/

/********************************************/

/* Course Private Queries Apis Begins*/

export async function PrivateQueryByCourseAndProfileIdApi(courseName, profileId) {
    let url = backEndServer + "privateQuery/queryByProfileIdAndCourse"
    let params = {
        courseName: courseName,
        profile_id: profileId
    }
    let res = await axios.get(url, { params })
    return res;
}


export async function PrivateQueryByCourseNameApi(courseName) {
    let url = backEndServer + "privateQuery/queryByCourse"
    let params = {
        courseName: courseName
    }
    let res = await axios.get(url, { params })
    return res;
}

export async function PrivateQueryResponseApi(queryUuid) {
    let url = backEndServer + "privateQueryResponse/privateQueryResponseByQueryUUID"
    let params = {
        queryUuid: queryUuid
    }   
    let res = await axios.get(url, { params })
    return res;
}

export async function AddPrivateQueryApi(query) {
    let url = backEndServer + "privateQuery/add"
    let date = new Date()
    date = date.toISOString().slice(0, 19).replace('T', ' ');

    let params = {
        "title": query.title,
        "profile_id": sessionStorage.getItem('profileId'),
        "description": query.description,
        "course": query.course,
        "status":query.status,
        "receiver_email_id":query.receiver_email_id,
        "date_time": date,
        "category":query.category
    }
    console.log("Calling a private query addition!")
    console.log(query)
    console.log(params)
    let res = await axios.post(url, params)
    return res;
}


export async function UpdatePrivateQueryApi(uuid, query) {
    let url = backEndServer + "privateQuery/update/" + uuid;
    let date = new Date()
    date = date.toISOString().slice(0, 19).replace('T', ' ');

    let params = {
        "title": query.title,
        "profile_id": sessionStorage.getItem('profileId'),
        "description": query.description,
        "course": query.course,
        "receiver_email_id":query.receiver_email_id,
        "date_time": date,
        "category":query.category,
        "status":query.status,
        "likes":query.likes
    }
    let res = await axios.put(url, params)
    return res;
}

export async function deletePrivateQueryApi(uuid){
    let url = backEndServer+"privateQuery/delete/"+uuid

    let res = await axios.delete(url)
    return res;

}

// #TO DO
// Admin AnnouncementsPage -Getting/Updating/Deleting/Adding
// Course Participant
// Add and Delete of Participant

/* Course Private Queries Apis End*/

/* Profiles API Start*/

export async function  ProfilesApi(){
    let url = backEndServer+"profile"
    let res = await axios.get(url)
    return res;
}

/* Profiles API End*/

/* Course Participants API start*/

export async function  CourseParticipantsApi(courseName){
    let url = backEndServer+"courseRoles/courses"
    let params = {
        "course" : courseName
    }
    let res = await axios.get(url,{params})
    return res;
}

/* Course Participants API end*/

/* Subject CRUD APIS (Adding deleting profile) Starts */

export async function addProfile(profile){
    let url = backEndServer+"profile/add"

    let params =  {
        "login_id": profile.login_id,
        "password": profile.password,
        "profile_id": profile.profile_id,
        "phone_no": profile.phone_no,
        "email_id": profile.email_id,
        "name": profile.name,
        "department": profile.department,
        "roll_number": profile.roll_number,
        "is_ts": profile.is_ts,
        "isAdmin": profile.isAdmin
    }

    let res = await axios.post(url, params)
    return res;

}

export async function deleteProfile(uuid){
    let url = backEndServer+"profile/delete/"+uuid

    let res = await axios.delete(url)
    return res;

}

/* Subject CRUD APIS (Adding deleting profile) Ends */

/* Course Role Starts */

export async function addCourseRole(courseRole){
    let url = backEndServer+"courseRoles/add"

    let params =  {
        "profile_id":courseRole.profile_id,
        "course":courseRole.course,
        "role" :courseRole.role
    }

    let res = await axios.post(url, params)
    
    return res;
}

export async function deleteCourseRole(uuid){
    let url = backEndServer+"courseRoles/delete/"+uuid

    let res = await axios.delete(url)
    
    return res;
}

/* Course Role Ends */


/* Other Query APIs starts*/ 

export async function getAdminQueriesApi(){
    let url = backEndServer+"otherQuery"
    let res = await axios.get(url)
    return res
}

export async function getAdminQueryResponseApi(queryUuid){
    let url = backEndServer+"otherQueryResponse/otherQueryResponseByQueryUUID";
    let params = {
        "queryUuid" : queryUuid
    }
    let res = await axios.get(url, {params})
    return res
}

export async function addAdminQueryResponseApi(queryUuid,queryResponse){
    let url = backEndServer+"otherQueryResponse/add"

    let date = new Date()
    date = date.toISOString().slice(0, 19).replace('T', ' ');
    
    let params =  {
        "query_uuid":queryResponse.query_uuid,
        "receiver_email_id":queryResponse.receiver_email_id,
        "responder_email_id" :queryResponse.responder_email_id,
        "date_time":date,
        "response_text":queryResponse.response_text
    }
    let res = await axios.post(url, params);
    return res;
}

/* Other Query APIs end */


/* Notifications APIs start */

export async function getAdminNotifsApi(){
    let url = backEndServer+"notification"
    
    let res = await axios.get(url)
    
    return res
}

export async function addAdminNotifApi(notif){
    let url = backEndServer+"notification/add"

    let date = new Date()
    date = date.toISOString().slice(0, 19).replace('T', ' ');
    
    let params =  {
        "heading":notif.heading,
        "description":notif.description,
        "receiver_email_id" :notif.receiver_email_id,
        "date_time":date,
    }
    let res = await axios.post(url, params);
    return res;
}
/*Notification APIs end */


// export async function  NewsApi(courseName){
//     let url = backEndServer+"announcement/courses"

//     let params = {
//         course : courseName
//     }
//     let res = await axios.get(url,{params})
//     return res;
// }

// export async function  LinksApi(courseName){
//     let url = backEndServer+"announcement/courses"

//     let params = {
//         course : courseName
//     }
//     let res = await axios.get(url,{params})
//     return res;
// }