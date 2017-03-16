import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router ,Route , IndexRoute , browserHistory} from "react-router"
import Login from "./Components/Login"
import signup from "./Components/signup"
import Home from "./Components/Home"
import Welcome from "./Components/welcome"
import Donor from "./Components/donors"
import Donor_reg from "./Components/donor-reg"
import Donor_Data from "./Components/fulldata"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
      
    <Route path="/Login" component={Login} />
    
    <Route path="/signup" component={signup} />
    <Route path="/Welcome" component={Welcome}>
    </Route>
    <Route path="/donor" component={Donor} />
    <Route path="/donor-reg" component={Donor_reg}></Route>
    <Route path="/donor/Full" component={Donor_Data}></Route>
   
  {/*//browserHistory.push("/About")*/}
    </Router>
     </MuiThemeProvider>
    ,
  document.getElementById('root')
);


// function reducer (state,action)
// {
//   switch(action.type)
//   {
//     case "INCREMENT":
//     return  newState
//   }
// }


// store.dispatch(
//   return {
//     type: "INCREMENT"
//   }
// )
