import React, { Component } from 'react';
import { Link } from "react-router"
import TextField from 'material-ui/TextField';
import * as firebase from "firebase";
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';


class Donor_reg extends Component {
  constructor(props) {
    super(props);
    this.DataSave = this.DataSave.bind(this);
    const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};
  }

  DataSave() {
    const fname = this.refs.fname.getValue();
    const address = this.refs.address.getValue();
    const cnum = this.refs.cnum.getValue();
    const bloodg = this.refs.bloodg.getValue();
    const dob = this.refs.dob.getValue();
    var newUser = {
      fname: fname,
      address: address,
      cnum: cnum,
      bloodg: bloodg,
      dob: dob
    }
    // const auth = firebase.auth();
    // const DataSave = auth.createUserWithEmailAndPassword
    firebase.database().ref('users/').push({ newUser });
    console.log("Success");
    // console.log(this.refs.house.getValue())
  }
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
        <div className="right-deshboard">
          <h2> Registration Form </h2>


          <TextField
            hintText="Enter Name"
            floatingLabelText="Name"
            type="Text"
            ref="fname"
          /><br />
          <TextField
            hintText="Enter You Address"
            floatingLabelText="Address"
            type="Text"
            ref="address"
          /><br />
          <TextField
            hintText="Contact Number"
            floatingLabelText="Contact No."
            type="Text"
            ref="cnum"
          /><br />
          <TextField
            hintText="You Blood Group"
            floatingLabelText="Blood Group"
            type="Text"
            ref="bloodg"
          /><br />
          <TextField
            hintText="Date of Birth"
            floatingLabelText="D.O.B"
            type="Text"
            ref="dob"
          /><br /><br />
          <RaisedButton
      label="Save"
      labelPosition="before"
      primary={true}
      onClick={this.DataSave}
    />

          {/*<input  ref="fname" type="email" placeholder="Full Name" >
        
        </input><br />*/}
          {/*<input  ref="address" type="email" placeholder="Address" /><br />    
        <input  ref="cnum" type="email" placeholder="Contact No" /><br />
        <input  ref="bloodg" type="email" placeholder="Blood Group" /><br />
        <input className="abcc" ref="dob" type="email" placeholder="Date of Birth" /><br />*/}
          {/*<Link className="about" onClick={this.DataSave}>Save</Link>*/}
        </div>
      </div>
    );
  }
}

export default Donor_reg;
