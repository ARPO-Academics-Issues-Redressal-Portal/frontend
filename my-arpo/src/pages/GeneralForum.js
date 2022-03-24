import React, { Component } from 'react'
import GeneralHeader from '../components/GeneralHeader'
import { ForumsApi } from '../apis/Apis'
import {
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter
} from 'mdbreact';

export default class GeneralForum extends Component {

    constructor(props) {
        super(props)

        this.state = {
            forums: [{ titel: "xyz" }],
            abc: [],
            openModal: false,
            modalHeading: "Modal",
            modalBody: "Modal Body",
        }
    }

    fnGetForums = async () => {
        let res = await ForumsApi();
        let arr = res.data;
        console.log(res)
        this.setState({ forums: arr })
    }

    componentDidMount() {
        this.fnGetForums()
    }

    toggle = () => {
        this.setState({ openModal: !this.state.openModal })
    }

    render() {
        return (
            <>      
                <MDBContainer>
                <MDBModal isOpen={true} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
                    <MDBModalBody>
                        (...)
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
                </MDBContainer> 

                <div>
                    <div>
                        <GeneralHeader />
                    </div>
                    <h2 className='text-center m-0'>General Forum Dasboard</h2>

                    <div className='forum-border' >

                        {
                            this.state.forums.map((forum, index) => (
                                <div className='query-border d-flex align-items-center' key={index}>
                                    <h4 className='m-0'>{forum.title}</h4>
                                    <button
                                        className='btn btn-primary'
                                        style={{ marginLeft: 'auto' }}
                                        onClick={() => {
                                            this.setState({
                                                modalHeading: forum.titel,
                                                modalBody: forum.description
                                            })
                                            // this.toggle()
                                        }}
                                    >Open</button>
                                </div>
                            ))
                        }

                    </div>


                </div>
            </>

        )
    }
}
