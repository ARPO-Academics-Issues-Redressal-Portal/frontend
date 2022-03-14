import React from 'react'
function NotificationDashboard() {
    return (
        <form class="form-inline">

            {/* <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                    </label>
            </div> */}
           
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only border border-dark rounded">Notification</label>
                {/* <input type="password" class="form-control" id="inputPassword2" placeholder="Notification Heading" /> */}
            
                <button type="submit" class="btn btn-primary mb-2">Open</button>
                </div>
        </form>
    )
}

export default NotificationDashboard