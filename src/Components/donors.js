import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from "react-router"
import * as firebase from "firebase";
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500, yellow600 } from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import AppBar from 'material-ui/AppBar';


class Donor extends Component {
  constructor() {
    super();
    this.state = {
      donors: []
    }
  }
  componentWillMount() {

    var don = [];
    firebase.database().ref('/users/').on('value', (data) => {
      let obj = data.val();
      // console.log(obj);
      for (var prop in obj) {
        don.push(obj[prop].newUser);
        console.log(don);

        this.setState({
          donors: don
        })
        // console.log(this.state.donors);
      } // console.log(this.state.arr)
    })
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

          {/*<Link className="list">Donner</Link> */}
        </div>
        <hr />
        <h2>Donor List</h2>
        <List>
          <Subheader inset={true}></Subheader>
          {this.state.donors.map((val, i) => {
            return (
              <ListItem
                key={i}
                leftAvatar={<Avatar icon={<Avatar src="images/ok-128.jpg" />} />}
                rightIcon={<ActionInfo />}
                primaryText={val.fname}
                secondaryText={"Blood Group: " + val.bloodg}
              />
            )

          })}

        </List>
      </div>
    );
  }
}

export default Donor;
