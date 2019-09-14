import React, { Component } from "react";
import '../index.css'
export default class InterestListItem extends Component {

constructor(props)
{
    super(props);
    console.log(props.data);
    let { name, audience_size, path} = this.props.data
    console.log(path);
    if(path === null)
    {
        path = ["interest"]
    }

    
    this.state = {
        name            : name,
        audience_size   : audience_size,
        path            : path,

    }
}

numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




render() {
    
    return (
        <div>
            <div className="container my-2 pt-3 rounded">
                <div className="row ">
                <input type="checkbox" className="checkbox-one"></input>
                        <h5 className="col-md-3 text-center text-capitalize">{this.state.name}</h5>
                        <h5 className="col-md-3 text-center text-capitalize">{this.numberWithCommas(this.state.audience_size)}</h5>
                        <h5 className="col-md-2 text-center text-capitalize overflow-auto text-nowrap display-0.2">{this.state.path.join('>')}</h5>
                        <div className="col-md-3 text-center">
                            <span className="facebook mx-4">
                                <i className="fab fa-facebook fa-lg"></i>
                            </span>
                            <span className="google mx-4">
                                <i className="fab fa-google fa-lg"></i>
                            </span>
                            <span className="copy mx-4">
                                <i className="fas fa-copy fa-lg"></i>
                            </span>
                        </div>
                </div>
            </div>
        </div>
    );
  }
}
