import React, { Component } from 'react'
import GeneralHeader from '../../components/GeneralHeader'


export default class CoursesPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            studentCards: [
                {
                    title: "Course1",
                    desc: "Inst1",
                    id: 'course1'
                },
                {
                    title: "Course2",
                    desc: "Inst2",
                    id:"course2"
                },
                {
                    title: "Course3",
                    desc: "Inst3",
                    id:'course3'
                },
            ],
        }
    }

    render() {
        return (

            <div>
                <GeneralHeader to={'/instructor'} />

                <div className='d-flex justify-content-around mt-4'>
                    {
                        this.state.studentCards.map((data, id) => (

                            <div className="card text-center" style={{ width: "20rem", backgroundColor: "rgb(48 187 176)", borderRadius: '50px' }} key={id}>


                                <div className="card-body p-4 pr-5 pl-5">

                                    <h5 className="card-title">{data.title}</h5>
                                    <h5 className="card-text pt-3">
                                        {data.desc}
                                    </h5>

                                    <a href={'/instructor/courses/' + data.id}>
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
}
