import React, { Component } from 'react'
import InterestList from "../components/InterestList";

export default class InterestExplorer extends Component {
    constructor(props)
    {
        super(props);

        this.state = 
        {   
            accessToken : this.props.location.state.accessToken
        }
        
        
    }
    
   

    render() {
        if(this.state.accessToken)
        {
            return (
            
                <InterestList accessToken={this.state.accessToken}/>
            )
        }
        else
        {
            return (
            
                <h2 className="text-capitalize">Login With facebook first</h2>
            )
        }
    }
}
