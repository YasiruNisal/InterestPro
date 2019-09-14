import React, { Component } from "react";
import InterestListItem from './InterestListItem'

export default class InterestList extends Component {

  constructor(props)
  {
    super(props)
    this.state = {
      accessToken: props.accessToken,
      responceArray : [],
      isLoading : true
    };
    this.testAPI2();
  }




  testAPI2 = async () => {
    const url = `https://graph.facebook.com/search?type=adinterestsuggestion&interest_list=["Golf"]&limit=50&locale=en_US&access_token=${this.state.accessToken}`;
    try {
      const responce = await fetch(url);
      const responcedata = await responce.json();
      console.log(responcedata.data[0]);
      this.setState({
        responceArray : responcedata.data
      })
    } catch (error) {}
  };


  render() {
    return (
      <>
      <h3 className="mx-auto col-1">Interests</h3>
      <div className="container pl-5 pt-3 rounded" style={{background:"#ececec"}}>
        
        <div className="row" >
            <h5 className="col-md-3 text-center text-capitalize">Name</h5>
            <h5 className="col-md-3 text-center text-capitalize">Population</h5>
            
              <span className="order ">
                  <i className="fas fa-sort fa-lg ml-n4"></i>
              </span>
            
            <h5 className="col-md-3 text-center text-capitalize">Path</h5> 
            
        </div>
       
    </div>
    {this.state.responceArray.map(item => (
      <InterestListItem key={item.id} data={item}/>
    ))}
    
    </>
    );
  }
}
