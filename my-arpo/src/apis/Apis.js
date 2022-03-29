import axios from 'axios'

export const backEndServer = 'http://localhost:8080/';

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

export async function ForumPostApi(title,description,course) {
    let url = backEndServer + "forum/add"
    let date = new Date()
    date = date.toISOString().slice(0, 19).replace('T', ' ');

    let params = {
        "title":title,
        "profile_id":sessionStorage.getItem("profileId"), 
        "description":description,
        "likes":0,
        "course":course,
        "receiver_email_id":sessionStorage.getItem("email"),
        "post_anonymous":1,
        "date_time":date
    }
    let res = await axios.post(url, params)
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

/* Course Private Queries Apis End*/

// export async function  CourseParticipantsApi(courseName){
//     let url = backEndServer+"participants/courses"

//     let params = {
//         courseName : courseName
//     }
//     let res = await axios.get(url,{params})
//     return res;
// }

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