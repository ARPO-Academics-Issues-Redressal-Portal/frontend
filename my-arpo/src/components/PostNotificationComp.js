import React from 'react'

function PostNotification() {
    return (
        <form class="form-inline">
            <div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div class="form-group mx-sm-3 mb-2" className="border-size rounded mb-1">
                    <label for="inputPassword2" > Query_Subject
                    {/* <input type="password" class="form-control" id="inputPassword2" placeholder="Password" /> */}
                    &nbsp;
                    <button type="submit" class="btn btn-primary mb-2 mt-2"> Open</button>

                    </label>
                </div>
            </div>
        </form>
    )
}

export default PostNotification