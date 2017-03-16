import React, { Component } from 'react';
// import { Link, browserHistory } from 'react-router';
import { Router, Route, Link, IndexRoute, browserHistory } from "react-router"
import AppBar from 'material-ui/AppBar';

import * as firebase from "firebase";


class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      donors: []
    }
    // this.getValue = this.getValue.bind(this);
  }
  // componentWillMount() {
  //   // let ref = firebase.database().ref('/users/');
  //   // ref.on('value', (data) => {
  //   //   var a = data.val();
  //   //   // console.log(a);
  //   //   for(var prop in a) 
  //   //   var arr = [];
  //   //   // console.log(a.email)
  //   //   arr.push(a[prop].newUser);
  //   // //  console.log(arr);
  //   //   this.setState({
  //   //     arr: arr
  //   //   })
  //   // })
  //  var don = [];
  //  firebase.database().ref('/users/' ).on('value', (data) => {
  //               let obj = data.val();
  //               // console.log(obj);
  //               for (var prop in obj){



  //               don.push(obj[prop].newUser);
  //                 // console.log(don);

  //       this.setState({
  //         donors : don
  //       })
  //       // console.log(this.state.donors);
  //         } // console.log(this.state.arr)
  //  })
  // }

  render() {
    return (
      <div className="App">
        <AppBar
          title="Blood Bank"
          iconClassNameRight="muidocs-icon-navigation-expand-more"

        />
        <div className="left-deshboard">

          <Link className="list" to="/Welcome">Dashboard</Link>
          <Link className="list" to="/donor-reg">Register Doner</Link>
          <Link className="list" to="/donor" >Donnors</Link>

        </div>
        <img src="http://www.qfree.in/media/images/listings/images/shharc-blood-bank.jpg" alt="" />
      </div>
    );
  }
}

export default Welcome;

/*
<div className="right-deshboard">   
        <p> Doner List </p>
        <button onClick={this.getValue}>getValue</button>
        {this.state.donors.map((m,i)=>{
            return(
              <table key={i}>
                <tbody>

                <tr><td>{m.email}</td>
            
        
                <td>{m.pass}</td></tr>
                </tbody>
                
              </table>
            )
          })}*/