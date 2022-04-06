
import './App.css';

import React, {useState,useRef} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const App  = (props)=> {
  const fref = useRef() ;
  const [progress, setProgress] = useState(0);
  // const [input, setInput] = useState("");
  const setProgressbar = (progress)=>{
    setProgress(progress);
  }
  const setInputFromNavbar = (input)=>{
    fref.current.searched(input)
  }
  
 
    return (
      <div>
      <Router>
 
      <NavBar  setinput  = {setInputFromNavbar}/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height = '5px'
      />
    <Switch>
    <Route exact path="/general"><News givenInput = {setInputFromNavbar} setProgressbar ={setProgressbar} key="general" country="in" category="general"/></Route> 
    <Route exact path="/science"><News  givenInput = {setInputFromNavbar} setProgressbar ={setProgressbar} key="science" country="in" category="science"/></Route> 
    <Route exact path="/business"><News givenInput = {setInputFromNavbar} setProgressbar ={setProgressbar}  key="business" country="in" category="business"/></Route> 
    <Route exact path="/entertainment"><News givenInput = {setInputFromNavbar}  setProgressbar ={setProgressbar} key="entertainment" country="in" category="entertainment"/></Route> 
    <Route exact path="/sports"><News givenInput = {setInputFromNavbar}  setProgressbar ={setProgressbar} key="sports" country="in" category="sports"/></Route> 
    <Route exact path="/technology"><News givenInput = {setInputFromNavbar}  setProgressbar ={setProgressbar} key="technology" country="in" category="technology"/></Route> 
    <Route exact path="/health"><News  setProgressbar ={setProgressbar} key="health" country="in" category="health"/></Route> 
    </Switch>
      </Router>
      </div>
    )
  }
  export default App;

