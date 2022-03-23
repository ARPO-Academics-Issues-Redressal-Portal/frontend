import React, { useState } from 'react'
function NotificationDashboard(props) {
    console.log("In Notif Now")
    console.log(props.data.heading)
    return (
        <form className="form-inline">

            {/* <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                    </label>
            </div> */}
           
            <div className="form-group mx-sm-3 mb-2 border-size rounded mb-1">
                <label htmlFor="inputPassword2" >
                    {props.data.heading}
                {/* <input type="password" class="form-control" id="inputPassword2" placeholder="Notification Heading" /> */}
            
                <button type="submit" className="btn btn-primary mb-2 mt-2 mr-2 ml-2" onClick={() =>{} }>Open</button>
                </label>
            </div>
        </form>
    )
}

export default NotificationDashboard