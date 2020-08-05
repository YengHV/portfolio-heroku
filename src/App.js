import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import RepoComp from './components/RepoComp/Repositories';
import AboutMeComp from './components/AboutMeComp/AboutMe';
import ContactComp from './components/ContactComp/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBar/NavBarComp';

function App() {
  return (
   <Router>
    <div className="App"
      // style = {{
      //   backgroundColor: "#74B1EC"
      // }}
      >
    <NavBarComp></NavBarComp>
      <Switch>
      <Route path = '/Contact' component = {ContactComp}/>
      <Route path = '/Repo' component = {RepoComp}/>
      <Route path = '/' component = {AboutMeComp}/>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
