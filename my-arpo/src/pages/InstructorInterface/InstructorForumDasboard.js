import React, { Component } from 'react'
import DashboardForumQuery from '../../components/DashboardForumQuery'
import GeneralHeader from '../../components/GeneralHeader'
import { ForumsApi } from '../../apis/Apis'

export default class InstructorForumDasboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            forum:[]
        }
    }

    fnGetForums = async (courseName) => {
        let res = await ForumsApi(courseName);
        let tempForumReceived = Array();
        let arr = res.data
        console.log("Hello")
        for (let i = 0; i < arr.length; i++) {
            let temp = {}
            temp["title"] = arr[i].title
            temp["description"] = arr[i].description
            temp["date_time"] = arr[i].date_time
            temp["uuid"] = arr[i].uuid
            temp["likes"] = arr[i].likes
            temp["course"] = arr[i].course
            temp["receiver_email_id"] = arr[i].receiver_email_id
            temp["post_anonymous"] = arr[i].post_anonymous
            temp["profile_id"] = arr[i].profile_id
            tempForumReceived.push(temp)
        }
        console.log(tempForumReceived);
        this.setState({forum:tempForumReceived})

    }
    componentDidMount(){
        this.fnGetForums('CS253A');
    }

    render() {
        return (
            <>
                
                <div>
                    <GeneralHeader to="/instructor"/>
                </div>
                <div>InstructorForumDasboard</div>
                <div className='query-border'>
                    
                    {/* add button */}
                    
                        <button type="button" className="btn btn-primary justify-content-end mr-3">Resolve selected </button> &nbsp;
                        {/* add button */}
                        <button type="button" className="btn btn-primary justify-content-end">Reject selected </button>

                    <DashboardForumQuery data={this.state.forum}/>
                    <button type="button" className="btn btn-primary">Select All</button>
                    &nbsp;
                    <button type="button" className="btn btn-primary">Add New Post</button>
                </div>
            </>
            )
    }
}

// export default InstructorForumDasboard