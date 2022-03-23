import React, { Component } from 'react'
import GeneralHeader from '../../components/GeneralHeader'
import DashboardNotifSuperset from '../../components/DashboardNotifSuperset'

export default class StudentCourseNotification extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    fnGetCourseAnnouncements = async (courseName) => {
        let pathsArr = window.location.pathname.split('/')
        let courseName = pathsArr[pathsArr.length -1]
        
        let res = await CouresAnnouncementsApi(courseName);
        console.log(res.data)

        let courseAnnouncements = Array();
        let arr = res.data
        for (let i = 0; i < arr.length; i++) {
            let temp = {}
            temp["Heading"] = arr[i].Heading
            temp["Description"] = arr[i].Description
            temp["TimeStamp"] = arr[i].date_time
            courseAnnouncements.push(temp)
        }
        
        this.setState({ Announcements: courseAnnouncements })
        console.log(courseAnnouncements)
    }

    componentDidMount() {
        this.fnGetCourseAnnouncements();
    }

    render() {
        return (
            <>
                <div>
                    <GeneralHeader to='/student' />
                </div>

                <div>Notification Dashboard</div>
                <div className='query-border'>
                    <DashboardNotifSuperset />
                </div>
            </>
        )
    }
}
