import React, { Component } from 'react';
import {Router ,Route ,Link, IndexRoute , browserHistory} from "react-router"
import * as firebase from "firebase";

class Donor_Data extends Component {
    constructor() {
    super();
    this.state = {
      donors: []
    }
    }
    componentWillMount() {
        
        var don = [];
        firebase.database().ref('/users/' ).on('value', (data) => {
                        let obj = data.val();
                        // console.log(obj);
                        for (var prop in obj){

                        
                        
                        don.push(obj[prop].newUser);
                        console.log(don);
            
                this.setState({
                donors : don
                })
                // console.log(this.state.donors);
                } // console.log(this.state.arr)
        })
  }
  render() {
    return (
      <div className="App">
        <div className="left-deshboard"> 
          <div className="User"> 

          </div>
          <Link className="list" to="/Welcome">Dashboard</Link>  
          <Link className="list" to="/donor-reg">Register Doner</Link> 
          <Link className="list" to="/donor" >Donnor</Link>          
 
        </div>
        <div className="right-deshboard">   
        <p> Doner List </p>
        {/*<button onClick={this.getValue}>getValue</button>*/}
          {this.state.donors.map((m,i)=>{
            return(
<div>
              <Link key={i} className="donorr-list" >
                <span className="element">{m.fname}</span>
                <span> {m.address}</span>
                <span> {m.cnum}</span>
                <span> {m.bloodg}</span>
                <span> {m.dob}</span>
              </Link>
              
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Donor_Data;
