import axios from 'axios'

export const backEndServer = 'http://localhost:1111/';
export async function LoginApi(login,password){
    let url = backEndServer+"profile/profileByloginAndPassword"

    let params = {
        login_id : login,
        password : password
    }

    let res = await axios.get(url,{params})
    return res;
}

export async function NotificationApi(){
    let url = backEndServer+"notification"

    let res = await axios.get(url)
    return res;
}

export async function  CoursesApi(profileId){
    let url = backEndServer+"courseRoles/coursesByProfile_Id"

    let params = {
        profile_id : profileId
    }
    let res = await axios.get(url,{params})
    return res;
}

export async function  CourseAnnouncementsApi(courseName){
    let url = backEndServer+"announcement/courses"

    let params = {
        courseName : courseName 
    }
    let res = await axios.get(url,{params})
    return res;
}

export async function ForumsApi(courseName){
    let url = backEndServer+"forum"
    let params = {
        courseName : courseName 
    }
    let res = await axios.get(url)
    return res;
}

export async function ForumsResponseApi(forumUuid){
    let url = backEndServer+"forum"
    let params = {
        forumUuid : forumUuid 
    }
    let res = await axios.get(url)
    return res;
}

export async function PrivateQueryByCourseAndProfileIdApi(courseName,profileId){
    let url = backEndServer+"forum"
    let params = {
        courseName : courseName,
        profileId : profileId 
    }
    let res = await axios.get(url)
    return res;
}

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