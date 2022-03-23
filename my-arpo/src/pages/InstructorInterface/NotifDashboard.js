import React, { Component } from 'react'
import DashboardNotifSuperset from '../../components/DashboardNotifSuperset'
import GeneralHeader from '../../components/GeneralHeader'
import { CourseAnnouncementsApi } from '../../apis/Apis'

export default class NotifDashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ann:[]
        }
    }

    fnGetAnnouncements = async (courseName) => {
        let res = await CourseAnnouncementsApi(courseName);
        let tempAnnReceived = Array();
        let arr = res.data
        console.log("Hello")
        for (let i = 0; i < arr.length; i++) {
            let temp = {}
            temp["heading"] = arr[i].heading
            temp["description"] = arr[i].description
            temp["date_time"] = arr[i].date_time
            tempAnnReceived.push(temp)
        }
        console.log(tempAnnReceived);
        this.setState({ann:tempAnnReceived})

    }
    componentDidMount(){
        this.fnGetAnnouncements('CS253A');
    }
    render() {
        return (
            <>
                <div>
                    <GeneralHeader to='/instructor' />
                </div>

                <div>Notification Dashboard</div>
                <div className='query-border'>
                    <DashboardNotifSuperset data={this.state.ann} />
                </div>
            </>
        )
    }
}
