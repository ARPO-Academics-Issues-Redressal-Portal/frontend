import React, { Component } from 'react'

export default class Card1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    render() {
        return (
            <div className="card text-center" style={{ width: "20rem",backgroundColor:"rgb(48 187 176)",borderRadius:'50px'}}>
            
                <div className="card-body p-4 pr-5 pl-5">
                    
                    <h5 className="card-title">{this.props.title}</h5>
                    <h5 className="card-text pt-3">
                        {this.props.desc}
                    </h5>

                

                    <button type="button" class="btn btn-primary">Access</button>
        

                </div>

            </div>
        
        )
    }
}
