import React, { useState, useEffect } from 'react'
import GeneralHeader from '../components/GeneralHeader'




function AdminTsDashboard(props){
    const [cards, changeCards] = useState([
            {
                title:"Manage Queries",
                path:"/manageQueries"
            },
            {
                title:"Manage Notifications",
                path:"/notifications"
            }
    ]);
    let url = window.location.pathname;

    return (
            <div>
                <GeneralHeader to='/home' manage={true} />

                <div className='d-flex justify-content-around mt-4'>
                    {
                        cards.map((element, id) => (
                            <div className="card text-center" style={{ width: "20rem", backgroundColor: "rgb(48 187 176)", borderRadius: '50px' }} key={id}>

                                <div className="card-body p-4 pr-5 pl-5">

                                    <h5 className="card-title">{element.title}</h5>                  
                                    <a href={url+element.path}>
                                        <button type="button" className="btn btn-primary">Access</button>
                                    </a>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
    )
} 

export default AdminTsDashboard