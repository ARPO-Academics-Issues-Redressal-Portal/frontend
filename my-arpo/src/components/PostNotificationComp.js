import React from 'react'

function PostNotification(props) {
    return (
        <form className="form-inline">
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="form-group mx-sm-3 mb-2 border-size rounded mb-1">
                    <label htmlFor="inputPassword2" > 
                    {/* Query_Subject */}
                    {props.data.title}
                    {/* <input type="password" class="form-control" id="inputPassword2" placeholder="Password" /> */}
                    &nbsp;
                    <button type="submit" className="btn btn-primary mb-2 mt-2"> Open</button>

                    </label>
                </div>
            </div>
        </form>
    )
}

export default PostNotification