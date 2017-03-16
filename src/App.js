import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <h1>DAnial</h1>

          <Link to="/Login" className="nnn">
            <RaisedButton label="Sign-in" primary={true} />
          </Link>

          <Link to="/signup">
            <RaisedButton label="Sign-up" primary={true} />

          </Link>
          {/*<Link to="/Welcome" className="about">Welcome</Link>          */}

        </div>
        {this.props.children}

      </div>
    );
  }
}

export default App;
