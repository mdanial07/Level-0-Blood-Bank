import React from "react"
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {hashHistory,Link} from "react-router"
import firebase from "../firebase/firebase"


class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.signUpForm = this.signUpForm.bind(this)
    }
    signUpForm(e) {
        e.preventDefault();

        var email=this.refs.email.value;
        var password=this.refs.password.value;
        firebase.auth().createUserWithEmailAndPassword(email, password).then((user)=>{
                let userDetails = {
                    userEmail:user.email,
                }
                firebase.database().ref("users/" + user.uid).set(userDetails)
                hashHistory.push("/login")
        })
        hashHistory
    }
    render() {
        return (

            <form onSubmit={this.signUpForm} style = {{width:"500px", margin:"0px auto"}}>
                <div>
                    <h1 style ={{textAlign:"center"}}>Sign Up Component</h1>
                    <div>
                        Email
                  </div>
                    <input type="text" ref="email" />
                </div>
                <div>
                    <div>
                        Password
             </div>
                    <input type="password" ref="password" />
                </div>
                <div>
                    <button type="submit" >submit</button>
                    <Link to = "/login">Already have account</Link>
                </div>
            </form>
        )
    }