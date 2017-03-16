import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import * as firebase from "firebase";
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyA0cs00Gbkag8j-pn1bt9YsTdhYA6Fn8cQ",
  authDomain: "authentication-6fcb8.firebaseapp.com",
  databaseURL: "https://authentication-6fcb8.firebaseio.com",
  storageBucket: "authentication-6fcb8.appspot.com",
  messagingSenderId: "782787892895"
};
firebase.initializeApp(config);



class signupp extends Component {

  constructor(props) {
    super(props)
    this.signupp = this.signupp.bind(this)
    // this.login = this.login.bind(this)

  }

  signupp() {
    const fname = this.refs.fname.getValue();
    const email = this.refs.email.getValue();
    const pass = this.refs.pass.getValue();
    var newUser = {
      fname: fname,
      email: email,
      pass: pass
    }

    const auth = firebase.auth();
    const signin = auth.createUserWithEmailAndPassword(fname, email, pass).then(

    )
    // browserHistory

    console.log('success')

  }
  // datapush(ev){
  //     var a;
  //     var aa;
  //     ev.preventDefault();
  //     aa = this.refs.Chatapp1.value
  //     a = this.refs.Chatapp.value

  //     var firebaseName = firebase.database().ref().child("users");    
  //     firebaseName.push({Name:aa,Message:a});
  //     // a.push(aa);
  //     console.log(aa);
  //     <a href="#"></a>
  //     // console.log(a);
  //     this.refs.Chatapp.value = '';
  //     // this.refs.Chatapp1.value = '';
  //   }

  //login form k liye hai yai
  // login(){

  // const email = this.refs.email.value;
  // const pass = this.refs.pass.value;

  // const auth = firebase.auth();
  // const signin = auth.signInWithEmailAndPassword(email , pass).then(
  // console.log('success yooohoooo')

  // );
  // }



  render() {
    return (

      <div className="App">
<AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
<br/><br/><br/>
<TextField
            hintText="Enter Name"
            floatingLabelText="Name"
            type="Text"
            ref="fname"
          /><br />
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
          /><br />
        <input ref="email" type="email" placeholder="Email" /><br />
        <input type="password" className="abcc" ref="pass" placeholder="password" /><br />
        <Link className="about" onClick={this.signupp} >Signup</Link>
        <Link to="/Login" className="about">Login </Link>
        {/*<Link to="/Login" className="about">Login </Link>*/}

        {/*<button onClick={this.signupp} id="btnsignupp" className="btn btn-danger">signuppp</button>
                <button onClick={this.login} id="btnLogin" className="btn btn-primary">Login</button>*/}

        {/*<form onSubmit={this.datapush.bind(this)}>
                  <input type="text" ref="Chatapp1" placeholder="Enter Name"/> <br/><br/><br/>        
                  <button onClick="nameBtn()">Enter</button> <br/><br/><br/> 
                  <input type="text" ref="Chatapp" placeholder="Enter Text"/>
                  <button className="btn">Sent</button><br/><br/>
                </form>*/}

        <div>
          {/*<Link to="/Welcome" className="about">Welcome</Link>          */}

        </div>
        {this.props.children}


      </div>);


  }
}

export default signupp;
