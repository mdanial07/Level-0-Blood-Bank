import React, { Component } from 'react';
import { Link } from 'react-router';
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import * as firebase from "firebase";
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';


class Login extends Component {
  constructor(props) {
    super(props)
    // this.signupp =this.signupp.bind(this)
    this.login = this.login.bind(this)
  }

  //login form k liye hai yai
  login() {
    const email = this.refs.email.getValue();
    const pass = this.refs.pass.getValue();

    const auth = firebase.auth();
    const signin = auth.signInWithEmailAndPassword(email, pass).then((result) => {
      browserHistory.push("/Welcome")
    });
  }



  render() {
    return (

      <div className="App">
        <AppBar title="Blood Bank" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <br /><br /><br />
        <TextField
          hintText="Enter Email Address"
          floatingLabelText="Email"
          type="email"
          ref="email"
        /><br />
        <TextField
          hintText="Enter Password"
          floatingLabelText="Password"
          type="password"
          ref="pass"
        /><br /><br /><br /><br />
        {/*<input id="txtEmail" ref="email" type="email" placeholder="Email" /><br />
        <input id="txtpassword" type="password" ref="pass" className="abcc" placeholder="password" /><br />*/}
        <Link to="/signup" className="about" >Signup</Link>
        <Link className="about" onClick={this.login}>Login </Link>

        {/*<button onClick={this.signupp} id="btnsignupp" className="btn btn-danger">signuppp</button>*/}
        {/*<button onClick={this.login} id="btnLogin" className="btn btn-primary">Login</button>*/}
        <div>
        </div>
        {this.props.children}
      </div>);


  }
}

export default Login;
