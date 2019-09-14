import React from "react";
// import FacebookAPI from "./FacebookAPI";
import { withRouter } from 'react-router-dom';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
      accessToken: ""
    };
  }

  loadFbLoginApi() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: 457188805131590,
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: "v4.0" // use version 2.1
      });
    };

    console.log("Loading fb api");
    // Load the SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  componentDidMount() {
    this.loadFbLoginApi();
  }

  testAPI() {
    console.log("Welcome!  Fetching your information.... ");
    window.FB.api(
      `/search?type=adinterestsuggestion&interest_list=["Golf"]&limit=10&locale=en_US&access_token=${this.state.accessToken}`,
      function(response) {
        console.log(response);
      }
    );
  }

  testAPI2 = async () => {
    const url = `https://graph.facebook.com/search?type=adinterestsuggestion&interest_list=["Golf"]&limit=10&locale=en_US&access_token=${this.state.accessToken}`;
    try {
      const responce = await fetch(url);
      const responcedata = await responce.json();
      console.log(responcedata);
    } catch (error) {}
  };

  statusChangeCallback(response) {
    console.log("statusChangeCallback");
    console.log(response);
    if (response.status === "connected") {
      this.setState({
        userLoggedIn: true,
        accessToken: response.authResponse.accessToken
      });
      this.testAPI2();

      this.props.history.push({
        pathname: '/interestexplorer',
        state: { accessToken: response.authResponse.accessToken }
      })
    } else if (response.status === "not_authorized") {
      console.log("Please log into this app.");
    } else {
      console.log("Please log into this facebook.");
    }
  }

  checkLoginState = () => {
    window.FB.getLoginStatus(
      function(response) {
        this.statusChangeCallback(response);
      }.bind(this)
    );
  };

  handleFBLogin = () => {
    window.FB.login(this.checkLoginState);
  };

  render() {
    return (
      <div className="mx-auto">
        
        <button className="btn btn-primary" onClick={this.handleFBLogin}>
          <span className="fab fa-facebook fa-2x"></span> Sign in with Facebook
        </button>
        
        {/* {this.state.userLoggedIn && (
          <FacebookAPI accessToken={this.state.accessToken} />
        )} */}
      </div>
    );
  }
}

export default withRouter(LoginComponent);
