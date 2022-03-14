import React from 'react'

function PostNotification() {
    return (
        <form class="form-inline">
            <div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only border border-dark rounded">Query</label>
                    {/* <input type="password" class="form-control" id="inputPassword2" placeholder="Password" /> */}

                    <button type="submit" class="btn btn-primary mb-2">open</button>
                </div>
            </div>
        </form>
    )
}

export default PostNotification