import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    render() {
        return (
            <div className="card" style={{ width: "20rem",backgroundColor:"rgb(48 187 176)",borderRadius:'50px'}}>
            
                <div className="card-body p-4 pr-5 pl-5">
                    
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text pt-3">
                        {this.props.desc}
                    </p>

                    <p className='text-center'>
                        ..................................
                    </p>
                    <p>
                        ...................................................
                    </p>
                    <p>
                        ..................................
                    </p>

                </div>

            </div>
        
        )
    }
}
