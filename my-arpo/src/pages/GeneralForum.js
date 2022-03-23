import React, { Component } from 'react'
import GeneralHeader from '../components/GeneralHeader'
import { ForumsApi } from '../apis/Apis'

export default class GeneralForum extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         forums : [{titel:"xyz"}],
         abc:[]

      }
    }

    fnGetForums = async ()=>{
        let res = await ForumsApi();
        let arr = res.data;
        console.log(res)
        this.setState({forums:arr})
    }

    componentDidMount(){
        this.fnGetForums()
    }

  render() {
    return (
      <div>
          <div>
              <GeneralHeader />
          </div>
          <h2 className='text-center m-0'>General Forum Dasboard</h2>

          <div className='forum-border' >

              {
                  this.state.forums.map((forum,index)=>(
                      <div className='query-border d-flex align-items-center' key={index}>
                          <h4 className='m-0'>{forum.title}</h4>
                          <button className='btn btn-primary' style={{marginLeft:'auto'}}>Open</button>
                      </div>
                  ))
              }

          </div>


      </div>
    )
  }
}
