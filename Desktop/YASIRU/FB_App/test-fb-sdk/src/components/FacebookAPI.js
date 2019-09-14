// import React, { Component } from 'react'
// import FacebookProvider, {  Initialize} from 'react-facebook'

// export default class FacebookAPI extends Component {

//     render() {
//         console.log("+++++ " + Initialize);

//         console.log("====== " + FacebookProvider);
//         return (

//              <FacebookProvider appId='457188805131590' >
//              <Initialize>
//                  {({isReady, api}) => {
//                     //  console.log("=========+++++++ " + api  + " " + isReady);
//                     //  api.ui(
//                     //     window.FB.init({
//                     //         appId      : '457188805131590',
//                     //         status     : true,
//                     //         xfbml      : true,
//                     //         version    : 'v4.0' // or v2.6, v2.5, v2.4, v2.3
//                     //       })
//                     //  )
//                  }}
//              </Initialize>
//          </FacebookProvider>
//         )
//     }
// }

import React, { Component } from "react";

export default class FacebookAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: props.accessToken
    };
  }

  testAPI2 = async () => {
    const url = `https://graph.facebook.com/search?type=adinterestsuggestion&interest_list=["Golf"]&limit=10&locale=en_US&access_token=${this.state.accessToken}`;
    try {
      const responce = await fetch(url);
      const responcedata = await responce.json();
      console.log(responcedata);
    } catch (error) {}
  };

  render() {
    return <button onClick={this.testAPI2}>call facebook api</button>;
  }
}
